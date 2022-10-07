import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import abelImage from './images/random image.webp';
import CircularProgress from '@mui/material/CircularProgress';

function HomePage() {
    const [loading, setLoading] = useState(true);


    const rotateTenDeg = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = 'rotate(10deg)';
    }

    const rotateBack = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = '';
    }

    const rotateFiveDeg = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = 'rotate(5deg)'
    }


    useEffect(() => {
        setTimeout(() => {
            setLoading(false) 
        }, 400)
    },[])


    return(
        loading ? <CircularProgress className={styles.loadingIcon}/> :

        <>
            <section className={styles.flexContainerOne}> 
                <div className={styles.boxContainer}>
                    <div className={styles.introBox} onMouseEnter={rotateTenDeg} onMouseLeave={rotateBack}>
                        <h1 className={styles.titleOne}>
                            Hello, <br/>
                            I'm Abel Muro
                        </h1>
                        <h2 className={styles.titleTwo}>
                            Web Developer
                        </h2>                    
                    </div>    
                    <div className={styles.blackBox}></div>
                </div>

                <div className={styles.imageContainer}>           
                    <img src={abelImage} className={styles.abelImage} onMouseEnter={rotateTenDeg} onMouseLeave={rotateBack}/>
                    <div className={styles.blackBoxImage}></div>
                </div>
            </section>    


                <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMe} onMouseEnter={rotateFiveDeg} onMouseLeave={rotateBack}>
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
                    <div className={styles.aboutMeBlackBox}></div>
                </div>                        


        </>

    )
}

export default HomePage;