import React, {useState} from 'react';
import AnimateMoon from './AnimateMoon';
import ChainOne from './ChainOne';
import ChainTwo from './ChainTwo';
import ChainThree from './ChainThree';
import ChainFour from './ChainFour';
import ChainFive from './ChainFive';
import HangingMoon from './HangingMoon';
import {motion, useTransform, useSpring, useMotionValueEvent, useScroll, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css'


/* 
    this is where i left off, i need to finish fixing the bugs in this component,
    most likely the issue is how scale is being animated with useSpring()

    i also need to find a way to prevent the stuttering that happens with the animation when i scroll 
    down in firefox
*/


function AnimateLunarPattern() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const rotateX = useTransform(scrollY, [8000, 8500], [0, 45]);
    const rotateSmoothX = useSpring(rotateX, {stiffness: 150, damping: 80});
    const rotateXBack = useTransform(scrollY, [13000, 13200], [45, 0]);

    useMotionValueEvent(rotateXBack, 'change', (value) => {
        rotateSmoothX.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 8000 && value <= 19000)
            setMount(true);
        else
            setMount(false);
    });


    return(
        <AnimatePresence>
            {
                mount &&
                <motion.section id='lunar pattern' className={styles.container} style={{rotateX: rotateSmoothX}} exit={{opacity: 0}}>
                    <AnimateMoon/>
                    <ChainOne/>
                    <ChainTwo/>
                    <ChainThree/>
                    <ChainFour/>
                    <ChainFive/>
                    <HangingMoon/>
                </motion.section>
            }
        </AnimatePresence>

    )
}

export default AnimateLunarPattern;