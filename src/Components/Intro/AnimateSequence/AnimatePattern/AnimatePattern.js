import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import AnimatePentagram from './AnimatePentagram';
import AnimateSquarePattern from './AnimateSquarePattern';
import * as styles from './styles.module.css';


function AnimatePattern() {
    
    return(
            <section className={styles.container}>
                <OuterMostRing/>
                <OuterRing/>
                <InnerRing/>
                <InnerMostRing/>
                <InnerMostLines/>
                <AnimatePentagram scrollThresholds={[0.09, 0.21]}/>
                <AnimateSquarePattern scrollThresholds={[0.09, 0.21]}/>                 
            </section>                
    )
}

export default AnimatePattern;