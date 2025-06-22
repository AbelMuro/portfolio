import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useTransform, useSpring, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({scrollThresholds, scaleTo, rotateX, rotateY}) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scrollThresholds, [1, scaleTo]);
    const scaleWithSpring = useSpring(scale, {stiffness: 150, damping: 10});
    const rotate3DForX = useTransform(scrollYProgress, [0.51, 0.60, 0.70], rotateX);
    const rotate3DForY = useTransform(scrollYProgress, [0.51, 0.60, 0.70], rotateY)
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 100, damping: 50})
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 100, damping: 50});

    return(
        <motion.circle
            className={styles.circle}
            cx="151.34041"
            cy="106.16869"
            r="8.5677881" 
            fill='none' 
            stroke='#0400ff'
            strokeWidth='0.2'
            strokeLinejoin='bevel'
            strokeMiterlimit='0'
            strokeDasharray='none'
            strokeDashoffset='0'
            style={{scale: scaleWithSpring, rotateX: rotate3DSpringX, rotateY: rotate3DSpringY }}
            />
    )
}

export default Circle;