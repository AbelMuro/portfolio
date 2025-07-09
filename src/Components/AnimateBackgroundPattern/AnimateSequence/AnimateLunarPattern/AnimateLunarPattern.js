import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import AnimateMoon from './AnimateMoon';
import ChainOne from './ChainOne';
import ChainTwo from './ChainTwo';
import ChainThree from './ChainThree';
import ChainFour from './ChainFour';
import ChainFive from './ChainFive';
import HangingMoon from './HangingMoon';
import {motion, useTransform, useSpring, useMotionValueEvent, useScroll, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css'


function AnimateLunarPattern() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const scale = useTransform(scrollY, [600, 1800], [1, 5])
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80});
    const scaleMore = useTransform(scrollY, [6500, 7000], [5, 10]);

    const rotateX = useTransform(scrollY, [8000, 8500], [0, 35]);
    const rotateSmoothX = useSpring(rotateX, {stiffness: 150, damping: 80});

    const rotateXBack = useTransform(scrollY, [13000, 13200], [35, 0]);

    useMotionValueEvent(rotateXBack, 'change', (value) => {
        rotateSmoothX.set(value);
    });

    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 8000)
            setMount(false);
        else
            setMount(true);
    });

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.section id='lunar pattern' className={styles.container} style={{scale: scaleSmooth, rotateX: rotateSmoothX}} exit={{opacity: 0}}>
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