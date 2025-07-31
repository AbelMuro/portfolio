import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ChainThree() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleGroup = useTransform(scrollY, [16200, 16500], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-65.5px, 40px) scale(${smoothScaleGroup})`;

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
                <motion.div id='chain three' className={styles.container} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectChainThree' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter> 
                        </defs>
                        <motion.g className={styles.group} style={{transform}} filter={'url(#glowEffectChainThree)'}>
                                <path
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={1.1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="0.869168, 1.738338"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    d="m 137.39252,99.038723 
                                        c 0,0 
                                        -0.12,41.7232 
                                        21.21,41.8846 
                                        17.8,0.1346 
                                        16.88,-32.7818 
                                        16.88,-32.7818"
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
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    style={{transform: 'translate(2.5px, 20px)'}}
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
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    style={{transform: 'translate(8.5px, 35px)'}}
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
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    style={{transform: 'translate(22px, 42px)'}}
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
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    style={{transform: 'translate(32px, 35px)'}}
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
                                    rx={2.2789274}
                                    ry={2.2761486}
                                    style={{transform: 'translate(37px, 20px)'}}
                                    />
                        </motion.g>
                    </motion.svg>            
                </motion.div> 
            }              
        </AnimatePresence>
   
    )
}

export default ChainThree;