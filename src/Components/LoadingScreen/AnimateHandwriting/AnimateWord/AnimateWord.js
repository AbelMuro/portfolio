import React from 'react';
import AnimateLetter from './AnimateLetter';
import * as styles from './styles.module.css';

function AnimateWord({word}) {
    return(
        <div className={styles.word}>
                {
                word.map((letter, i) => {
                    return(
                        <AnimateLetter letter={letter[0]} width={letter[1]} index={i} key={i}/>             
                    )
                })}
        </div>
    )
}

export default AnimateWord;