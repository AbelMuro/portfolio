import React, {useState} from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import * as styles from './styles.module.css';

function DisplayMobileHeadings(){
    const [heading, setHeading] = useState(['Welcome.', 'large']);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        console.log(value)
        if(value >= 0 && value < 200)
            setHeading(['Welcome.', 'large']);
        else if(value >= 200 && value <= 600)
            setHeading([`I'm Abel, a Full-Stack Developer`, 'small']);
        else if(value > 600 && value <= 1000)
            setHeading(['Behold my Tech Stack.', 'small'])
        else
            setHeading('');
    });

   return (
        <AnimatePresence>
            {     
            heading &&
                <motion.h1 
                    key={heading}
                    className={styles[`${heading[1]}Heading`]} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                        {heading[0]}
                </motion.h1>
            }  
                       
        </AnimatePresence>
    )
}

export default DisplayMobileHeadings;