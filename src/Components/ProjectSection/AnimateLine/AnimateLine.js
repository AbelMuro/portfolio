import React, {useEffect} from 'react';
import {motion, AnimatePresence, useTransform, useSpring, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateLine({scrollThresholds}) {
    const {scrollY} = useScroll();

    const strokeDashoffset = useTransform(scrollY, scrollThresholds, [295.9041442871094, 0])
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    return(
       <AnimatePresence>
            <motion.svg className={styles.svg} viewBox={"0 0 30.055271 297.90417"}>
                <defs>
                    <filter id='glowEffect'>
                        <motion.feGaussianBlur 
                            in="SourceAlpha" 
                            
                            result="blur"
                            initial={{stdDeviation: 2}}
                            animate={{stdDeviation: [2, 0, 2], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                            />
                        <feFlood floodColor="#0400ff" floodOpacity='0.5' result="color"/>
                        <feComposite in="color" in2="blur" operator="in" result="glow"/>
                        <feMerge>
                            <feMergeNode in="glow"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <g transform={`translate(-120, -30)`}>
                    <motion.path
                        id="path3"
                        d="m 135.46034,32.382499 -0.0508,295.904151"
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

export default AnimateLine;