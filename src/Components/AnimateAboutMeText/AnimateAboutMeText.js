import React, {useState} from 'react';
import {LinearText} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateAboutMeText() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();
    
    const maskHeightForBlueText = useTransform(scrollY, [7000, 10000], [0, 400]);
    const maskPositionForBlueText = useTransform(scrollY, [10550, 11500], [-600, 600])
    const maskHeightForBlueTextSmooth = useSpring(maskHeightForBlueText, LinearText);
    const maskPositionForBlueTextSmooth = useSpring(maskPositionForBlueText, LinearText);
    const maskSizeBlue = useTransform(maskHeightForBlueTextSmooth, (height) => {
        return `100% ${height}%`
    });
    const maskPositionBlue = useTransform(maskPositionForBlueTextSmooth, (y) => {
        return `0px ${y}px`
    })

    const maskHeightForWhiteText = useTransform(scrollY, [7500, 10500], [0, 400])
    const maskPositionForWhiteText = useTransform(scrollY, [10550, 11500], [-600, 600]);
    const maskPositionForWhiteTextSmooth = useSpring(maskPositionForWhiteText, LinearText);
    const maskHeightForWhiteTextSmooth = useSpring(maskHeightForWhiteText, LinearText)
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
                            I’m a full-stack web developer and UX/UI designer based 
                            in the Bay Area, California. For the past five years, 
                            I’ve been crafting web applications that fuse technical 
                            precision with elegant design. Perfection isn’t just a goal—it’s my standard. 
                            I invest the countless hours required to produce clean, performant code 
                            that satisfies clients and positions them for success. My obsession 
                            with quality drives me to eliminate inefficiencies and resolve every 
                            bug until the result becomes <span>art</span>. With strong collaboration skills, 
                            I elevate development teams, transforming the process of building software 
                            into a fluid and beautiful craft. To me, software is a passionate 
                            expression capable of generating beauty in a stagnant world.
                        </motion.p>      
                        <motion.p 
                            className={styles.containerTwo} 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            exit={{opacity: 0}}
                            style={{maskSize: maskSizeWhite, maskPosition: maskPositionWhite}}
                            >
                            I’m a full-stack web developer and UX/UI designer based 
                            in the Bay Area, California. For the past five years, 
                            I’ve been crafting web applications that fuse technical 
                            precision with elegant design. Perfection isn’t just a goal—it’s my standard. 
                            I invest the countless hours required to produce clean, performant code 
                            that satisfies clients and positions them for success. My obsession 
                            with quality drives me to eliminate inefficiencies and resolve every 
                            bug until the result becomes <span>art</span>. With strong collaboration skills, 
                            I elevate development teams, transforming the process of building software 
                            into a fluid and beautiful craft. To me, software is a passionate 
                            expression capable of generating beauty in a stagnant world.
                        </motion.p>                
                    </>
                  
            }     
        </AnimatePresence>

    )
}

export default AnimateAboutMeText;