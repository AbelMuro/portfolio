import React, {memo, useState} from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({scrollThresholds, scaleTo, rotateX, rotateY}) {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const strokeDashoffset = useTransform(scrollY, [5800, 6000], [0, 440]);
    const dashoffsetSpring = useSpring(strokeDashoffset, LinearPentagram);

    const opacity = useTransform(scrollY, [6700, 6800], [1, 0]);

    const scale = useTransform(scrollY, scrollThresholds, [1, scaleTo]);
    const scaleWithSpring = useSpring(scale, LinearPentagram);
    const scaleBack = useTransform(scrollY, [5500, 5700], [scaleTo, 1]);    

    const rotate3DForX = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateX);
    const rotate3DForY = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateY);
    const rotate3DSpringX = useSpring(rotate3DForX, LinearPentagram);
    const rotate3DSpringY = useSpring(rotate3DForY, LinearPentagram);


    useMotionValueEvent(scaleBack, 'change', (value) => {
        scaleWithSpring.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 5800)
            dashoffsetSpring.set(0);
        else if(y >= 6900)
            dashoffsetSpring.jump(440)
    })

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 2800)
            setMount(false);
        else
            setMount(true);
    })



    return mount && (
        <motion.circle
            className={styles.circle}
            cx={103}
            cy={96.5}
            r={70}
            fill='none' 
            stroke='#0400ff'
            strokeWidth='1'
            strokeLinejoin='bevel'
            strokeMiterlimit='0'
            strokeDasharray='440'
            style={{scale: scaleWithSpring, rotateX: rotate3DSpringX, rotateY: rotate3DSpringY ,strokeDashoffset: dashoffsetSpring, opacity}}
            />
            
        )
}

export default memo(Circle);