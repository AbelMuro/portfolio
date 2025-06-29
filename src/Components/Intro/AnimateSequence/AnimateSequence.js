import React from 'react';
import AnimatePattern from './AnimatePattern';
import AnimateTitle from './AnimateTitle';
import DisplayScrollDownMessage from './DisplayScrollDownMessage';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i can finally start on my next design for the portfolio,
    also, make sure to space out the animation for the pentagram component, more specifically, the AnimateTechTitles component
*/


function AnimateSequence() {

    return(
        <article className={styles.container}>
            <AnimatePattern/>
            <AnimateTitle/>
            <DisplayScrollDownMessage/>
        </article>
    )
}

export default AnimateSequence;