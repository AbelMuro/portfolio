import React from 'react';
import images from './images';
import {useTransform, motion, useSpring, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateCircle() {

    return(
        <svg className={styles.container} viewBox='0 0 206 206'>
            <g transform='translate(3, 3)' >
                <motion.image 
                    className={styles.image}
                    initial={{rotate: 0}}
                    animate={{rotate: [0, 35, 67, -67 , 144, 100, 170, 210, 360], transition: {duration: 5.2, repeat: Infinity, repeatType: 'loop'}}}
                    href={images['ring']}
                    />
            </g>
        </svg>
    )
}

export default AnimateCircle;