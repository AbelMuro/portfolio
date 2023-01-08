import React, {useEffect} from 'react';
import styles from './styles.module.css';
import daysOfWonder from './audio/Clemens Ruh Days Of Wonder.wav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

function HomeSection() {

    const setHalfVolume = (e) => {
        e.target.volume /= 5;
    }

    useEffect(() => {
        document.querySelector("#" + styles.audio).addEventListener("play", setHalfVolume);
        return () => {removeEventListener("play", setHalfVolume)};
    })


    return(
        <section className={styles.homeContainer} id={"home"}>
            <div className={styles.introBox}>
                <h1 className={styles.introTitle}>Hello,<br/> I'm Abel</h1>
                <p className={styles.introDesc}>Web Developer</p>
                <p className={styles.credit}>
                    Background Image from &nbsp;
                    <a target="_blank" href="https://gfycat.com/obvioustheseamericanbadger" className={styles.creditLink}>Gfycat</a>                    
                </p>
                <div className={styles.audioCredit}>
                    Background Audio from &nbsp;
                    <a target="_blank" href="https://clemensruh.bandcamp.com/track/days-of-wonder" className={styles.audioLink}>Clemens Ruh</a>
                </div>
                <div className={styles.audioContainer}>
                    <audio src={daysOfWonder} controls id={styles.audio} controlsList="nodownload" autoPlay loop></audio>
                </div>
                

                <div className={styles.scrollDown}>
                    Scroll down <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
                </div>
            </div>


        </section>
    )
}
export default HomeSection;
