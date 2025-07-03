import React, {useState} from 'react';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateIntroTitle() {
    const {scrollY} = useScroll();
    const [largeTitle, setLargeTitle] = useState('Welcome.');
    const [smallerTitle, setSmallerTitle] = useState('');

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 0 && value < 600)
            setLargeTitle('Welcome.');
        else if(value >= 600 && value <= 1200){
            setLargeTitle("I'm Abel.");
            setSmallerTitle('');
        }
        else if(value > 1200 && value <= 1800){
            setLargeTitle('');
            setSmallerTitle('Full-Stack Web Developer.')
        }
        else if(value > 1800 && value <= 2800)
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

export default AnimateIntroTitle;