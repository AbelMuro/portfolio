import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import AnimatePentagram from './AnimatePentagram';
import AnimateSquarePattern from './AnimateSquarePattern';
import AnimateLunar from './AnimateLunar'
import * as styles from './styles.module.css';


function AnimatePattern() {
    
    return(
            <section className={styles.container}>
                <OuterMostRing/>
                <OuterRing/>
                <InnerRing/>
                <InnerMostRing/>
                <InnerMostLines/>
                <AnimatePentagram scrollThresholds={[900, 2100]}/>
                <AnimateSquarePattern scrollThresholds={[900, 2100]}/>     
                <AnimateLunar/>            
            </section>                
    )
}

export default AnimatePattern;