import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const [mount, setMount] = useState(true);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.25, 0.42], [55, 0]);
    const smoothDashOffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80})
    const strokeWidth = useTransform(scrollYProgress, [0.58, 0.63], [props.strokeWidth, 0]);
    const smoothWidth = useSpring(strokeWidth, {stiffness: 150, damping: 80})
    
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.70)
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
                    style={{strokeDashoffset: smoothDashOffset, strokeWidth: smoothWidth}} 
                    filter={'url(#glowEffect)'}
                    initial={{opacity: 1}}
                    exit={{opacity: 0}}
                /> 
            }
        </AnimatePresence>
    )
}

export default Rect; 