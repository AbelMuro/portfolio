import React, {useState} from 'react';
import {useScroll, motion, useTransform, useSpring, useMotionTemplate, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainTwo() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleContainer = useTransform(scrollY, [600, 1800], [1, 5])
    const scaleContainerSmooth = useSpring(scaleContainer, {stiffness: 150, damping: 40});
    const scaleContainerMore = useTransform(scrollY, [6500, 7000], [5, 10]);   

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 40});

    const scaleGroup = useTransform(scrollY, [15900, 16400], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, {stiffness: 150, damping: 40});

    const transform = useMotionTemplate`translate(-38px, 10px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    });

    useMotionValueEvent(scaleContainerMore, 'change', (value) => {
        scaleContainerSmooth.set(value);
    });

    return(
        <AnimatePresence>
            {
            mount &&
            <motion.div id='chain two' className={styles.container} exit={{opacity: 0}} style={{scale: smoothScaleGroup}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleContainerSmooth}}>
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
                            {/* chain */}
                            <path
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.00724307}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="0.0144861, 0.00724307, 0.00362154, 0.00724307"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                d="m 137.35835,99.015007 0.001,0.259004"
                                id="path5"
                                />
                            {/* start */}
                            <path
                                fill="#0400ff"
                                stroke="#0400ff"
                                strokeWidth={0.000872863}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                d="m 137.37535,99.315156 c 0,0 -0.0105,-0.007 -0.0165,-0.0069 -0.006,8.8e-5 -0.0152,0.007 -0.0152,0.007 0,0 0.005,-0.0108 0.003,-0.01603 -0.002,-0.0061 -0.0128,-0.0141 -0.0128,-0.0141 0,0 0.0132,0.0015 0.018,-0.002 0.005,-0.0036 0.008,-0.01662 0.008,-0.01662 0,0 0.001,0.01306 0.006,0.01668 0.005,0.004 0.0196,0.0019 0.0196,0.0019 0,0 -0.0135,0.0074 -0.0152,0.01413 -0.001,0.0055 0.005,0.01603 0.005,0.01603 z"
                                id="path6"
                                />
                            <circle
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.00421353}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path11-63"
                                cx={137.35896}
                                cy={99.156044}
                                r={0.013795333}
                                />
                        </motion.g>
                </motion.svg>
            </motion.div>}            
        </AnimatePresence>

    )
}

export default ChainTwo;