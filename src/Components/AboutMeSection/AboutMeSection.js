import React from 'react';
import styles from './styles.module.css';
import selfImage from './images/Web-Developer-self-portrait.png';


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
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={selfImage} className={styles.selfImage} onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
                    <div className={styles.blackBox}></div>
                </div>

                <div className={styles.aboutMeContainer}>
                    <h1 className={styles.aboutMeTitle}>
                        About Me
                    </h1>
                    <p className={styles.aboutMeDesc}>
                        Driven, motivated, aspiring, self-taught front-end developer that has
                        a strong passion for developing websites and web apps primarily with
                        React and Redux. I have been developing software on my free time 
                        while working a dead-end job. During the time I used to develop 
                        apps, I managed to solve high level challenges. Which, in turn, made me 
                        into a better programmer and problem solver. I understand that programming in general 
                        is a process of continuous learning, and I will always strive to improve by taking a teammates
                        advice as constructive criticism.
                    </p>
                    <button variant="contained" href="https://drive.google.com/file/d/1RsuLDZb1Cv7HFm2BN6QaFTLbt7O_hymB/view?usp=sharing" target="_blank">
                        Check out my resume!
                    </button>
                </div>                
            </div>

            
        </section>
        )
}


export default AboutMeSection;