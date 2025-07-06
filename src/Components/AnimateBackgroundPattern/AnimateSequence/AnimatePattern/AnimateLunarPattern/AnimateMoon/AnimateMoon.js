import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';


/* 
    this is where i left off, i need to animate the scale for this component correctly
    and center it, then i can create the components for the lunar design
*/

function AnimateMoon() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    
    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const z = useTransform(scrollY, [8500, 9000], [0, 15]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const translateZBack = useTransform(scrollY, [12800, 13000], [15, 0]);

    const scale = useTransform(scrollY, [14000, 14500], [1, 5]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const transform = useMotionTemplate`translateZ(${smoothZ}px) scale(${smoothScale})`;

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 8000)
            setMount(false);
        else
            setMount(true);
    });

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div id='moon' className={styles.container} style={{transform}} exit={{opacity: 0}}>
                    <motion.svg viewBox={"0 0 206.40488 206.40488"} className={styles.svg}>
                        <defs>
                            <filter id='glowEffect'>
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur">
                                    <animate attributeName="stdDeviation" values="2;0;2" dur="3s" repeatCount="indefinite" calcMode="linear"/>
                                </feGaussianBlur>
                                <feFlood floodColor="#0400ff" floodOpacity='0.5' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.g transform='translate(-34.5, 2.9)' style={{opacity: opacitySmooth}}>
                            <path
                                id="path4"
                                filter={'url(#glowEffect)'}
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                d="m 137.86313,98.771578 c 0,0.17396 -0.14103,0.31499 -0.31501,0.31499 -0.17396,0 -0.31499,-0.14103 -0.31499,-0.31499 0,-0.17398 0.14103,-0.31501 0.31499,-0.31501 0.0425,0 -0.12204,0.0416 -0.17326,0.15087 -0.0428,0.0912 -0.0416,0.18995 0.0457,0.27235 0.10267,0.0968 0.23663,0.0903 0.32283,0.0372 0.0968,-0.0597 0.11973,-0.19615 0.11973,-0.14539 z"
                                />
                        </motion.g>
                    </motion.svg>
            </motion.div>}

        </AnimatePresence>

        
    )
}

export default AnimateMoon;