import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

/* this is where i left off, i need to finish the last bottom chain for the lunar design*/

function ChainFive(){
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleGroup = useTransform(scrollY, [16900, 17200], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-23px, 49px) scale(${smoothScaleGroup})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false);
        else
            setMount(true);
    });


    return(
        <AnimatePresence>
            {
            mount && 
            <motion.div id='chain five' className={styles.container} exit={{opacity: 0}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                    <defs>
                        <filter id='glowEffectChainFive'>
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

                    <motion.g className={styles.group} style={{transform}}>
                                <path
                                    id="path10"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={1.1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    stroke-dasharray="0.869168, 1.738336"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    d="m 137.60705,99.076401
                                    c 0,0 
                                        0.198,34.8232 
                                        13.06,34.7346 
                                        23.168,-0.1588 
                                        22.17,-54.737 
                                        22.17,-54.737"

                                    />

                                <ellipse
                                    id="path8-8"
                                    cx={137.7814}
                                    cy={99.033615}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={1.1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(0.5px, 10px)'}}
                                    />

                                <ellipse
                                    id="path8-7"
                                    cx={137.77379}
                                    cy={99.092903}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0.00474776}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(3.3px, 25px)'}}
                                    />

                                <ellipse
                                    id="path8-86"
                                    cx={137.76108}
                                    cy={99.152191}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0.00474776}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(31px, 13px)'}}
                                    />

                                <ellipse
                                    id="path8-6"
                                    cx={137.73737}
                                    cy={99.208931}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0.00474776}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(26.5px, 25px)'}}
                                    />

                                <circle
                                    id="path11"
                                    cx={137.68129}
                                    cy={99.249031}
                                    r={2.2789274}
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={1.1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    strokeOpacity={1}
                                    style={{transform: 'translate(14px, 35px)'}}
                                    />

                                <ellipse
                                    id="path8-65"
                                    cx={137.62134}
                                    cy={99.185219}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0.00474776}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(33.7px, 0px)'}}
                                    />

                                <ellipse
                                    id="path8-61"
                                    cx={137.6105}
                                    cy={99.128502}
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0.00474776}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    style={{transform: 'translate(35px, -13px)'}}
                                    />
                            </motion.g>
                </motion.svg>
            </motion.div>
            }         
        </AnimatePresence>


    )
}

export default ChainFive;