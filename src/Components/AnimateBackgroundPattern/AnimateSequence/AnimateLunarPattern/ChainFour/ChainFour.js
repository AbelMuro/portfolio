import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainFour() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();


    const scaleGroup = useTransform(scrollY, [16600, 16900], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);
    const transform = useMotionTemplate`translate(-44px, 47px) scale(${smoothScaleGroup})`;


    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false)
        else
            setMount(true);
    });


    return(
        <AnimatePresence>
            {mount &&
            <motion.div id='chain four' className={styles.container} exit={{opacity: 0}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                    <defs>
                        <filter id='glowEffectChainFour' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                        </filter> 
                    </defs>
                    <motion.g className={styles.group} style={{transform}} filter={'url(#glowEffectChainFour)'}>
                            <path
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={1.1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="4.63556, 2.31778, 1.158892, 2.31778"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                d="m 137.47775,99.067115 
                                c 0,0 
                                    4.2,23.8926 
                                    18.96,23.9844 
                                    13.3,0.0828 
                                    17.44,-24.1626 
                                    17.44,-24.1626"
                                id="path9"
                                />

                            <circle
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                id="path11-6"
                                cx={137.49643}
                                cy={99.123276}
                                r={2.7590666}
                                style={{transform: 'translate(6px, 15px)'}}
                                />
                    </motion.g>
                </motion.svg>
            </motion.div>}            
        </AnimatePresence>

    )
}

export default ChainFour;