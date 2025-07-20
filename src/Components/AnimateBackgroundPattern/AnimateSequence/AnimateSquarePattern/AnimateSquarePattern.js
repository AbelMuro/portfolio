import React, {useState} from 'react';
import OuterMostSquare from './OuterMostSquare';
import OuterSquare from './OuterSquare';
import InnerSquare from './InnerSquare';
import InnerMostTriangle from './InnerMostTriangle'
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';


function AnimateSquarePattern({scrollThresholds}) {
    const [mount, setMount] = useState(true); 
    const {scrollY} = useScroll();
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 1000, 
        scrollThresholds[1] + 2000, scrollThresholds[1] + 3000,
        scrollThresholds[1] + 4000
    ];

    const rotateY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotateX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotateXMore = useTransform(scrollY, [7000, 8000], [0, 45]);
    const rotateXBack = useTransform(scrollY, [13000, 13200], [45, 0]);    
    const rotateSmoothY = useSpring(rotateY, {stiffness: 150, damping: 80});
    const rotateSmoothX = useSpring(rotateX, {stiffness: 150, damping: 80});

    useMotionValueEvent(rotateXBack, 'change', (value) => {
        rotateSmoothX.set(value);
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
        <motion.section id='square pattern' className={styles.container} style={{rotateX: rotateSmoothX, rotateY: rotateSmoothY}}>
            <OuterMostSquare/>
            <OuterSquare/>
            <InnerSquare/>
            <InnerMostTriangle/>
        </motion.section>
    )
}

export default AnimateSquarePattern;