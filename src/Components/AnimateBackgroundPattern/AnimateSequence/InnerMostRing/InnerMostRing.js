import React, {useContext, useState} from "react";
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {LinearRing} from '~/Transitions';
import {motion, useScroll, AnimatePresence, useMotionValueEvent, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function InnerMostRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [600, 1800], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1800)
            setMount(false);
        else
            setMount(true);
    })


    return( 
        <AnimatePresence>
            {
                mount &&
                <motion.div
                    id='inner most ring'
                    className={styles.container}
                    initial={{rotate: 0}} 
                    animate={{rotate: [0, 360], transition: {repeat: Infinity, duration: 8.9, ease: 'linear', delay: 3}}} 
                    exit={{opacity: 0, transition: {duration: 0.7}}}
                    style={{scale: smoothScale}}
                    >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={styles.svg} 
                        viewBox={"0 0 206.40488 206.40488"}
                        >
                            <defs>
                                <filter id='glowEffectInnerMostRing' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#0400ff" floodOpacity={1}/>
                                </filter>
                                
                            </defs>
                            <image
                                x={103.20244 - 87.5}
                                y={103.20244 - 87.5}
                                filter={'url(#glowEffectInnerMostRing)'}
                                className={styles.ring}
                                href={images['innerMostRing']}/>
                    </svg>                    
                </motion.div>

            }
        </AnimatePresence>

    )
}

export default InnerMostRing;