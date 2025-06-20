import React from 'react';
import AnimatePattern from './AnimatePattern';
import AnimateTitle from './AnimateTitle';
import * as styles from './styles.module.css';

function AnimateSequence() {

    return(
        <section className={styles.container}>
            <AnimatePattern/>
            <AnimateTitle/>
        </section>
    )
}

export default AnimateSequence;