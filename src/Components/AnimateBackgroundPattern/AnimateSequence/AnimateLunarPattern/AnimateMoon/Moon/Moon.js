import React from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function Moon() {
    const {scrollY} = useScroll();

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, LinearMoon); 

    return(         
        <motion.path
            filter={'url(#glowEffect)'}
            id="path4"
            fill='#0400ff'
            stroke='#0400ff'
            strokeWidth='0'
            style={{opacity: opacitySmooth}}
            d="m 137.86313,98.771578 c 0,0.17396 -0.14103,0.31499 -0.31501,0.31499 -0.17396,0 -0.31499,-0.14103 -0.31499,-0.31499 0,-0.17398 0.14103,-0.31501 0.31499,-0.31501 0.0425,0 -0.12204,0.0416 -0.17326,0.15087 -0.0428,0.0912 -0.0416,0.18995 0.0457,0.27235 0.10267,0.0968 0.23663,0.0903 0.32283,0.0372 0.0968,-0.0597 0.11973,-0.19615 0.11973,-0.14539 z" />

    )
}

export default Moon;