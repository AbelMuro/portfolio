import React, {useState, useContext, useRef} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useMotionValueEvent, useSpring, useTransform, useScroll, useMotionValue, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

//translate(-46.129077, -11.484006)

function ScaleAndRotateGroup2D({id, children, scaleAnimate, rotateAnimate, unmountAt}) {
    const x = useMotionValue(-46.129077);
    const y = useMotionValue(-11.484006);
    const [mount, setMount] = useState(true);
    const groupRef = useRef();
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scaleAnimate.scrollThresholds, scaleAnimate.scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= unmountAt)
            setMount(false);
        
        else if(value < unmountAt)
            setMount(true); 
    })


    return(
        <AnimatePresence>
            {mount && <motion.g 
                        id={id}
                        initial={{rotate: rotateAnimate.from, opacity: 1}} 
                        animate={{rotate: rotateAnimate.to, transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: rotateAnimate.duration}}} 
                        ref={groupRef}
                        exit={{opacity: 0, transition: {duration: 0.4}}}
                        className={styles.group}
                        style={{scale: scaleSpring}}>
                            {children}
                    </motion.g> 
            }         
        </AnimatePresence>         
    )
}

export default ScaleAndRotateGroup2D;