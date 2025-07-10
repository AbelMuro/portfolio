import React, {useState} from 'react';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function DisplayHeadings() {
    const {scrollY} = useScroll();
    const [heading, setHeading] = useState(['Welcome.', 'large'])

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 0 && value < 600)
            setHeading(['Welcome.', 'large']);
        else if(value >= 600 && value <= 1200)
            setHeading(["I'm Abel.", 'large']);
        else if(value > 1200 && value <= 1800)
            setHeading(['Full-Stack Web Developer.', 'small'])
        else if(value > 1800 && value <= 2800)
            setHeading(['Behold my Tech Stack.', 'small'])
        else if(value > 2800 && value < 17000)
            setHeading('')
        else if(value >= 17000 && value < 18000)
            setHeading(['Projects', 'large'])
        else
            setHeading('');
    });


    return (
        <AnimatePresence>
            {     
            heading &&
                <motion.h1 
                    key={heading}
                    className={`${styles[`${heading[1]}Title`]}`} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                        {heading[0]}
                </motion.h1>
            }  
                       
        </AnimatePresence>
    )
}

export default DisplayHeadings;