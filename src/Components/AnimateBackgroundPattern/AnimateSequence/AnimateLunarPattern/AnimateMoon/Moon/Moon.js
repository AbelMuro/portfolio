import React from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function Moon() {
    const {scrollY} = useScroll();

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, LinearMoon); 

    const scaleGroup = useTransform(scrollY, [14000, 14500], [1, 18]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-63.5px, -20px) scale(${smoothScaleGroup})`

    return(         
        <motion.g className={styles.group} style={{transform}}>
            <motion.path
                filter={'url(#glowEffectMoon)'}
                id="path4"
                fill='#0400ff'
                stroke='#0400ff'
                strokeWidth='0'
                style={{opacity: opacitySmooth}}
                d="m 167.99482,109.4158 c 0,1.7396 -1.4103,3.1499 -3.1501,3.1499 -1.7396,0 -3.1499,-1.4103 -3.1499,-3.1499 0,-1.7398 1.4103,-3.1501 3.1499,-3.1501 0.425,0 -1.2204,0.416 -1.7326,1.5087 -0.428,0.912 -0.416,1.8995 0.457,2.7235 1.0267,0.968 2.3663,0.903 3.2283,0.372 0.968,-0.597 1.1973,-1.9615 1.1973,-1.4539 z"
            />
        </motion.g>

    )
}

export default Moon;