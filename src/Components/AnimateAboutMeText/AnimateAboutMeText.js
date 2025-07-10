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
        if(value >= 6500 && value <= 11700)
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
                                I am a full-stack web developer and UX/UI designer that 
                                lives in the Bay Area, California. It is here that
                                I've been creating web apps for the past 7 years.
                                I have a strong obsession with perfecting software 
                                to the point that it will satisfy any client and bring them 
                                fortune. I am no stranger to committing endless hours
                                into writing quality code that creates technical precision. 
                                My collaboration skills will help me refine any development team 
                                to the point that creating software becomes a simplistic but beautifull art.
                                I will never tolerate any inefficiencies within my art and 
                                any bugs will be corrected. Creating software is a passionate art 
                                of mine that can generate beauty in a stagnant world.
                        </motion.p>      
                        <motion.p 
                            className={styles.containerTwo} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}
                            style={{maskSize: maskSizeWhite, maskPosition: maskPositionWhite}}
                            >
                                I am a full-stack web developer and UX/UI designer that 
                                lives in the Bay Area, California. It is here that
                                I've been creating web apps for the past 7 years.
                                I have a strong obsession with perfecting software 
                                to the point that it will satisfy any client and bring them 
                                fortune. I am no stranger to committing endless hours
                                into writing quality code that creates technical precision. 
                                My collaboration skills will help me refine any development team 
                                to the point that creating software becomes a simplistic but beautifull art.
                                I will never tolerate any inefficiencies within my art and 
                                any bugs will be corrected. Creating software is a passionate art 
                                of mine that can generate beauty in a stagnant world.
                        </motion.p>                
                    </>
                  
            }     
        </AnimatePresence>

    )
}

export default AnimateAboutMeText;