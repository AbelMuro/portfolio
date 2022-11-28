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
                    React and other technologies. I have been developing websites 
                    and apps on my free time while working a dead-end job. I also 
                    enjoy working out and playing some games with a few of my friends.
                    Although sometimes I struggle a bit due to my depression, I no longer let it 
                    control my life and still aspire to achieve my dream of becoming a 
                    web developer. I'm the type of person that will admit to my mistakes 
                    and would learn from them.
                    
                </p>

            </div>
            
        </section>
        )
}


export default AboutMeSection;