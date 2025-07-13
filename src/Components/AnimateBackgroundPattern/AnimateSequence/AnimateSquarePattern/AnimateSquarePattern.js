import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import OuterMostSquare from './OuterMostSquare';
import OuterSquare from './OuterSquare';
import InnerSquare from './InnerSquare';
import InnerMostTriangle from './InnerMostTriangle'
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function AnimateSquarePattern({scrollThresholds}) {
    const [mount, setMount] = useState(true); 
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 1000, 
        scrollThresholds[1] + 2000, scrollThresholds[1] + 3000,
        scrollThresholds[1] + 4000
    ];

    const rotateY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotateX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotateXMore = useTransform(scrollY, [7000, 8000], [0, 35]);
    const rotateSmoothY = useSpring(rotateY, {stiffness: 150, damping: 80});
    const rotateSmoothX = useSpring(rotateX, {stiffness: 150, damping: 80});

    const scale = useTransform(scrollY, [600, 1800], [1, 5]);
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80});
    const scaleMore = useTransform(scrollY, [6500, 7000], [5, 10]);

    const rotateXBack = useTransform(scrollY, [13000, 13200], [35, 0]);

    useMotionValueEvent(rotateXBack, 'change', (value) => {
        rotateSmoothX.set(value);
    });

    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
    });
    
    useMotionValueEvent(rotateXMore, 'change', (value) => {
        rotateSmoothX.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 1800)
            setMount(false);
        else if(y > 14300)
            setMount(false);
        else
            setMount(true);
    })

    return(
        mount &&
        <motion.section id='square pattern' className={styles.container} style={{rotateX: rotateSmoothX, rotateY: rotateSmoothY, scale: scaleSmooth}}>
            <OuterMostSquare/>
            <OuterSquare/>
            <InnerSquare/>
            <InnerMostTriangle/>
        </motion.section>
    )
}

export default AnimateSquarePattern;