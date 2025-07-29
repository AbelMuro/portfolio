import React, {useState} from 'react';
import {LinearSquare} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';

function OuterSquare() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const strokeDashoffset = useTransform(scrollY, [7300, 7800], [319.6, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearSquare);
    
    const strokeWidth = useTransform(scrollY, [7800, 8300], [2, 8]);
    const smoothStrokeWidth = useSpring(strokeWidth, LinearSquare)

    const opacity = useTransform(scrollY, [8000, 8300], [0, 1])
    const opacitySmooth = useSpring(opacity, LinearSquare);

    const z = useTransform(scrollY, [8300, 8600], [0, 60]);
    const smoothZ = useSpring(z, LinearSquare);
    const translateZBack = useTransform(scrollY, [12000, 12400], [60, 0]);
    const transform = useMotionTemplate`translate3d(0px, 0px, ${smoothZ}px)`;  


    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value)
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 6500 || value > 12500)
            setMount(false);
        else
            setMount(true);
    })


    return (
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='outer square' 
                    className={styles.container} 
                    style={{transform}} 
                    exit={{opacity: 0}}>
                            <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                                <defs>
                                    <filter id='glowEffectOuterSquare'>
                                        <feGaussianBlur 
                                            in="SourceAlpha" 
                                            result="blur"
                                            stdDeviation={5}
                                            /> 
                                        <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                                        <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                        <feMerge>
                                            <feMergeNode in="glow"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <motion.path
                                    filter={'url(#glowEffectOuterSquare)'}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={319.6}
                                    strokeDashoffset={smoothStrokeDashoffset}
                                    strokeWidth={smoothStrokeWidth}
                                    transform={'translate(-59, -69)'}
                                    d="m 149.75952,109.57877 67.75454,45.87268 -43.83645,63.50708 -67.75461,-45.87282 z"
                                    id="rect704-3-9-2"
                                />
                                <motion.image
                                    transform={'translate(46.9, 40)'}
                                    opacity={opacitySmooth}
                                    href={images['text']}
                                    width={113}/>                          
                        </svg>                                              
                </motion.div>

            }
        </AnimatePresence>
    )
}

export default OuterSquare;