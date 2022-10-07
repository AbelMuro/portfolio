import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import abelImage from './images/random image.webp';
import CircularProgress from '@mui/material/CircularProgress';

function HomePage() {
    const [loading, setLoading] = useState(true);


    const handleEnter = (e) => {
        let blackBox = e.target.nextElementSibling;
        blackBox.style.transform = 'rotate(10deg)';
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
                <img src={abelImage} className={styles.abelImage} onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
                <div className={styles.blackBoxImage}></div>
            </div>
        </section>
    )
}

export default HomePage;