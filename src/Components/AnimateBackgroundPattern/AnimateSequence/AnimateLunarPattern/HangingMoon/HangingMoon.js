import React, {useContext, useState, useEffect} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, useAnimationControls, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function HangingMoon(){
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const controlSwing = useAnimationControls();

    const scale = useTransform(scrollY, [14000, 14500], [1, 15]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const strokeDashoffset = useTransform(scrollY, [16500, 17000], [0.8, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});
    const strokeDashoffsetBack = useTransform(scrollY, [18700, 19200], [0, 0.8])

    const fill = useTransform(scrollY, [17000, 17500], ['#0400ff00', '#0400ff']);

    const opacity = useTransform(scrollY, [18000, 18500], [1, 0]);
    const smoothOpacity = useSpring(opacity, {stiffness: 150, damping: 80})
    
    const transform = useMotionTemplate`translate(-35px, 0.6px) scale(${smoothScale})`;

    useMotionValueEvent(strokeDashoffsetBack, 'change', (value) => {
        smoothStrokeDashoffset.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false);
        else
            setMount(true)
    })


    useEffect(() => {
        if(mount)
            controlSwing.start({rotate: [0, 35, 0, -35, 0], transition: {duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'linear'}});
    }, [mount])

    return(
        <AnimatePresence>
            {
                mount && 
                <motion.div id='hanging moon' className={styles.container} exit={{opacity: 0}}>
                <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
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
                    <motion.g className={styles.group} animate={controlSwing}>
                        <motion.g style={{transform}} filter={'url(#glowEffect)'}>
                            <motion.path
                                strokeDasharray={0.8}
                                style={{strokeDashoffset: smoothStrokeDashoffset}}
                                id="path12"
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.00528254}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeOpacity={1}
                                d="m 137.53809,98.464359 v 0.159475"
                                />

                            <motion.path
                                className={styles.moon}
                                strokeDasharray={0.8}
                                style={{strokeDashoffset: smoothStrokeDashoffset, fill, opacity: smoothOpacity}}
                                id="path4-4"
                                stroke="#0400ff"
                                strokeWidth={0.00239823}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeOpacity={1}
                                d="m 137.57719,98.713273 c -0.02,0.02072 -0.053,0.0213 -0.0738,0.0012 -0.0204,-0.0202 -0.0214,-0.05287 -0.001,-0.07372 0.02,-0.02071 0.053,-0.02131 0.0737,-0.0013 0.005,0.0048 -0.0193,-0.0091 -0.038,-0.002 -0.0155,0.006 -0.0269,0.01777 -0.0255,0.03796 0.001,0.02332 0.0182,0.03777 0.0344,0.0414 0.0184,0.004 0.0368,-0.0096 0.0309,-0.0035 z"
                                />
                        </motion.g>                    
                    </motion.g>
                </svg>
                </motion.div>
            }

        </AnimatePresence>

    )

}

export default HangingMoon;