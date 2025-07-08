import React, {useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainOne() {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const scale = useTransform(scrollY, [14000, 14500], [1, 15]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const scaleChain = useTransform(scrollY, [16000, 16200], [0, 1]);
    const smoothScaleChain = useSpring(scaleChain, {stiffness: 150, damping: 80});

    const scaleCircle = useTransform(scrollY, [16200, 16400], [0, 1]);
    const smoothScaleCircle = useSpring(scaleCircle, {stiffness: 150, damping: 80});

    const scaleMoon = useTransform(scrollY, [16400, 16600], [0, 1]);
    const smoothScaleMoon = useSpring(scaleMoon, {stiffness: 150, damping: 80});

    const strokeDashoffset = useTransform(scrollY, [16600, 17200], [0.19261932373046875, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    const transform = useMotionTemplate`translate(-38.5px, 7px) scale(${smoothScale})`;

    return(
        <motion.div id='chain one' className={styles.container}>
            <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                <motion.g style={{transform}}>
                    <motion.path
                        className={styles.chain}
                        fill="#0400ff"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={0.00304209}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeDasharray="0.00304209, 0.01912627"
                        strokeDashoffset={0}
                        strokeOpacity={1}
                        style={{scaleY: smoothScaleChain}}
                        d="m 137.25784,98.876238 0.001,0.370277"
                        id="path5-9"
                        />
                    {/* moon*/}
                    <motion.path
                        fill="#0400ff"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={0}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeDasharray="none"
                        strokeOpacity={1}
                        style={{scale: smoothScaleMoon}}
                        d="m 137.27739,99.277739 c 9.8e-4,0.0099 -0.006,0.01846 -0.0162,0.01855 -0.01,-3.2e-4 -0.0177,-0.0071 -0.0181,-0.0168 -9.8e-4,-0.0099 0.006,-0.01846 0.0162,-0.01852 0.002,-8.48e-4 -0.006,0.0029 -0.009,0.0093 -0.002,0.0044 -0.003,0.01002 0.003,0.01507 0.006,0.0054 0.0133,0.0043 0.0178,0.0012 0.005,-0.0044 0.006,-0.01166 0.006,-0.0081 z"
                        id="path4-4-3"
                        />

                    <motion.rect
                        fill="#0400ff"
                        fillOpacity={0}
                        stroke="#0400ff"
                        strokeWidth={0.0082571}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeOpacity={1}
                        id="rect13"
                        width={0.048152097}
                        height={0.048152097}
                        x={167.23331}
                        y={-26.891945}
                        transform="rotate(45.004389)"
                        strokeDasharray={0.19261932373046875}
                        style={{strokeDashoffset: smoothStrokeDashoffset}}
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
                        id="path8-88"
                        cx={137.25793}
                        cy={98.987175}
                        rx={0.011394637}
                        ry={0.011380743}
                        style={{scale: smoothScaleCircle}}
                        />                    
                </motion.g>
                    
            </svg>
        </motion.div>
    )
}

export default ChainOne;