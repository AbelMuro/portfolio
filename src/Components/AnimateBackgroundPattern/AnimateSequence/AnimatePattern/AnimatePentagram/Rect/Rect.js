import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const strokeDashOffset = useTransform(scrollY, [2500, 4200], [55, 0]);
    const smoothDashOffset = useSpring(strokeDashOffset, {stiffness: 150, damping: 80})
    const strokeDashBack = useTransform(scrollY, [5800, 6000], [0, 55])
    const strokeDashBackSmooth = useSpring(strokeDashBack, {stiffness: 150, damping: 40});
    
    useMotionValueEvent(strokeDashBackSmooth, 'change', (value) => {
        smoothDashOffset.set(value);
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
                <motion.rect 
                    {...props} 
                    className={styles.squares} 
                    fill='none' 
                    stroke='#0400ff' 
                    strokeDasharray={55} 
                    style={{strokeDashoffset: smoothDashOffset}} 
                    filter={'url(#glowEffect)'}
                    initial={{opacity: 1}}
                    exit={{opacity: 0}}
                /> 
            }
        </AnimatePresence>
    )
}

export default Rect; 