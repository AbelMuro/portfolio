import React, {useEffect, useState, useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTitle() {
    const {MainContainerRef} = useContext(ContainerContext)
    const {scrollYProgress} = useScroll(MainContainerRef);
    const [largeTitle, setLargeTitle] = useState('Welcome.');
    const [smallerTitle, setSmallerTitle] = useState('');

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.06)
            setLargeTitle('Welcome.');
        else if(value >= 0.06 && value <= 0.12){
            setLargeTitle("I'm Abel.");
            setSmallerTitle('');
        }
            
        else if(value >= 0.12 && value <= 0.18){
            setLargeTitle('');
            setSmallerTitle('Full-Stack Web Developer.')
        }
            
        else if(value >= 0.18 && value <= 0.28)
            setSmallerTitle('Behold my Tech Stack.')
        else 
            setSmallerTitle('')
    });


    return (
        <AnimatePresence>
            {     
            largeTitle &&
                <motion.h1 
                    key={largeTitle}
                    className={styles.title} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                        {largeTitle}
                </motion.h1>
            }  
            {
               smallerTitle && 
                <motion.h2 
                    key={smallerTitle}
                    className={styles.smallerTitle} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                        {smallerTitle}
                </motion.h2>
            }
                       
        </AnimatePresence>
    )
}

export default AnimateTitle;