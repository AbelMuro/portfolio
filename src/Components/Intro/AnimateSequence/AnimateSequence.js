import React from 'react';
import AnimatePattern from './AnimatePattern';
import AnimateTitle from './AnimateTitle';
import DisplayScrollDownMessage from './DisplayScrollDownMessage';
import * as styles from './styles.module.css';

function AnimateSequence() {

    return(
        <section className={styles.container}>
            <AnimatePattern/>
            <AnimateTitle/>
            <DisplayScrollDownMessage/>
        </section>
    )
}

export default AnimateSequence;