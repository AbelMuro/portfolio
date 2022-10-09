import React from 'react';
import styles from './styles.module.css';

function HomeSection() {
    return(
        <section className={styles.homeContainer} id={"home"}>
            <div className={styles.introBox}>
                <h1 className={styles.introTitle}>Hello,<br/> I'm Abel</h1>
                <p className={styles.introDesc}>Web Developer</p>
                <p className={styles.credit}>
                    Background Image from 
                    <a target="_blank" href="https://gfycat.com/obvioustheseamericanbadger" className={styles.creditLink}> Gfycat</a>                    
                </p>
            </div>
        </section>
    )
}
export default HomeSection;

