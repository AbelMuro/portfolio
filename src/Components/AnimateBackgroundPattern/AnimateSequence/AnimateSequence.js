import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import InnerMostLines from './InnerMostLines';
import AnimatePentagram from './AnimatePentagram';
import AnimateSquarePattern from './AnimateSquarePattern';
import AnimateLunarPattern from './AnimateLunarPattern';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to continue optimizing the components for safari and the other browsers
    i also need to learn how to delete branches that i created remotely and locally
*/

function AnimateSequence() {

    return(
        <article className={styles.container}>
            <OuterMostRing/>
            <OuterRing/>
            <InnerRing/>
            <InnerMostRing/>
            <InnerMostLines/>
            <AnimatePentagram scrollThresholds={[900, 2100]}/>
            <AnimateSquarePattern scrollThresholds={[900, 2100]}/>     
            <AnimateLunarPattern/>            
        </article>
    )
}

export default AnimateSequence;