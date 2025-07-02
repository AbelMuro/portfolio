import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import OuterMostSquare from './OuterMostSquare';
import OuterSquare from './OuterSquare';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

/*
    this is where i left off, i need to finish this design, i was on the third square design
*/

function AnimateSquarePattern({scrollThresholds}) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 0.10, 
        scrollThresholds[1] + 0.20, scrollThresholds[1] + 0.30,
        scrollThresholds[1] + 0.40
    ];

    const rotate3DForY = useTransform(scrollYProgress, scrollRange, [0, -35, 0, -35, 0]);
    const rotate3DForX = useTransform(scrollYProgress, scrollRange, [0, 35, 0, -25, 0]);
    const rotate3DSmoothY = useSpring(rotate3DForY, {stiffness: 150, damping: 40});
    const rotate3DSmoothX = useSpring(rotate3DForX, {stiffness: 150, damping: 40});

    const scale = useTransform(scrollYProgress, [0.06, 0.18], [1, 5])
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80});
    const scaleMore = useTransform(scrollYProgress, [0.65, 0.70], [5, 10]);


    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
    })

    return(
        <motion.section className={styles.container} style={{rotateX: rotate3DSmoothX, rotateY: rotate3DSmoothY, scale: scaleSmooth}}>
            <OuterMostSquare/>
            <OuterSquare/>
        </motion.section>
    )
}

export default AnimateSquarePattern;