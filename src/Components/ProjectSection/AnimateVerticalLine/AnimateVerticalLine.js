import React, {useState, useRef} from 'react';
import {motion, useTransform, useSpring, useScroll, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to finish adding more detail to the following design
*/


function AnimateVerticalLine({row, column}) {
    const {scrollY} = useScroll();
    const strokeDashoffset = useTransform(scrollY, [18500, 19000], [295.9041442871094, 0])
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    return(
        <AnimatePresence>
            <motion.svg className={styles.svg} viewBox={"0 0 30.055271 297.90417"} style={{gridColumn: column, gridRow: row}}>
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
                <g transform='translate(-120, -30)'>
                    <motion.path
                        id="path3"
                        d="m 135.46034,32.382499 -0.0508,295.904151"
                        fill="#0400ff"
                        stroke="#0400ff"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeDasharray={295.9041442871094}
                        style={{strokeDashoffset: smoothStrokeDashoffset}}
                    />
                </g>
            </motion.svg>
        </AnimatePresence>
    )
}

export default AnimateVerticalLine;