import React, {useState} from 'react';
import images from './images';
import {LinearSquare} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, AnimatePresence, useMotionValueEvent, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerMostTriangle() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, LinearSquare);

    const strokeDashoffset = useTransform(scrollY, [9000, 9500], [113.64, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearSquare);
    const strokeDashoffsetBack = useTransform(scrollY, [13200, 13500], [0, 113.64]);

    const z = useTransform(scrollY, [8500, 9000], [0, 150]);
    const smoothZ = useSpring(z, LinearSquare);
    const translateZBack = useTransform(scrollY, [12800, 13000], [150, 0]);        
    const transform = useMotionTemplate`translate3d(0px, 0px, ${smoothZ}px)`;

    useMotionValueEvent(strokeDashoffsetBack, 'change', (value) => {
        smoothStrokeDashoffset.set(value);
    })

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 8000 || value > 14000)
            setMount(false);
        else
            setMount(true);
    });

    return(
        <AnimatePresence>
            {
                mount &&  
                <motion.div id='inner most triangle' className={styles.container} style={{transform}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectInnerTriangle'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 0.08}}
                                    animate={{stdDeviation: [0.3, 0.08, 0.3], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    /> 
                                <feFlood floodColor="#0400ff" floodOpacity='0.7' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath30">
                                <path
                                    id="path30"
                                    d="m 1206.53721,977.74128 147.88485,-40.77153 39.84669,151.60041 -147.88485,40.77153 z
                                    m 96.538,32.82768 2.35674,4.16385 -8.74476,14.73768 -4.81014,-0.036
                                    2.35926,4.16817 -7.52112,12.67434 -4.69386,0.00351 2.42676,4.20129
                                    2.28933,-3.98349 16.92477,0.2178 2.38104,4.20624 2.43243,-4.14504
                                    14.93532,0.1935 2.3229,4.10913 2.45637,-4.18095 -4.73463,-0.036
                                    -7.32393,-13.08843 2.37204,-4.04244 -4.65489,-0.036 -8.35902,-14.9382
                                    2.42793,-4.13793 z"
                                />
                            </clipPath>
                        </defs>
                        {/* outer border for triangle*/}
                        <g transform='translate(-1204.5, -935)'>
                            <motion.path
                                className={styles.outer_border}
                                filter={'url(#glowEffectInnerTriangle)'}
                                id="path26"
                                d="M1324.01331,1046.87802 l -37.81827,-0.2574 l 19.1322,-32.62284 L1324.01331,1046.87802"
                                clipPath="url(#clipPath30)"
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={8}
                                strokeDasharray={113.64}
                                style={{strokeDashoffset: smoothStrokeDashoffset}}
                                />
                        </g>
                        <g transform='translate(-14.6, -8)'>
                            <motion.image
                                filter={'url(#glowEffectInnerTriangle)'}
                                width={25}
                                href={images['sunEarthText']}
                                style={{opacity: opacitySmooth}}
                                x={101.79}
                                y={102.1}
                            />                            
                        </g>

                    </motion.svg>
                </motion.div>  
            }            
        </AnimatePresence>

    )
}

export default InnerMostTriangle;