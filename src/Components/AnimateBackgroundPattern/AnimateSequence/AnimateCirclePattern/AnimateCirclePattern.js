import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import * as styles from './styles.module.css';

function AnimateCirclePattern() {
    return(
        <section id='circle' className={styles.container}>
            <OuterMostRing/>
            <OuterRing/>
            <InnerRing/>
            <InnerMostRing/>
            <InnerMostLines/>
        </section>
    )
}

export default AnimateCirclePattern;