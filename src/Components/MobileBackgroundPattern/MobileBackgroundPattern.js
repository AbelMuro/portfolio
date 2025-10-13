import React from 'react';
import MobileRingPattern from './MobileRingPattern';
import MobilePentagram from './MobilePentagram';
import * as styles from './styles.module.css';

function MobileBackgroundPattern(){
    return(
        <header className={styles.container}>
            <MobileRingPattern/>
            <MobilePentagram/>
        </header>
    )
}

export default MobileBackgroundPattern;