import React, {useEffect} from 'react';
import {motion, useAnimationControls} from 'framer-motion';
import * as styles from './styles.module.css'

function MobileBackgroundPattern() {
    const cloudControls = useAnimationControls();

    const animateFirstCloud = async () => {
        await cloudControls.start({top: '400px', skewX: '15deg', skewY: '-25deg', transition: {duration: 4}});
        await cloudControls.start({left: '150px', skewX: '-15deg', skewY: '3deg', transition: {duration: 4}});
        await cloudControls.start({left: '50px', skewX: '0deg', skewY: '-25deg' ,transition: {duration: 3.5}});
        await cloudControls.start({top: '100px', skewX: '-25deg', skewY: '30deg', transition: {duration: 3.5}});
        await cloudControls.start({left: '0px', skewX: '15deg', skewY: '-25deg', transition: {duration: 2.5}});
        await cloudControls.start({top: '0px', left: '0px',  skewX: '-30deg', skewY: '25deg', transition: {duration: 1.5}});
        animateFirstCloud();
    }

    useEffect(() => {
        cloudControls.start({filter: ['blur(100px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        animateFirstCloud();
    }, [])

    return(
        <section className={styles.container}>
            <motion.div 
                className={styles.cloudOne} 
                initial={{filter: 'blur(70px)', top: '0px', left: '0px'}}
                animate={cloudControls}/>
        </section>
    )
}

export default MobileBackgroundPattern;