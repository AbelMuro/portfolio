import React, {useRef} from 'react';
import AnimateWelcome from './AnimateWelcome';
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

function AnimateTitle() {
    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.20], [1, 0]);
    const titleRef = useRef();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.25)
            titleRef.current.style.display = 'none';
        else
            titleRef.current.style.display = 'flex';
    })

    return(
        <motion.div className={styles.container} style={{opacity}} ref={titleRef}>
            <h1 className={styles.title}>
                Welcome.
            </h1>
            <h2 className={styles.title_message}>
                Scroll down.
                <motion.img src={icons['arrowDown']} initial={{y: 0}} animate={{y: [0, 20, 0]}} transition={{duration: 1.5, repeat: Infinity}}/>
            </h2>
        </motion.div>
    )
}

export default AnimateTitle;