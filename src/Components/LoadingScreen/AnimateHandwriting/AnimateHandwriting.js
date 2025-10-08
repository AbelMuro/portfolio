import React, {useRef} from 'react';
import AnimateLetter from './AnimateLetter';
import * as styles from './styles.module.css';

function AnimateHandwriting() {
    const text = useRef(['A', 'b', 'e', 'l', "'", 's', ' ' ,'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']);


    return(
        <section className={styles.container}>
            {
                text.current.map((letter, i) => {
                    return(
                        <AnimateLetter letter={letter} key={i} index={i}/>                
                    )
                })
            }
        </section>
    )
}

export default AnimateHandwriting;