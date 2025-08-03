import React from 'react';
import OuterMostRing from './OuterMostRing';
import OuterRing from './OuterRing';
import CenterRing from './CenterRing';
import InnerRing from './InnerRing';
import InnerMostRing from './InnerMostRing';
import AnimatePentagram from './AnimatePentagram';
import AnimateSquarePattern from './AnimateSquarePattern';
import AnimateLunarPattern from './AnimateLunarPattern';
import * as styles from './styles.module.css';

function AnimateSequence() {

    return(
        <article className={styles.container}>
            <OuterMostRing/>
            <OuterRing/>
            <CenterRing/>
            <InnerRing/>
            <InnerMostRing/>
            <AnimatePentagram scrollThresholds={[900, 2100]}/>
            <AnimateSquarePattern scrollThresholds={[900, 2100]}/>     
            <AnimateLunarPattern/>            
        </article>
    )
}

export default AnimateSequence;