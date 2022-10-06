import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import abelImage from './images/random image.webp';
import CircularProgress from '@mui/material/CircularProgress';

function HomePage() {
    const [loading, setLoading] = useState(true);


    const handleHover = (e) => {
        let blackBox = e.target.querySelector("." + styles.greyBox);
        blackBox.style
    }



    useEffect(() => {
        setTimeout(() => {
            setLoading(false) 
        }, 400)
    },[])


    return(
        loading ? <CircularProgress className={styles.loadingIcon}/> :
        <section className={styles.container}> 
            <div className={styles.boxContainer} onHover={handleHover}>
                <div className={styles.greyBox}>
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

            <div className={styles.greyImageContainer}>
                <img src={abelImage} className={styles.abelImage}/>
            </div>
        </section>
    )
}

export default HomePage;