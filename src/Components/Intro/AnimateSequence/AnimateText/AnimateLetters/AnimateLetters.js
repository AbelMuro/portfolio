import React, {memo, useRef, useContext, useState, useMemo} from 'react';
import {ContainerContext} from '!/intro';
import {useSpring, useScroll, useTransform, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import DisplayLetter from './DisplayLetter';

function AnimateLetters() {
    const text = useRef(`Passion, elegance, dedication and talent.
                        These are the words that I retain when I
                        dedicate myself in creating software. It is a
                        type of art that generates beauty in a stagnant
                        environment. I ensure that every piece of my art
                        will enhance the success of any corporation. Every line
                        of code that I write is made with technical precision. Every
                        inefficiency within a software will be corrected. My talent
                        and dedication is unwavering, as I am no stranger to committing
                        endless hours of writing quality code.`)
    const [displayedText, setDisplayedText] = useState('');
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const display = useTransform(scrollYProgress, [0.65, 1], [0, text.current.length - 1]);

    useMotionValueEvent(display, 'change', (value) => {
        const index = Math.floor(value);
        setDisplayedText(text.current.slice(0, index + 1))
    })

    const currentText = useMemo(() => Array.from(displayedText), [displayedText])

    return(
        <AnimatePresence>
                {currentText.map((letter, i) => {
                    if(letter !== ' ')
                        return <DisplayLetter letter={letter} key={`${letter} ${i}`} index={i}/>
                    else
                        return <span key={`${letter} ${i}`}>{letter}</span>
                    
                })}                    
        </AnimatePresence>
    )
}

export default memo(AnimateLetters);