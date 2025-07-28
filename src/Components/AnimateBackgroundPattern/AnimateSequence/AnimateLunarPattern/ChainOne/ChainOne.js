import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionTemplate, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainOne() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const strokeDashoffset = useTransform(scrollY, [16600, 17200], [40, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearMoon);

    const scaleGroup = useTransform(scrollY, [15500, 16000], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);
    const transform = useMotionTemplate`translate(-85.5px, 17px) scale(${smoothScaleGroup})`


    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    })


    return(
        <AnimatePresence>
            { mount &&
                <motion.div id='chain one' className={styles.container} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectChainOne'>
                                <motion.feGaussianBlur                                     colorInterpolationFilters="sRGB" 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 3}}
                                    animate={{stdDeviation: [3, 1.5, 3], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    />
                                <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <motion.g className={styles.group} style={{transform}} filter={'url(#glowEffectChainOne)'}>
                                <path
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={1.3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="2 2"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    d="m 137.25784,98.876238 l 0.2,74.0554"
                                    id="path5-9"
                                    />
                                    {/* moon   translate(4px, 79px)  */}
                                    <path
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="#0400ff"
                                        strokeWidth={0.2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        d="m 137.27739,99.277739 
                                        c 0.1764,1.782 -1.08,3.3228 -2.916,3.339 
                                            -1.8,-0.0576 -3.186,-1.278 -3.258,-3.024 
                                            -0.1764,-1.782 1.08,-3.3228 2.916,-3.3336 
                                            0.36,-0.15264 -1.08,0.522 -1.62,1.674 
                                            -0.36,0.792 -0.54,1.8036 0.54,2.7126 
                                            0.972,0.972 2.394,0.774 3.204,0.216 
                                            0.9,-0.792 1.08,-2.0988 1.08,-1.458 
                                        z"
                                        style={{transform: 'translate(4px, 79px)'}}
                                        id="path4-4-3"
                                        />

                                    <motion.rect
                                        fill="#0400ff"
                                        fillOpacity={0}
                                        stroke="#0400ff"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        id="rect13"
                                        width={9}
                                        height={9}
                                        x={167.23331}
                                        y={-26.891945}
                                        transform="rotate(45.004389)"
                                        strokeDasharray={40}
                                        style={{strokeDashoffset: smoothStrokeDashoffset, transform: 'translate(0.5px, 73px) rotate(45.004389deg)'}}

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
                                        rx={2.2789274}
                                        ry={2.2761486}
                                        style={{transform: 'translate(0px, 30px)'}}
                                        />                                             
                        </motion.g>                 
                    </motion.svg>
                </motion.div>
            }            
        </AnimatePresence>

    )
}

export default ChainOne;