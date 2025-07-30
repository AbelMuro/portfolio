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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 206.40488 206.40488"} className={styles.svg}>
                    <defs>
                        <filter id='glowEffectLargeMoon' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#0400ff" floodOpacity={1}/>
                        </filter>   
                        <filter id='glowEffectSwingMoon' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                        </filter>         

                    </defs>
                    <Moon/>                     
                    <BlackPattern/>    
                    <SwingingMoon/>  
                </svg>
        </motion.div>
    )
}

export default AnimateMoon;