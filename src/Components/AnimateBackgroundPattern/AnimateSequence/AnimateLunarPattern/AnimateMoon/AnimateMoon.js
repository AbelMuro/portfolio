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
                        <filter id='glowEffectMoon'>
                            <motion.feGaussianBlur 
                                in="SourceAlpha" 
                                result="blur"
                                initial={{stdDeviation: 0.02}}
                                animate={{stdDeviation: [0.04, 0.02, 0.04], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                />
                            <feFlood floodColor="#0400ff" floodOpacity='0.7' result="color"/>
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