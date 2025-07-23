import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainThree() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleContainer = useTransform(scrollY, [600, 1800], [1, 5])
    const scaleContainerSmooth = useSpring(scaleContainer, LinearMoon);
    const scaleContainerMore = useTransform(scrollY, [6500, 7000], [5, 10]);   

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, LinearMoon);

    const scaleGroup = useTransform(scrollY, [16200, 16500], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-35.5px, 10px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    });

    useMotionValueEvent(scaleContainerMore, 'change', (value) => {
        scaleContainerSmooth.set(value);
    });

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div id='chain three' className={styles.container} exit={{opacity: 0}} style={{scale: smoothScaleGroup}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleContainerSmooth}}>
                        <defs>
                            <filter id='glowEffectChainThree'>
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
                        <motion.g style={{transform}} filter={'url(#glowEffectChainThree)'}>
                                    <path
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="#0400ff"
                                        strokeWidth={0.00434584}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="0.00434584, 0.00869169"
                                        strokeDashoffset={0}
                                        strokeOpacity={1}
                                        d="m 137.39252,99.038723 c 0,0 -6e-4,0.208616 0.10605,0.209423 0.089,6.73e-4 0.0844,-0.163909 0.0844,-0.163909"
                                        id="path7"
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
                                        id="path8"
                                        cx={137.40131}
                                        cy={99.121437}
                                        rx={0.011394637}
                                        ry={0.011380743}
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
                                        id="path8-5"
                                        cx={137.42023}
                                        cy={99.18689}
                                        rx={0.011394637}
                                        ry={0.011380743}
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
                                        id="path8-9"
                                        cx={137.49509}
                                        cy={99.247375}
                                        rx={0.011394637}
                                        ry={0.011380743}
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
                                        id="path8-4"
                                        cx={137.56696}
                                        cy={99.18869}
                                        rx={0.011394637}
                                        ry={0.011380743}
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
                                        id="path8-3"
                                        cx={137.58012}
                                        cy={99.128799}
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

export default ChainThree;