import React, {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateLetter({letter, width, index}) {
    const textElement = useRef();
    const svgElement = useRef();

    useEffect(() => {

    }, [])

    return(
            <motion.text 
                x="-20"
                y="160"
                ref={textElement}
                fontFamily="AbelsFont"
                fill="none"
                strokeWidth="1"
                stroke="blue"
                strokeDasharray={1800}
                initial={{strokeDashoffset: 1800}}
                animate={{strokeDashoffset: 0}}
                transition={{
                    duration: 1.3,
                    delay: index
                }}
                className={styles.letter}>
                    {letter}
            </motion.text>     
    )
}

export default AnimateLetter;