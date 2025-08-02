import React, {useState} from 'react';
import images from './images';
import {LinearSquare} from '~/Transitions';
import {motion, useTransform, useSpring, AnimatePresence, useScroll, useMotionValueEvent, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerSquare(){
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const strokeDashoffsetOuterBorder = useTransform(scrollY, [8300, 8800], [234, 0]);
    const smoothStrokeDashoffsetOuterBorder = useSpring(strokeDashoffsetOuterBorder, LinearSquare);

    const strokeDashoffsetInnerBorder = useTransform(scrollY, [8300, 8800], [183.06, 0]);
    const smoothStrokeDashhoffsetInnerBorder = useSpring(strokeDashoffsetInnerBorder, LinearSquare)

    const opacity = useTransform(scrollY, [8500, 9000], [0, 1]);
    const opacitySmooth = useSpring(opacity, LinearSquare);

    const opacityGlowEffect = useTransform(scrollY, [8900, 9100], [0, 1]);
    const opacitySmoothGlowEffect = useSpring(opacityGlowEffect, LinearSquare);

    const z = useTransform(scrollY, [8500, 9000], [0, 100]);
    const smoothZ = useSpring(z, LinearSquare);
    const translateZBack = useTransform(scrollY, [11600, 12000], [100, 0]);
    const transform = useMotionTemplate`translate3d(0px, 0px, ${smoothZ}px)`;

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 7000 || value > 12200)
            setMount(false);
        else
            setMount(true);
    });

    return(
        <AnimatePresence>
            {
            mount &&   
                <motion.div id='inner square' className={styles.container} style={{transform}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                               <filter id='glowEffectInnerSquare' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                                </filter>  
                                <filter id='glowEffectInnerSquareDesign' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                                </filter> 
                        </defs>
                            <motion.path
                                stroke="#0400ff"
                                strokeWidth={1}
                                fill='none'
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={234}
                                style={{strokeDashoffset: smoothStrokeDashoffsetOuterBorder, transform: 'translate(-61px, -55px)'}}
                                d="m 149.39848,111.34959 54.7999,24.513 -23.5828,51.4715 -54.8001,-24.513 z"
                                id="rect704-3-9-2-1"
                                />
                            <motion.path
                                stroke="#0400ff"
                                strokeWidth={1}
                                fill='none'
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={183.06}
                                style={{strokeDashoffset: smoothStrokeDashhoffsetInnerBorder, transform: 'translate(-57.8px, -47.5px)'}}
                                d="m 149.73914,112.2145 42.9121,19.1952 -18.467,40.3059 -42.9122,-19.1954 z"
                                id="rect704-3-9-2-1-2"
                            />   
                            <motion.image
                                href={images['glowEffect']}
                                className={styles.glowEffect}
                                style={{transform: 'translate(56px, 45px)', opacity: opacitySmoothGlowEffect}}
                            />
                        <g transform='translate(-81.5, -54)'>
                            <motion.image 
                                style={{opacity: opacitySmooth}}
                                width="77"
                                x={147.1}
                                y={111}
                                href={images['innerSquareDesign']}
                                />    
                        </g>

                    </motion.svg>
                </motion.div>  
            }

        </AnimatePresence>

    )
}

export default InnerSquare;