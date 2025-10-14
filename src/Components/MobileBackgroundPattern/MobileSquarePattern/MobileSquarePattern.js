import React from 'react';
import images from './images'
import * as styles from './styles.module.css';

function MobileSquarePattern(){
    return(
        <section className={styles.squareDesign}>
            <img className={styles.outerMostSquare} src={images['outerMostSquare']}/>
            <img className={styles.outerSquare} src={images['outerSquare']}/>
            <img className={styles.outerSquareGlow} src={images['outerSquareGlow']}/>
            <img className={styles.innerSquare} src={images['innerSquare']}/>
            <img className={styles.innerSquareGlowEffect} src={images['innerSquareGlowEffect']}/>
            <img className={styles.innerMostTriangle} src={images['innerMostTriangle']}/>              
            <img className={styles.innerMostTriangleGlow} src={images['innerMostTriangleGlow']}/>
        </section>
    )    
}

export default MobileSquarePattern;