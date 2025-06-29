import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import AnimatePentagram from './AnimatePentagram';
import * as styles from './styles.module.css';


function AnimatePattern() {
    
    return(
            <section className={styles.container}>
                <OuterMostRing/>
                <OuterRing/>
                <InnerRing/>
                <InnerMostRing/>
                <InnerMostLines/>
                <AnimatePentagram/>                 
            </section>                
    )
}

export default AnimatePattern;