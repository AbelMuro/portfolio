import React, {useEffect} from 'react';
import {LinearMoon} from '~/Transitions';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useAnimationControls} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to find a way to correctly implement a rotation animation that creates a swinging
    motion for the following component. I am dealing with the SVG coordinate system, and these systems make it difficult to
    implement any sort of transformation.


    0.0914306640625 0.26483154296875        //width height
    
    137.48757934570312 98.46435546875       //x y

*/


function SwingingMoon() {
    const {scrollY} = useScroll();
    const controlSwing = useAnimationControls();

    const scaleHangingMoon = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothscaleHangingMoon = useSpring(scaleHangingMoon, LinearMoon);
    const transform = useMotionTemplate`translate(-35px, -0.3px) scale(20)`;

    const strokeDashoffsetHangingMoon = useTransform(scrollY, [16500, 17000], [0.8, 0]);
    const smoothStrokeDashoffsetHangingMoon = useSpring(strokeDashoffsetHangingMoon, LinearMoon);

    const fillHangingMoon = useTransform(scrollY, [17000, 17500], ['#0400ff00', '#0400ff']);


    useEffect(() => {
        controlSwing.start({rotate: [0, 25, 0, -25, 0], transition: {duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'linear'}});
    }, []);


    return(
        <motion.g style={{transform}} filter={'url(#glowEffectHangingMoon)'}>
            <motion.g className={styles.group}> 
                    <motion.path
                        id="path12"
                        d="m 137.53809,98.464359 v 0.159475"
                        fill="none"
                        fillOpacity="1"
                        stroke="#0400ff"
                        strokeWidth={0.00528254}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="0"
                        strokeDasharray={0.8}
                        strokeOpacity="1"
                        style={{strokeDashoffset: smoothStrokeDashoffsetHangingMoon}}
                        />
                    <motion.path
                        id="path4-4"
                        style={{strokeDashoffset: smoothStrokeDashoffsetHangingMoon, fill: fillHangingMoon}}
                        strokeDasharray={0.8}
                        d="m 137.57719,98.713273 c -0.02,0.02072 -0.053,0.0213 -0.0738,0.0012 -0.0204,-0.0202 -0.0214,-0.05287 -0.001,-0.07372 0.02,-0.02071 0.053,-0.02131 0.0737,-0.0013 0.005,0.0048 -0.0193,-0.0091 -0.038,-0.002 -0.0155,0.006 -0.0269,0.01777 -0.0255,0.03796 0.001,0.02332 0.0182,0.03777 0.0344,0.0414 0.0184,0.004 0.0368,-0.0096 0.0309,-0.0035 z"
                        fill="#0400ff"
                        fillOpacity="1"
                        stroke="#0400ff"
                        strokeWidth={0.00239823}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="0"
                        strokeOpacity="1"
                        /> 

                </motion.g>
            </motion.g>
    )
}

export default SwingingMoon;