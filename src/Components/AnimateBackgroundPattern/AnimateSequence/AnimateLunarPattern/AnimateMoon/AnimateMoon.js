import React from 'react';
import SwingingMoon from './SwingingMoon';
import Moon from './Moon';
import BlackPattern from './BlackPattern';
import {LinearMoon} from '~/Transitions';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionTemplate, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function AnimateMoon() {
    const {scrollY} = useScroll();

    const z = useTransform(scrollY, [8500, 9000], [0, 150]);
    const smoothZ = useSpring(z, LinearMoon);
    const translateZBack = useTransform(scrollY, [12800, 13000], [150, 0]);
    const transformContainer = useMotionTemplate`translateZ(${smoothZ}px)`;

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    });

    return(
        <motion.div id='moon' className={styles.container} style={{transform: transformContainer}}>
                <motion.svg viewBox={"0 0 206.40488 206.40488"} className={styles.svg}>
                    <defs>
                        <filter id='glowEffectLargeMoon'>
                            <motion.feGaussianBlur 
                                in="SourceAlpha" 
                                result="blur"
                                stdDeviation={0.04}
                                />
                            <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="glow"/>
                            <feMerge>
                                <feMergeNode in="glow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id='glowEffectSmallMoon' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0400ff" floodOpacity={1}/>
                        </filter> 
                    </defs>
                    <Moon/>                     
                    <BlackPattern/>    
                    <SwingingMoon/>  
                </motion.svg>
        </motion.div>
    )
}

export default AnimateMoon;