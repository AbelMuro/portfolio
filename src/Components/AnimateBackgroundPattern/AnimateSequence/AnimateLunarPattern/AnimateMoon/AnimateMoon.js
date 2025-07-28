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
                                initial={{stdDeviation: 0.4}}
                                animate={{stdDeviation: [0.4, 0.2, 0.4], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                />
                            <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="glow"/>
                            <feMerge>
                                <feMergeNode in="glow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id='glowEffectSwingMoon'>
                            <motion.feGaussianBlur 
                                in="SourceAlpha" 
                                result="blur"
                                initial={{stdDeviation: 2}}
                                animate={{stdDeviation: [2, 0.8, 2], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                />
                            <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="glow"/>
                            <feMerge>
                                <feMergeNode in="glow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
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