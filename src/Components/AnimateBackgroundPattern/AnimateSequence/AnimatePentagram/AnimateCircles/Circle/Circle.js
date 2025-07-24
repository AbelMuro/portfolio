import React, {memo} from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({scrollThresholds, scaleTo, rotateX, rotateY}) {
    const {scrollY} = useScroll();

    const strokeDashoffset = useTransform(scrollY, [5800, 6000], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, LinearPentagram);

    const scale = useTransform(scrollY, scrollThresholds, [1, scaleTo]);
    const scaleWithSpring = useSpring(scale, LinearPentagram);
    const scaleBack = useTransform(scrollY, [5500, 5700], [scaleTo, 1]);    

    const rotate3DForX = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateX);
    const rotate3DForY = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateY)
    const rotate3DSpringX = useSpring(rotate3DForX, LinearPentagram)
    const rotate3DSpringY = useSpring(rotate3DForY, LinearPentagram);


    useMotionValueEvent(scaleBack, 'change', (value) => {
        scaleWithSpring.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 5800)
            dashoffsetSpring.set(0);
        else if(y > 6700)
            dashoffsetSpring.jump(300)
    })

    return (
        <motion.circle
            className={styles.circle}
            cx={150.95853}
            cy={115.17852}
            r={14.348076}
            fill='none' 
            stroke='#0400ff'
            strokeWidth='0.2'
            strokeLinejoin='bevel'
            strokeMiterlimit='0'
            strokeDasharray='300'
            style={{scale: scaleWithSpring, rotateX: rotate3DSpringX, rotateY: rotate3DSpringY, strokeDashoffset: dashoffsetSpring }}
            />
            
        )
}

export default memo(Circle);