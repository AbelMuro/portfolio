import React, {useState} from 'react';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

/* this is where i left off, i need to fade out the text in this component and start making my next lunar design */

function AnimateAboutMeText() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();
    
    const maskHeightForBlueText = useTransform(scrollY, [7000, 10000], [0, 200]);
    const maskHeightForBlueTextSmooth = useSpring(maskHeightForBlueText, {stiffness: 150, damping: 60})
    const maskSizeBlue = useTransform(maskHeightForBlueTextSmooth, (height) => {
        return `100% ${height}%`
    })

    const maskHeightForWhiteText = useTransform(scrollY, [7500, 10000], [0, 200])
    const maskHeightForWhiteTextSmooth = useSpring(maskHeightForWhiteText, {stiffness: 150, damping: 80})
    const maskSizeWhite = useTransform(maskHeightForWhiteTextSmooth, (height) => {
        return `100% ${height}%`
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 6500)
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
                            className={styles.containerOne} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}
                            style={{maskSize: maskSizeBlue}}
                            >
                                Passion, elegance, dedication and talent.
                                These are the words that I retain when I
                                dedicate myself in creating software. It is a
                                type of art that generates beauty in a stagnant
                                environment. I ensure that every piece of my art
                                will enhance the success of any corporation. Every line
                                of code that I write is made with technical precision. Every
                                inefficiency within a software will be corrected. My talent
                                and dedication is unwavering, as I am no stranger to committing
                                endless hours of writing quality code.
                        </motion.p>      
                        <motion.p 
                            className={styles.containerTwo} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}
                            style={{maskSize: maskSizeWhite}}
                            >
                                Passion, elegance, dedication and talent.
                                These are the words that I retain when I
                                dedicate myself in creating software. It is a
                                type of art that generates beauty in a stagnant
                                environment. I ensure that every piece of my art
                                will enhance the success of any corporation. Every line
                                of code that I write is made with technical precision. Every
                                inefficiency within a software will be corrected. My talent
                                and dedication is unwavering, as I am no stranger to committing
                                endless hours of writing quality code.
                        </motion.p>                
                    </>
                  
            }     
        </AnimatePresence>

    )
}

export default AnimateAboutMeText;