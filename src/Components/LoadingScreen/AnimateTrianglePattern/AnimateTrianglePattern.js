import React from 'react';
import images from './images';
import * as styles from './styles.module.css';

function AnimateTrianglePattern() {
    return(
        <section className={styles.triangle}>
            <img className={styles.triangleTop} src={images['triangleTop']}/>
            <img className={styles.triangleMiddle} src={images['triangleMiddle']}/>
            <img className={styles.triangleTop} src={images['triangleBottom']}/>
        </section>
    )
}

export default AnimateTrianglePattern;