import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import images from './images';

function ProjectsPage() {
    const [loading, setLoading] = useState(true);

    const handleEnter = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = 'rotate(5deg)';
    }

    const handleLeave = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = '';
    } 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false) 
        }, 400)
    },[])

    return(
        loading ? <CircularProgress className={styles.loadingIcon}/> :
        <section className={styles.container}>
            <div className={styles.boxContainer}>
                <div className={styles.greyBox} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <h1 className={[styles.title, styles.eventBubbling].join(" ")}>
                            My Projects

                    </h1>
                    <p className={[styles.desc, styles.eventBubbling].join(" ")}>
                        I have used the following frameworks/libraries
                        for my projects below: React, Redux, GSAP, JQuery,
                        and SASS.
                    </p>   
                </div>
                <div className={styles.blackBox}></div>
            </div>
  

            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://dark-pink-mastercard.netlify.app" target="_blank">
                    <img src={images["darkPinkMasterCard"]} className={styles.projectImage}/>
                </a>
                <p className={styles.projectTitle}>
                    Dark Pink Mastercard Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://food-dasher-app.netlify.app" target="_blank">
                    <img src={images["foodDasherApp"]} className={styles.projectImage}/>  
                </a>
                <p className={styles.projectTitle}>
                    Food Dasher App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://jack-in-the-box-clone.netlify.app" target="_blank">
                    <img src={images["jackInTheBox"]} className={styles.projectImage}/>
                </a>
                <p className={styles.projectTitle}>
                    Jack In The Box Website Clone
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://recruitment-website-mockup.netlify.app" target="_blank">
                    <img src={images["recruitmentWebsite"]} className={styles.projectImage}/>                    
                </a>
                <p className={styles.projectTitle}>
                    Recruitment Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://solar-systems-website.netlify.app" target="_blank">
                    <img src={images["solarSystemWebsite"]} className={styles.projectImage}/>                    
                </a>

                <p className={styles.projectTitle}>
                    Solar Systems Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} href="https://sky-lunar-designs.netlify.app" target="_blank">
                    <img src={images["skyLunarDesigns"]} className={styles.projectImage}/>                    
                </a>
                <p className={styles.projectTitle}>
                    Sky Lunar Designs Website
                </p>
            </div>

            <div className={styles.footerContainer}>
                <div className={styles.disclaimer} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        DISCLAIMER: The two projects; 
                        jack in the box website and
                        recruitment website were NOT
                        designed by me. I merely re-wrote 
                        the websites from scratch for learning 
                        purposes. The credit for designing these two
                        websites goes to the &nbsp;
                        <a href="https://investors.jackinthebox.com/home/default.aspx" target="_blank" className={styles.links}>
                            Jack in the box company
                        </a>
                        &nbsp;
                        and 
                        &nbsp;
                        <a href="https://nicepage.com/website-templates/preview/resume-page-525132?device=desktop" target="_blank" className={styles.links}>
                            nicepage.com
                        </a>
                </div>
                <div className={styles.footerBlackBox}></div>
            </div>
        </section>
        )
}

export default ProjectsPage;