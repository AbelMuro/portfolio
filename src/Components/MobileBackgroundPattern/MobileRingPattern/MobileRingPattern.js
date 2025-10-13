import React from 'react';
import {motion} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';

function MobileRingPattern() {
    return(
        <section className={styles.rings}>
            <motion.img initial={{rotate: '0deg'}} animate={{rotate: '360deg'}} transition={{duration: 15, repeat: Infinity, ease: 'linear'}} className={styles.outerMostRing} src={images['outerMostRing']}/>
            <motion.img initial={{rotate: '360deg'}} animate={{rotate: '0deg'}} transition={{duration: 12, repeat: Infinity, ease: 'linear'}} className={styles.outerRing} src={images['outerRing']}/>
            <motion.img initial={{rotate: '0deg'}} animate={{rotate: '360deg'}} transition={{duration: 8, repeat: Infinity, ease: 'linear'}} className={styles.centerRing} src={images['centerRing']}/>
            <motion.img initial={{rotate: '360deg'}} animate={{rotate: '0deg'}} transition={{duration: 6, repeat: Infinity, ease: 'linear'}} className={styles.innerRing} src={images['innerRing']}/>
        </section>
    )
}

export default MobileRingPattern;