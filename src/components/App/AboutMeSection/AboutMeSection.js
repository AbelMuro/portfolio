import React from 'react';
import styles from './styles.module.css';
import selfImage from './images/random image.webp';

function AboutMeSection() {

    const handleEnter = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = "rotate(10deg)";
    }

    const handleLeave = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = "";
    }

    return(
        <section className={styles.container} id={"aboutMe"}>
            <div className={styles.imageContainer}>
                <img src={selfImage} className={styles.selfImage} onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
                <div className={styles.blackBox}></div>
            </div>

            <div className={styles.aboutMeContainer}>
                <h1 className={styles.aboutMeTitle}>
                    About Me
                </h1>
                <p className={styles.aboutMeDesc}>
                    Driven, motivated, self-taught web developer that has
                    a strong passion for developing websites and web apps with
                    React and other technologies. I understand that programming in 
                    general is a process of continuous learning. So long as I live,
                    I will continue to learn new technologies to improve as a programmer
                    and as a person as well. I love working with people of different 
                    backgrounds and nationalities and enjoy hearing their stories 
                    and journeys.
                </p>

            </div>
            
        </section>
        )
}


export default AboutMeSection;