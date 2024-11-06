import React from 'react';
import styles from './styles.module.css';
import daysOfWonder from './audio/Clemens Ruh Days Of Wonder.wav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';


function HomeSection() {

    return(
        <section className={styles.homeContainer} id={"home"}>
            <div className={styles.introBox}>
                <h1 className={styles.introTitle}>Hello,<br/> I'm Abel</h1>
                <p className={styles.introDesc}>Web Developer</p>
                <div className={styles.audioCredit}>
                    Background Audio from &nbsp;
                    <a target="_blank" href="https://clemensruh.bandcamp.com/track/days-of-wonder" className={styles.audioLink}>Clemens Ruh</a>
                </div>
                <audio src={daysOfWonder} controls className={styles.audio} controlsList="nodownload" loop></audio>
                <div className={styles.scrollDown}>
                    Scroll down <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
                </div>
            </div>
        </section>
    )
}
export default HomeSection;
