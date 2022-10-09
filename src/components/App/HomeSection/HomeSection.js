import React from 'react';
import styles from './styles.module.css';
import backgroundVideo from './videos/purple-smoke-video.mp4';

function HomeSection() {
    return(
        <section className={styles.homeContainer} id={"home"}>
            <div className={styles.introBox}>
                <h1 className={styles.introTitle}>Hello,<br/> I'm Abel</h1>
                <p className={styles.introDesc}>Web Developer</p>
                <p className={styles.credit}>
                    Background Image from 
                    <a target="_blank" href="https://gfycat.com/obvioustheseamericanbadger" className={styles.creditLink}> Gfycat</a>                    
                </p>
            </div>
        </section>
    )
}
export default HomeSection;


//rememebr to write the video configuration into your notes for webpack
<div className={styles.videoContainer}>
    <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4"/>
        browser doesnt support video tag
    </video>
</div>