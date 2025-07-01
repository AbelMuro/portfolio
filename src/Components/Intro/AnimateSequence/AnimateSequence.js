import React from 'react';
import AnimateTitle from './AnimateTitle';
import AnimatePattern from './AnimatePattern';
import AnimateText from './AnimateText';
import DisplayScrollDownMessage from './DisplayScrollDownMessage';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i can finally start on my next design for the portfolio,
*/


function AnimateSequence() {

    return(
        <article className={styles.container}>
            <AnimateTitle/>
            <AnimatePattern/>
            <AnimateText/>
            <DisplayScrollDownMessage/>
        </article>
    )
}

export default AnimateSequence;