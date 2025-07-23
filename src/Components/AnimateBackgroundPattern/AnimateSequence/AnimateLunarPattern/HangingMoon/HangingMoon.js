import React, {useState, useEffect} from 'react';
import {LinearMoon} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionTemplate, useMotionValueEvent, useAnimationControls, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function HangingMoon(){
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const controlSwing = useAnimationControls();

    const scaleContainer = useTransform(scrollY, [600, 1800], [1, 5])
    const scaleContainerSmooth = useSpring(scaleContainer, LinearMoon);
    const scaleContainerMore = useTransform(scrollY, [6500, 7000], [5, 10]);  

    const scale = useTransform(scrollY, [14000, 14500], [1, 20]);
    const smoothScale = useSpring(scale, LinearMoon);

    const strokeDashoffset = useTransform(scrollY, [16500, 17000], [0.8, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearMoon);

    const fill = useTransform(scrollY, [17000, 17500], ['#0400ff00', '#0400ff']);

    const transform = useMotionTemplate`translate(-35px, -0.3px) scale(${smoothScale})`;

    useMotionValueEvent(scaleContainerMore, 'change', (value) => {
        scaleContainerSmooth.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 13500)
            setMount(false);
        else
            setMount(true)
    })

    useEffect(() => {
        if(mount)
            controlSwing.start({rotate: [0, 25, 0, -25, 0], transition: {duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'linear'}});
    }, [mount])

    return(
        <AnimatePresence>
            {
                mount && 
                <motion.div id='hanging moon' className={styles.container} initial={{rotate: 0}} animate={controlSwing} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleContainerSmooth}}>
                        <defs>
                            <filter id='glowEffectHangingMoon'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 0.004}}
                                    animate={{stdDeviation: [0.007, 0.004, 0.007], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    />
                                <feFlood floodColor="#0400ff" floodOpacity='0.5' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                            <motion.g style={{transform}} filter={'url(#glowEffectHangingMoon)'}>
                                    <motion.path
                                        strokeDasharray={0.8}
                                        style={{strokeDashoffset: smoothStrokeDashoffset}}
                                        id="path12"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="#0400ff"
                                        strokeWidth={0.00528254}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        d="m 137.53809,98.464359 v 0.159475"
                                        />

                                    <motion.path
                                        filter={'url(#glowEffectHangingMoon)'}
                                        className={styles.moon}
                                        strokeDasharray={0.8}
                                        style={{strokeDashoffset: smoothStrokeDashoffset, fill}}
                                        id="path4-4"
                                        stroke="#0400ff"
                                        strokeWidth={0.00239823}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeOpacity={1}
                                        d="m 137.57719,98.713273 c -0.02,0.02072 -0.053,0.0213 -0.0738,0.0012 -0.0204,-0.0202 -0.0214,-0.05287 -0.001,-0.07372 0.02,-0.02071 0.053,-0.02131 0.0737,-0.0013 0.005,0.0048 -0.0193,-0.0091 -0.038,-0.002 -0.0155,0.006 -0.0269,0.01777 -0.0255,0.03796 0.001,0.02332 0.0182,0.03777 0.0344,0.0414 0.0184,0.004 0.0368,-0.0096 0.0309,-0.0035 z"
                                        />                                    
                                </motion.g>                 
                    </motion.svg>
                </motion.div>
            }

        </AnimatePresence>

    )

}

export default HangingMoon;