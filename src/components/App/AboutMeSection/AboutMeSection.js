import React from 'react';
import styles from './styles.module.css';
import selfImage from './images/Web-Developer-self-portrait.png';
import {Button} from '@mui/material';
import {styled} from '@mui/system';

const StyledButton = styled(Button)`
    width: 300px;
    align-self: center;
    background-color: black;
    color: white;
    font-family: "AbelFont";

    &:hover {
        background-color: rgb(177, 177, 177);
        color: black;
    }
`

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
                    Driven, motivated, aspiring, self-taught front-end developer that has
                    a strong passion for developing websites and web apps primarily with
                    React and Redux. I have been developing software on my free time 
                    while working a dead-end job. Although sometimes I struggle a bit because 
                    of my depression, I no longer let it control my life and still aspire to 
                    achieve my dream of becoming a web developer. During the time I used to develop 
                    apps, I managed to solve alot of high level challenges. Which, in turn, made me 
                    into a better programmer and problem solver. I understand that programming in general 
                    is a process of continuous learning, and I will always strive to improve by taking a teammates
                    advice as constructive criticism.
                </p>
                <StyledButton variant="contained" href="https://drive.google.com/file/d/1RsuLDZb1Cv7HFm2BN6QaFTLbt7O_hymB/view?usp=sharing" target="_blank">
                    Check out my resume!
                </StyledButton>
            </div>
            
        </section>
        )
}


export default AboutMeSection;