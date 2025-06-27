import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import AnimatePentagram from './AnimatePentagram';
import * as styles from './styles.module.css';

/* this is where i left off, i need to find better ways to optimize the app, i can also start correcting the AnimatePentagram's icons and title positioning*/


function AnimatePattern() {
    return(
            <section className={styles.container}>
                <OuterMostRing/>
                <OuterRing/>
                <InnerRing/>
                <InnerMostRing/>
                <AnimatePentagram/>                 
            </section>                
    )
}

export default AnimatePattern;