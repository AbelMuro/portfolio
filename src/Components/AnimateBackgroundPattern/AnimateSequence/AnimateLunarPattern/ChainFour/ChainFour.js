import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainFour() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, LinearMoon);

    const scaleGroup = useTransform(scrollY, [16600, 16900], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-34px, 9.5px) scale(${smoothScale})`;


    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    });


    return(
        <AnimatePresence>
            {mount &&
            <motion.div id='chain four' className={styles.container} exit={{opacity: 0}} style={{scale: smoothScaleGroup}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: 10 }}>
                    <defs>
                            <filter id='glowEffectChainFour'>
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
                    <motion.g style={{transform}} filter='url(#glowEffectChainFour)'>
                            <path
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.00579446}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="0.0231778, 0.0115889, 0.00579446, 0.0115889"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                d="m 137.47775,99.067115 c 0,0 0.021,0.119463 0.0948,0.119922 0.0665,4.14e-4 0.0872,-0.120813 0.0872,-0.120813"
                                id="path9"
                                />

                                <circle
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0.00421353}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    strokeOpacity={1}
                                    id="path11-6"
                                    cx={137.49643}
                                    cy={99.123276}
                                    r={0.013795333}
                                    />
                    </motion.g>
                </motion.svg>
            </motion.div>}            
        </AnimatePresence>

    )
}

export default ChainFour;