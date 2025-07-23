import React, {useState} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

/* this is where i left off, i need to finish the last bottom chain for the lunar design*/

function ChainFive(){
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scaleContainer = useTransform(scrollY, [600, 1800], [1, 5])
    const scaleContainerSmooth = useSpring(scaleContainer, LinearMoon);
    const scaleContainerMore = useTransform(scrollY, [6500, 7000], [5, 10]);   

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, LinearMoon);

    const scaleGroup = useTransform(scrollY, [16900, 17200], [0, 1]);
    const smoothScaleGroup = useSpring(scaleGroup, LinearMoon);

    const transform = useMotionTemplate`translate(-31.5px, 9.3px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false);
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
            <motion.div id='chain five' className={styles.container} exit={{opacity: 0}} style={{scale: smoothScaleGroup}}>
                <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleContainerSmooth }}>
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

                    <motion.g style={{transform}} filter={'url(#glowEffectChainFive)'}>
                                <path
                                    id="path10"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0.00434584}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="0.00434584, 0.00869168"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    d="m 137.60705,99.076401 c 0,0 9.9e-4,0.174116 0.0653,0.173673 0.11584,-7.94e-4 0.11085,-0.273685 0.11085,-0.273685"
                                    />

                                    <ellipse
                                        id="path8-8"
                                        cx={137.7814}
                                        cy={99.033615}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />

                                    <ellipse
                                        id="path8-7"
                                        cx={137.77379}
                                        cy={99.092903}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />

                                    <ellipse
                                        id="path8-86"
                                        cx={137.76108}
                                        cy={99.152191}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />

                                    <ellipse
                                        id="path8-6"
                                        cx={137.73737}
                                        cy={99.208931}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />

                                    <circle
                                        id="path11"
                                        cx={137.68129}
                                        cy={99.249031}
                                        r={0.013795333}
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="#0400ff"
                                        strokeWidth={0.00421353}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        />

                                    <ellipse
                                        id="path8-65"
                                        cx={137.62134}
                                        cy={99.185219}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />

                                    <ellipse
                                        id="path8-61"
                                        cx={137.6105}
                                        cy={99.128502}
                                        rx={0.011394637}
                                        ry={0.011380743}
                                        fill="#0400ff"
                                        fillOpacity={1}
                                        stroke="none"
                                        strokeWidth={0.00474776}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        />
                            </motion.g>
                </motion.svg>
            </motion.div>
            }         
        </AnimatePresence>


    )
}

export default ChainFive;