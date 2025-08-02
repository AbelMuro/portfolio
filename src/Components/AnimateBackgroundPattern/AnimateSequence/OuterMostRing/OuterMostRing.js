import React, {useState} from 'react';
import {LinearRing} from '~/Transitions';
import {motion, useMotionValueEvent, useScroll, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function OuterMostRing(){
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1200], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 600)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='outer most ring'
                    className={styles.container}
                    exit={{opacity: 0}}
                    >
                    <svg className={styles.container} viewBox="0 0 206 205" >
                        <defs>
                            <filter id='glowEffectOuterMostRing' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                    <feFlood floodColor="#0400ff" floodOpacity="1" result="floodFill" />
                                    <feComposite in="floodFill" in2="SourceGraphic" operator="in" result="coloredShape" />
                                    <feGaussianBlur in="coloredShape" stdDeviation="1" result="blurredGlow" />
                                    <feMerge>
                                        <feMergeNode in="blurredGlow" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                            </filter>  
                        </defs>
                            <motion.image
                                x={2.20244} 
                                y={2.63359} 
                                initial={{opacity: 1, rotate: 0}} 
                                animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 31, ease: 'linear'}}} 
                                style={{scale: smoothScale}}
                                className={styles.ring} 
                                href={images['outerMostRing']} 
                                filter={'url(#glowEffectOuterMostRing)'}
                            />
                    </svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default OuterMostRing;
