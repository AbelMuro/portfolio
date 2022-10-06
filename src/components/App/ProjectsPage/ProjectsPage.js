import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import images from './images';

function ProjectsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false) 
        }, 400)
    },[])
    return(
        loading ? <CircularProgress className={styles.loadingIcon}/> :
        <section className={styles.container}>
            <div className={styles.greyBox}>
                <h1 className={styles.title}>
                    My Projects
                </h1>
                <p className={styles.desc}>
                    I have used the following frameworks/libraries
                    for my projects below: React, Redux, GSAP, JQuery,
                    and SASS.
                </p>                
            </div>

            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["darkPinkMasterCard"]} className={styles.projectImage}/>
                </a>
                <p className={styles.projectTitle}>
                    Solar Systems Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["foodDasherApp"]} className={styles.projectImage}/>  
                </a>
                <p className={styles.projectTitle}>
                    Food Dasher App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["jackInTheBox"]} className={styles.projectImage}/>
                </a>
                <p className={styles.projectTitle}>
                    Sky Lunar Designs Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["recruitmentWebsite"]} className={styles.projectImage}/>                    
                </a>
                <p className={styles.projectTitle}>
                    Dark Pink Mastercard Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["solarSystemWebsite"]} className={styles.projectImage}/>                    
                </a>

                <p className={styles.projectTitle}>
                    Recruitment Website Mockup
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink}>
                    <img src={images["skyLunarDesigns"]} className={styles.projectImage}/>                    
                </a>
                <p className={styles.projectTitle}>
                    Jack In The Box Website Clone
                </p>
            </div>

            <div className={styles.disclaimer}>
                DISCLAIMER: The two projects; 
                jack in the box website and
                recruitment website were NOT
                designed by me. I merely re-wrote 
                the websites from scratch for learning 
                purposes. The credit for designing these two
                websites goes to the Jack in the box company
                and nicepage.com
            </div>


        </section>
        )
}

export default ProjectsPage;