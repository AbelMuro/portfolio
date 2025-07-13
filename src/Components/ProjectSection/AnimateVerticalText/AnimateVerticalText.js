import React, {useRef, useState} from 'react';
import DisplayLetter from './DisplayLetter';
import {useTransform, useMotionValueEvent, useScroll, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateVerticalText({scrollThresholds}) {
    const text = useRef('MEVM•OPVS•VITAE'.split(''));
    const {scrollY} = useScroll();
    const [displayText, setDisplayText] = useState([]);
    const currentLetter = useTransform(scrollY, scrollThresholds, [0, text.current.length - 1]);


    useMotionValueEvent(currentLetter, 'change', (i) => {
        setDisplayText(text.current.slice(0, i));
    })

    return(
        <h3 className={styles.text}>
            {displayText.map((letter, i) => {
                return <DisplayLetter letter={letter} key={`${letter} ${i}`}/>
            })}
        </h3>
    )
}

export default AnimateVerticalText;