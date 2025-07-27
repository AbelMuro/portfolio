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
                            <filter id='glowEffectInnerSquare'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 0.2}}
                                    animate={{stdDeviation: [0.7, 0.2, 0.7], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    /> 
                                <feFlood floodColor="#0400ff" floodOpacity='0.7' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id='glowEffectSunEarth'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 1}}
                                    animate={{stdDeviation: [2, 1, 2], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    /> 
                                <feFlood floodColor="#0400ff" floodOpacity='0.8' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                            <motion.path
                                filter={'url(#glowEffectInnerSquare)'}
                                stroke="#0400ff"
                                strokeWidth={1}
                                fill='none'
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={234}
                                style={{strokeDashoffset: smoothStrokeDashoffsetOuterBorder, transform: 'translate(-62px, -53px)'}}
                                d="m 149.39848,111.34959 54.7999,24.513 -23.5828,51.4715 -54.8001,-24.513 z"
                                id="rect704-3-9-2-1"
                                />
                            <motion.path
                                filter={'url(#glowEffectInnerSquare)'}
                                stroke="#0400ff"
                                strokeWidth={1}
                                fill='none'
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={183.06}
                                style={{strokeDashoffset: smoothStrokeDashhoffsetInnerBorder, transform: 'translate(-59px, -45.6px)'}}
                                d="m 149.73914,112.2145 42.9121,19.1952 -18.467,40.3059 -42.9122,-19.1954 z"
                                id="rect704-3-9-2-1-2"
                            />   
                        <g transform='translate(-83, -52)'>
                            <motion.image 
                                filter={'url(#glowEffectSunEarth)'}
                                style={{opacity: opacitySmooth}}
                                width="77.5"
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