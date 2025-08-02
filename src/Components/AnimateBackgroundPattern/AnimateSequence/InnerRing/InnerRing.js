import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {LinearRing} from '~/Transitions';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function InnerRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [400, 1600], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1400)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='inner ring' 
                    className={styles.container}
                    exit={{opacity: 0}}>
                    <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} >
                        <defs>
                            <filter id='glowEffectInnerRing' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                        </defs>
                        <motion.image 
                            x={37}
                            y={36}
                            initial={{rotate: 0, opacity: 1}} 
                            animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 21.9, ease: 'linear', delay: 2}}}
                            style={{scale: smoothScale}}
                            className={styles.ring}
                            href={images['innerRing']}
                            />                            
                    </svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default InnerRing;