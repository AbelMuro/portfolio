import React, {useRef} from 'react';
import AnimateLetter from './AnimateLetter';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';
import { container_variant } from './Variants';

function AnimateWelcome() {
    const letters = useRef('Welcome'.split(''));


    return(
            <motion.div 
                className={styles.container} 
                initial={'text_hidden'}
                animate={'write_text'}
                variants={container_variant}
                >
                {
                    letters.current.map((letter, i) => {
                        return(
                                <AnimateLetter 
                                    key={`${letter} ${i}`}
                                    letter={letter} 
                                />
                            )
                        })
                }
            </motion.div>  
    )
}

export default AnimateWelcome;