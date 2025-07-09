import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainThree() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const scale = useTransform(scrollY, [14000, 14500], [1, 15]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const scaleChain = useTransform(scrollY, [16500, 16700], [0, 1]);
    const smoothScaleChain = useSpring(scaleChain, {stiffness: 150, damping: 80});

    const scaleCircle = useTransform(scrollY, [17200, 17500], [0, 1]);
    const smoothScaleCircle = useSpring(scaleCircle, {stiffness: 150, damping: 80})

    const transform = useMotionTemplate`translate(-35px, 8px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div id='chain three' className={styles.container} exit={{opacity: 0}}>
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

                        <motion.g style={{transform}} filter={'url(#glowEffect)'}>
                            <motion.path
                                className={styles.chain}
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.00434584}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="0.00434584, 0.00869169"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                style={{scale: smoothScaleChain}}
                                d="m 137.39252,99.038723 c 0,0 -6e-4,0.208616 0.10605,0.209423 0.089,6.73e-4 0.0844,-0.163909 0.0844,-0.163909"
                                id="path7"
                                />

                            <motion.ellipse
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0.00474776}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path8"
                                cx={137.40131}
                                cy={99.121437}
                                rx={0.011394637}
                                ry={0.011380743}
                                style={{scale: smoothScaleCircle}}
                                />

                            <motion.ellipse
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0.00474776}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path8-5"
                                cx={137.42023}
                                cy={99.18689}
                                rx={0.011394637}
                                ry={0.011380743}
                                style={{scale: smoothScaleCircle}}
                                />

                            <motion.ellipse
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0.00474776}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path8-9"
                                cx={137.49509}
                                cy={99.247375}
                                rx={0.011394637}
                                ry={0.011380743}
                                style={{scale: smoothScaleCircle}}
                                />

                            <motion.ellipse
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0.00474776}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path8-4"
                                cx={137.56696}
                                cy={99.18869}
                                rx={0.011394637}
                                ry={0.011380743}
                                style={{scale: smoothScaleCircle}}
                                />

                            <motion.ellipse
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0.00474776}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path8-3"
                                cx={137.58012}
                                cy={99.128799}
                                rx={0.011394637}
                                ry={0.011380743}
                                style={{scale: smoothScaleCircle}}
                                />

                        </motion.g>
                    </svg>            
                </motion.div> 
            }              
        </AnimatePresence>
   
    )
}

export default ChainThree;