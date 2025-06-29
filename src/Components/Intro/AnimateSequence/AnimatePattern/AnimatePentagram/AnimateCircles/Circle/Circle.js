import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({scrollThresholds, scaleTo, rotateX, rotateY}) {
    const [mount, setMount] = useState(true);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.58, 0.62], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, {stiffness: 150, damping: 70});

    const scale = useTransform(scrollYProgress, scrollThresholds, [1, scaleTo]);
    const scaleWithSpring = useSpring(scale, {stiffness: 150, damping: 10});

    const rotate3DForX = useTransform(scrollYProgress, [scrollThresholds[1], scrollThresholds[1] + 0.10, scrollThresholds[1] + 0.20], rotateX);
    const rotate3DForY = useTransform(scrollYProgress, [scrollThresholds[1], scrollThresholds[1] + 0.10, scrollThresholds[1] + 0.20], rotateY)
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 100, damping: 50})
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 100, damping: 50});

    const scaleBack = useTransform(scrollYProgress, [0.55, 0.57], [scaleTo, 1]);    
    useTransform(scaleBack, (scaleBack) => {
        const scroll = scrollYProgress.get();
        if (scroll >= 0.55 && scroll <= 0.57)
            scaleWithSpring.set(scaleBack);
    })

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.70)
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