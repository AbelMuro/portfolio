import React, {useRef, useContext, useState, useEffect} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence} from 'framer-motion';
import {ContainerContext} from '!/Intro';
import * as styles from './styles.module.css';

function ScaleGroup2D({children, scrollThresholds, scaleThresholds, unmountAt, id}) {
    const [mount, setMount] = useState(true)
    const x = useMotionValue(-74.1383963);
    const y = useMotionValue(-25.048764);
    const {MainContainerRef} = useContext(ContainerContext)
    const groupRef = useRef();
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= unmountAt)
            setMount(false);
        else
            setMount(true); 
    })

    return (
        <AnimatePresence>
            {mount && 
                <motion.g 
                    id={id}
                    style={{scale: scaleSpring, x, y}} 
                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.4}}} 
                    ref={groupRef} 
                    className={styles.group}>
                        {children}    
                </motion.g>}              
        </AnimatePresence>
    )
}

export default ScaleGroup2D;