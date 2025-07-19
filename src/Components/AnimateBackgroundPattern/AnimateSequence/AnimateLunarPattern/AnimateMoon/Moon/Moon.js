import React, {useContext} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useMotionTemplate, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function Moon() {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const scaleMoon = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScaleMoon = useSpring(scaleMoon, {stiffness: 150, damping: 80});    

    const transformMoon = useMotionTemplate`translate(-34.5px, 2.9px) scale(${smoothScaleMoon})`;

    return(         
            <motion.path
                id="path4"
                fill="#0400ff"
                fillOpacity={1}
                stroke="#0400ff"
                strokeWidth={0}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={0}
                strokeDasharray="none"
                strokeOpacity={1}
                style={{opacity: opacitySmooth, transform: transformMoon}}
                d="m 137.86313,98.771578 c 0,0.17396 -0.14103,0.31499 -0.31501,0.31499 -0.17396,0 -0.31499,-0.14103 -0.31499,-0.31499 0,-0.17398 0.14103,-0.31501 0.31499,-0.31501 0.0425,0 -0.12204,0.0416 -0.17326,0.15087 -0.0428,0.0912 -0.0416,0.18995 0.0457,0.27235 0.10267,0.0968 0.23663,0.0903 0.32283,0.0372 0.0968,-0.0597 0.11973,-0.19615 0.11973,-0.14539 z"
                />

    )
}

export default Moon;