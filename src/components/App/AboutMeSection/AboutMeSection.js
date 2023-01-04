import React from 'react';
import styles from './styles.module.css';
import selfImage from './images/random image.webp';
import {Button} from '@mui/material';
import {styled} from '@mui/system';

const StyledButton = styled(Button)`
    width: 300px;
    align-self: center;
    background-color: black;
    color: white;
    font-family: "AbelFont";

    &:hover{
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
                    Driven, motivated, self-taught web developer that has
                    a strong passion for developing websites and web apps primarily with
                    React and other technologies. I have been developing software on my free time 
                    while working a dead-end job. Although sometimes I struggle a bit because 
                    of my depression, I no longer let it control my life and still aspire to 
                    achieve my dream of becoming a web developer. I'm the type of person that 
                    will admit to my mistakes and would learn from them. I take it as constructive 
                    criticism when a teammate advices me on how I can improve my skills in javascript. 
                    For as long as I live, I will continue to learn new technologies and improve 
                    as a programmer.
                </p>
                <StyledButton variant="contained" href="https://drive.google.com/file/d/1LERO_8-mB2DTMo6QakzPwsggBjZbxwjH/view?usp=sharing" target="_blank">Check out my resume!</StyledButton>
            </div>
            
        </section>
        )
}


export default AboutMeSection;