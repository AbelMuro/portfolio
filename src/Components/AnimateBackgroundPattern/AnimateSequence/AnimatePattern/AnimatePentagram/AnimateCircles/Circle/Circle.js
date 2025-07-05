import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({scrollThresholds, scaleTo, rotateX, rotateY}) {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const strokeDashoffset = useTransform(scrollY, [5800, 6200], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, {stiffness: 150, damping: 40});

    const scale = useTransform(scrollY, scrollThresholds, [1, scaleTo]);
    const scaleWithSpring = useSpring(scale, {stiffness: 150, damping: 10});

    const rotate3DForX = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateX);
    const rotate3DForY = useTransform(scrollY, [scrollThresholds[1], scrollThresholds[1] + 1000, scrollThresholds[1] + 2000], rotateY)
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 100, damping: 50})
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 100, damping: 50});
    const scaleBack = useTransform(scrollY, [5500, 5700], [scaleTo, 1]);    

    useMotionValueEvent(scaleBack, 'change', (scaleBack) => {
        scaleWithSpring.set(scaleBack);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 7000)
            setMount(false)
        else
            setMount(true);
    })


    return (
        <AnimatePresence>
            {mount && 
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
                    initial={{opacity: 1}}
                    filter={'url(#glowEffect)'}
                    style={{scale: scaleWithSpring, rotateX: rotate3DSpringX, rotateY: rotate3DSpringY, strokeDashoffset: dashoffsetSpring }}
                    exit={{opacity: 0}}
                    />
            }
        </AnimatePresence>
)
}

export default Circle;