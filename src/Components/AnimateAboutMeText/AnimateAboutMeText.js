import React, {useState} from 'react';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


/* 
    this is where i left off, i finished the fade out animation for this component,
    now i need to unmount this component, and start implementing the lunar design in the
    <AnimateLunar/> component
*/

function AnimateAboutMeText() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();
    
    const maskHeightForBlueText = useTransform(scrollY, [7000, 10000], [0, 400]);
    const maskPositionForBlueText = useTransform(scrollY, [10550, 11500], [-600, 600])
    const maskHeightForBlueTextSmooth = useSpring(maskHeightForBlueText, {stiffness: 150, damping: 60});
    const maskPositionForBlueTextSmooth = useSpring(maskPositionForBlueText, {stiffness: 150, damping: 80});
    const maskSizeBlue = useTransform(maskHeightForBlueTextSmooth, (height) => {
        return `100% ${height}%`
    });
    const maskPositionBlue = useTransform(maskPositionForBlueTextSmooth, (y) => {
        return `0px ${y}px`
    })

    const maskHeightForWhiteText = useTransform(scrollY, [7500, 10500], [0, 400])
    const maskPositionForWhiteText = useTransform(scrollY, [10550, 11500], [-600, 600]);
    const maskPositionForWhiteTextSmooth = useSpring(maskPositionForWhiteText, {stiffness: 150, damping: 80});
    const maskHeightForWhiteTextSmooth = useSpring(maskHeightForWhiteText, {stiffness: 150, damping: 80})
    const maskSizeWhite = useTransform(maskHeightForWhiteTextSmooth, (height) => {
        return `100% ${height}%`
    });
    const maskPositionWhite = useTransform(maskPositionForWhiteTextSmooth, (y) => {
        return `0px ${y}px`
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
                            style={{maskSize: maskSizeBlue, maskPosition: maskPositionBlue }}
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
                            style={{maskSize: maskSizeWhite, maskPosition: maskPositionWhite}}
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