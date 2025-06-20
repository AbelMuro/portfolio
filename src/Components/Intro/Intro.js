import React from 'react';
import AnimatePattern from './AnimatePattern';
import * as styles from './styles.module.css';


function Intro() {

    return(
        <section className={styles.container} id={"home"}>
            <AnimatePattern/>
        </section>
    )
}
export default Intro;
