import React, {useContext, useState} from 'react';
import AnimateLetters from './AnimateLetters';
import {ContainerContext} from '!/intro';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateText() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const maskHeight = useTransform(scrollYProgress, [0.65, 1], [0, 100]);
    const maskHeightSmooth = useSpring(maskHeight, {delay: 1, duration: 1.3})
    const maskSize = useTransform(maskHeightSmooth, (height) => {
        return `100% ${height}%`
    })

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0.65)
            setMount(true);
        else
            setMount(false);
    })

    return (
        <AnimatePresence>
            {
                mount &&
                    <>
                        <motion.p 
                            className={styles.container} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}>
                                <AnimateLetters line={'Passion, elegance, dedication and talent. '} scrollThresholds={[0.70, 0.72]}/>
                                <AnimateLetters line={`These are the words that I retain when I `} scrollThresholds={[0.72, 0.75]}/>
                                <AnimateLetters line={`dedicate myself in creating software. It is a `} scrollThresholds={[0.75, 0.78]}/>
                                <AnimateLetters line={`type of art that generates beauty in a stagnant `} scrollThresholds={[0.78, 0.82]}/>
                                <AnimateLetters line={`environment. I ensure that every piece of my art `} scrollThresholds={[0.82, 0.85]}/>
                                <AnimateLetters line={`will enhance the success of any corporation. Every line `} scrollThresholds={[0.85, 0.87]}/>
                                <AnimateLetters line={`of code that I write is made with technical precision. Every `} scrollThresholds={[0.87, 0.90]}/>
                                <AnimateLetters line={`inefficiency within a software will be corrected. My talent `} scrollThresholds={[0.90, 0.93]}/>
                                <AnimateLetters line={`and dedication is unwavering, as I am no stranger to committing `} scrollThresholds={[0.93, 0.96]}/>
                                <AnimateLetters line={`endless hours of writing quality code.`} scrollThresholds={[0.96, 1]}/>
                        </motion.p>                   
                    </>
                  
            }     
        </AnimatePresence>

    )
}

export default AnimateText;