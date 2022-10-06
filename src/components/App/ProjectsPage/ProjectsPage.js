import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';

function ProjectsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false) 
        }, 1000)
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

            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Solar Systems Website
                </p>
            </a>
            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Food Dasher App
                </p>
            </a>
            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Sky Lunar Designs Website
                </p>
            </a>
            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Dark Pink Mastercard Website
                </p>
            </a>
            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Recruitment Website Mockup
                </p>
            </a>
            <a className={styles.projectLink}>
                <img src="" className={styles.projectImage}/>
                <p className={styles.projectTitle}>
                    Jack In The Box Website Clone
                </p>
            </a>

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