import React from 'react';
import AnimateWelcome from './AnimateWelcome';
import {motion, useScroll, useTransform} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

function AnimateTitle() {
    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.20], [1, 0]);

    return(
        <motion.div className={styles.container} style={{opacity}}>
            <AnimateWelcome/>
            <h2 className={styles.title_message}>
                Scroll down.
                <motion.img src={icons['arrowDown']} initial={{y: 0}} animate={{y: [0, 20, 0]}} transition={{duration: 1.5, repeat: Infinity}}/>
            </h2>
        </motion.div>
    )
}

export default AnimateTitle;