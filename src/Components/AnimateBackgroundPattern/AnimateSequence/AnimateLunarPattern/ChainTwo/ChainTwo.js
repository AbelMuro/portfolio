import React, {useState, useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {useScroll, motion, useTransform, useSpring, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainTwo() {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const scale = useTransform(scrollY, [14000, 14500], [1, 15]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const scaleChain = useTransform(scrollY, [16000, 16200], [0, 1]);
    const smoothScaleChain = useSpring(scaleChain, {stiffness: 150, damping: 80});

    const scaleStar = useTransform(scrollY, [16500, 16700], [0, 1]);
    const smoothScaleStar = useSpring(scaleStar, {stiffness: 150, damping: 80});

    const scaleCircle = useTransform(scrollY, [16700, 17000], [0, 1]);
    const smoothScaleCircle = useSpring(scaleCircle, {stiffness: 150, damping: 80})

    const transform = useMotionTemplate`translate(-37px, 8px) scale(${smoothScale})`

    return(
        <motion.div id='chain two' className={styles.container}>
            <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                <motion.g style={{transform}}>
                    {/* chain */}
                    <motion.path
                        className={styles.chain}
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
                        style={{scale: smoothScaleChain}}
                        d="m 137.35835,99.015007 0.001,0.259004"
                        id="path5"
                        />
                    {/* start */}
                    <motion.path
                        fill="#0400ff"
                        stroke="#0400ff"
                        strokeWidth={0.000872863}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        style={{scale: smoothScaleStar}}
                        d="m 137.37535,99.315156 c 0,0 -0.0105,-0.007 -0.0165,-0.0069 -0.006,8.8e-5 -0.0152,0.007 -0.0152,0.007 0,0 0.005,-0.0108 0.003,-0.01603 -0.002,-0.0061 -0.0128,-0.0141 -0.0128,-0.0141 0,0 0.0132,0.0015 0.018,-0.002 0.005,-0.0036 0.008,-0.01662 0.008,-0.01662 0,0 0.001,0.01306 0.006,0.01668 0.005,0.004 0.0196,0.0019 0.0196,0.0019 0,0 -0.0135,0.0074 -0.0152,0.01413 -0.001,0.0055 0.005,0.01603 0.005,0.01603 z"
                        id="path6"
                        />

                    <motion.circle
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
                        style={{scale: smoothScaleCircle}}
                        />


                </motion.g>
            </svg>
        </motion.div>
    )
}

export default ChainTwo;