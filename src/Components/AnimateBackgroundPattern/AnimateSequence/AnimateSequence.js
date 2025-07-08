import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import AnimatePentagram from './AnimatePentagram';
import AnimateSquarePattern from './AnimateSquarePattern';
import AnimateLunarPattern from './AnimateLunarPattern'
import * as styles from './styles.module.css';


function AnimateSequence() {

    return(
        <article className={styles.container}>
            <section className={styles.pattern}>
                <OuterMostRing/>
                <OuterRing/>
                <InnerRing/>
                <InnerMostRing/>
                <InnerMostLines/>
                <AnimatePentagram scrollThresholds={[900, 2100]}/>
                <AnimateSquarePattern scrollThresholds={[900, 2100]}/>     
                <AnimateLunarPattern/>            
            </section> 
        </article>
    )
}

export default AnimateSequence;