import React from 'react';
import AnimateSequence from './AnimateSequence';
import * as styles from './styles.module.css';


function AnimateBackgroundPattern() {

    return(
        <header className={styles.container} id='intro'>
            <AnimateSequence/>
        </header>            
    )
}
export default AnimateBackgroundPattern;
