import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateLetter({letter, index}) {

    useEffect(() => {
        return
        document.fonts.ready.then(() => {
            const bbox = textElement.getBBox();
            svgElement.setAttribute('width', bbox.width + 20);                
        })
    }, [])

    return(
        <svg viewBox='0 0 200 200' className={styles.letter}>
            <motion.text 
                x="10"
                y="160"
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
                className={styles.font}>
                    {letter}
            </motion.text>     
        </svg> 
    )
}

export default AnimateLetter;