import React, {memo} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css'

function DisplayLetter({letter, i}) {

    return( 
        <motion.span
            className={styles.letter}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{
                opacity: 1,
            }}
            transition={{
                delay: `0.${i < 10 ? `0${i}` : i}`,
                opacity: {duration: 0.2, ease: 'linear'},
            }}>
                {letter}
        </motion.span>
    )
}

export default memo(DisplayLetter);