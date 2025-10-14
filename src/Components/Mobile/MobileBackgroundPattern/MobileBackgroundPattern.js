import React from 'react';
import MobileRingPattern from './MobileRingPattern';
import MobilePentagram from './MobilePentagram';
import MobileSquarePattern from './MobileSquarePattern';
import MobileMoonPattern from './MobileMoonPattern';
import * as styles from './styles.module.css';

function MobileBackgroundPattern(){
    return(
        <header className={styles.container}>
            <MobileRingPattern/>
            <MobilePentagram/>
            <MobileSquarePattern/>
            <MobileMoonPattern/>
        </header>
    )
}

export default MobileBackgroundPattern;