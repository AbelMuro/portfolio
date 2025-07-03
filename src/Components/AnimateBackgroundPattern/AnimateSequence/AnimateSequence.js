import React from 'react';
import AnimatePattern from './AnimatePattern';
import * as styles from './styles.module.css';


function AnimateSequence() {

    return(
        <article className={styles.container}>
            <AnimatePattern/>
        </article>
    )
}

export default AnimateSequence;