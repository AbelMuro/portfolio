import React, {useContext, useState} from 'react';
import AnimateLetters from './AnimateLetters';
import {ContainerContext} from '!/intro';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i will need to continue working on this text design, i am trying to animate two 
    paragraph elements, one on top of the other, 

    one paragraph elements has white text, the other has transparent text with background-clip
*/

function AnimateText() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const maskSizeHeight = useTransform(scrollYProgress, [0.75, 0.95], [0, 100])
    const maskSizeSmooth = useSpring(maskSizeHeight, {stiffness: 150, damping: 80})
    const maskSize = useTransform(maskSizeSmooth, (height) => {
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
                            className={styles.containerOne} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}>
                                <AnimateLetters color='#ffffff'/>
                        </motion.p>     
                        <motion.p 
                            className={styles.containerTwo} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}
                            style={{maskSize}}
                            >
                                <AnimateLetters/>
                        </motion.p>                 
                    </>
                  
            }     
        </AnimatePresence>

    )
}

export default AnimateText;