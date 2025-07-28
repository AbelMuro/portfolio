import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {useScroll, motion, useTransform, useSpring, useMotionTemplate, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainTwo() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleGroup = useTransform(scrollY, [15900, 16400], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-73px, 35px) scale(${smoothScaleGroup})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    });


    return(
        <AnimatePresence>
            {
            mount &&
            <motion.div id='chain two' className={styles.container} exit={{opacity: 0}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                    <defs>
                            <filter id='glowEffectChainTwo'>
                                <feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    stdDeviation={2}
                                    />
                                <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                    </defs>
                    <motion.g className={styles.group} style={{transform}} filter='url(#glowEffectChainTwo)'>
                            {/* chain */}
                            <path
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={1.1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="2.89722, 1.44861, 0.72431, 1.44861"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                d="m 137.35835,99.015007 0.2,51.8008"
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
                                d="m 137.37535,99.315156 
                                c 0,0 -2.1,-1.4 -3.3,-1.38 -1.2,0.0176 -3.04,1.4 -3.04,1.4 
                                    0,0 1.0,-2.16 0.6,-3.206 -0.4,-1.22 -2.56,-2.82 -2.56,-2.82 
                                    0,0 2.64,0.3 3.6,-0.4 1.0,-0.72 1.6,-3.324 1.6,-3.324 
                                    0,0 0.2,2.612 1.2,3.336 1.0,0.8 3.92,0.38 3.92,0.38 
                                    0,0 -2.7,1.48 -3.04,2.826 -0.2,1.1 1.0,3.206 1.0,3.206 
                                z"
                                id="path6"
                                style={{transform: 'translate(3.5px, 55px)'}}
                                />
                            <circle
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={1.2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path11-63"
                                cx={137.35896}
                                cy={99.156044}
                                r={2.7590666}
                                style={{transform: 'translate(0px, 35px)'}}
                                />
                        </motion.g>
                </motion.svg>
            </motion.div>}            
        </AnimatePresence>

    )
}

export default ChainTwo;