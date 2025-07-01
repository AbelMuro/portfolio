import React, {memo, useRef, useContext, useState, useMemo, useEffect} from 'react';
import {ContainerContext} from '!/intro';
import {useSpring, useScroll, useTransform, useMotionValueEvent, AnimatePresence, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateLetters({line, scrollThresholds}) {
    const [displayedText, setDisplayedText] = useState('');
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const display = useTransform(scrollYProgress, scrollThresholds, [0, line.length - 1])

    useMotionValueEvent(display, 'change', (value) => {
        const index = Math.floor(value);
        setDisplayedText(line.slice(0, index > 0 ? index + 1 : 0))
    })

    const currentText = useMemo(() => Array.from(displayedText), [displayedText]);

    return(
        <AnimatePresence>
                {currentText.map((letter, i) => {
                        return (
                            <motion.span
                                key={`${letter} ${i}`}
                                className={styles.letter}
                                initial={{color: '#ffffff'}}
                                animate={{color: '#ffffff00', transition: {duration: 2.7, delay: `0.${i < 10 ? `0${i}` : i}`, }}}
                                exit={{
                                    color: '#ffffff', 
                                    opacity: 0,
                                    transition: {
                                        opacity: {
                                            duration: 1.5
                                        },
                                        color: {
                                            duration: 1
                                        }
                                    }}}>
                                    {letter}
                            </motion.span>
                            )
                })}                    
        </AnimatePresence>
    )
}

export default memo(AnimateLetters);