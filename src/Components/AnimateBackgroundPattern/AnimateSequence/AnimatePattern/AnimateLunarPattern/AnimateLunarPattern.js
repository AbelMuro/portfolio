import React, {useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import AnimateMoon from './AnimateMoon';
import {motion, useTransform, useSpring, useMotionValueEvent, useScroll} from 'framer-motion';
import * as styles from './styles.module.css'

/* 
    this is where i left off, i need to start creating the components and animations for the
    rest of the lunar design that i made in inkscape
*/


function AnimateLunarPattern() {
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

    return(
        <motion.section id='lunar pattern' className={styles.container} style={{scale: scaleSmooth, rotateX: rotateSmoothX}}>
            <AnimateMoon/>
        </motion.section>
    )
}

export default AnimateLunarPattern;