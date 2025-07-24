import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionTemplate, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainOne() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, LinearMoon);

    const scaleGroup = useTransform(scrollY, [15500, 16000], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const strokeDashoffset = useTransform(scrollY, [16600, 17200], [0.19261932373046875, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearMoon);

    const transform = useMotionTemplate`translate(-39.5px, 9px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    })


    return(
        <AnimatePresence>
            { mount &&
                <motion.div id='chain one' className={styles.container} exit={{opacity: 0}} style={{scale: smoothScaleGroup}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: 10 }}>
                        <defs>
                            <filter id='glowEffectChainOne'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 0.004}}
                                    animate={{stdDeviation: [0.007, 0.004, 0.007], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    />
                                <feFlood floodColor="#0400ff" floodOpacity='0.7' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <motion.g style={{transform}} filter={'url(#glowEffectChainOne)'}>
                                <path
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
                                    d="m 137.25784,98.876238 0.001,0.370277"
                                    id="path5-9"
                                    />
                                    {/* moon*/}
                                    <path
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="#0400ff"
                                        strokeWidth={0}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
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

                                    <ellipse
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
                                        />                                             
                            </motion.g>                 
                    </motion.svg>
                </motion.div>
            }            
        </AnimatePresence>

    )
}

export default ChainOne;