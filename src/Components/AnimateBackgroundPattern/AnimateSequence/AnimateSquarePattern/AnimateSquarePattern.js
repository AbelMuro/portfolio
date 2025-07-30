import React, {useState} from 'react';
import OuterMostSquare from './OuterMostSquare';
import OuterSquare from './OuterSquare';
import InnerSquare from './InnerSquare';
import InnerMostTriangle from './InnerMostTriangle'
import {LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateSquarePattern() {
    const [mount, setMount] = useState(true); 
    const {scrollY} = useScroll();

    const rotateX = useTransform(scrollY, [7000, 8000], [0, 45]);
    const rotateSmoothX = useSpring(rotateX, LinearPentagram);    
    const rotateXBack = useTransform(scrollY, [13000, 13200], [45, 0]);    

    useMotionValueEvent(rotateXBack, 'change', (value) => {
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
        <motion.section id='square pattern' className={styles.container} style={{rotateX: rotateSmoothX}}>
            <OuterMostSquare/>
            <OuterSquare/>
            <InnerSquare/>
            <InnerMostTriangle/>
        </motion.section>
    )
}

export default AnimateSquarePattern;