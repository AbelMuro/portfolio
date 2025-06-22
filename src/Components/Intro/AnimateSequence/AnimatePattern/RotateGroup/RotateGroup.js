import React, {useContext, useState, useEffect} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useAnimationControls, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function RotateGroup({children, from, to, duration, scrollThreshold}) {
    const [animate, setAnimate] = useState(true);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const controls = useAnimationControls();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setAnimate(value < scrollThreshold); 
    }) 

    useEffect(() => {
        if(animate)
            controls.start({rotate: [from, to], transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration}})
        else 
            controls.stop();
    }, [animate])

    return(
        <motion.g className={styles.group} initial={{rotate: from}} animate={controls}>
            {children}
        </motion.g>  
    )
}

export default RotateGroup;