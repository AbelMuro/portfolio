import React from 'react';
import styles from './styles.module.css';
import images from './images';

function ProjectSection () {
    return(
        <section className={styles.container} id="projects">
            <div className={styles.titleBox}>
                <h1 className={styles.title}>
                    My Projects
                </h1>    
                <p className={styles.desc}>
                    I have used the following frameworks/libraries
                    for my projects; React, Redux, GSAP, JQuery, SASS,
                    bootstrap and MUI    
                </p>            
            </div>

            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://sky-lunar-designs.netlify.app/"}>
                    <img className={styles.projectImage} src={images["skyLunarDesigns"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Sky Lunar Designs Website
                </p>
            </div>

            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://dark-pink-mastercard.netlify.app"}>
                   <img className={styles.projectImage} src={images["dark pink mastercard"]}/> 
                </a>   
                <p className={styles.projectTitle}>
                    Dark Pink Mastercard Website
                </p>
            </div>


            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://solar-systems-website.netlify.app"}>
                    <img className={styles.projectImage} src={images["solarSystemWebsite"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Solar Systems Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://jack-in-the-box-clone.netlify.app"}>
                    <img className={styles.projectImage} src={images["jack in the box clone"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Jack In The Box Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://recruitment-website-mockup.netlify.app"}>
                    <img className={styles.projectImage} src={images["recruitmentAgency"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Recruitment Agency Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://food-dasher-app.netlify.app"}>
                    <img className={styles.projectImage} src={images["food dasher app"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Food Dasher App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://world-view-app.netlify.app/"}>
                    <img className={styles.projectImage} src={images["worldViewApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    World View App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://instant-chatter-box.netlify.app/"}>
                    <img className={styles.projectImage} src={images["instantChatterBox"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Instant Chatter Box App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://employment-management.netlify.app/"}>
                    <img className={styles.projectImage} src={images["employeeManagementApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Employee Management App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://my-kanto-pokedex.netlify.app/"}>
                    <img className={styles.projectImage} src={images["pokedexApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Pokedex App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://calculator-buddy.netlify.app/"}>
                    <img className={styles.projectImage} src={images["calculatorApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Calculator App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://crypto-coins-currency.netlify.app/"}>
                    <img className={styles.projectImage} src={images["cryptoCurrencyApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Crypto Currency App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://kick-ass-weather-app.netlify.app/"}>
                    <img className={styles.projectImage} src={images["weatherApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Weather App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://daily-horoscopess.netlify.app/"}>
                    <img className={styles.projectImage} src={images["horoscopeApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Daily Horoscope App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://my-dictionaryy-app.netlify.app/"}>
                    <img className={styles.projectImage} src={images["dictionaryApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Dictionary App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://multi-step-form-subscription.netlify.app/"}>
                    <img className={styles.projectImage} src={images["multiFormApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Multi Step Form App
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://front-end-audiophile-website.netlify.app/"}>
                    <img className={styles.projectImage} src={images["audiophile"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Audiophile Website
                </p>
            </div>
            <div className={styles.projectContainer}>
                <a className={styles.imageLink} target="_blank" href={"https://country-app-data.netlify.app/"}>
                    <img className={styles.projectImage} src={images["countryApp"]}/>
                </a>
                <p className={styles.projectTitle}>
                    Countries Data App
                </p>
            </div>











            <div className={styles.disclaimerContainer}>
                <h1 className={styles.disclaimerTitle}>
                    DISCLAIMER
                </h1>
                <p className={styles.disclaimerDesc}>
                    The following projects; Jack in the box website, 
                    Recruitment Agency website, Audiophile website, 
                    Multi-Step form app, and Countries Data app were NOT 
                    designed by me. I merely re-wrote the websites 
                    from scratch for learning purposes. The credit for 
                    designing these two websites goes to the 
                    &nbsp;
                    <a target={"_blank"} href={"https://investors.jackinthebox.com/our-company/about-us/"} className={styles.disclaimerLink}>
                        Jack In The Box Company
                    </a>
                    ,&nbsp;
                    <a target={"_blank"} href={"https://nicepage.com/st/525132/resume-page-website-template"} className={styles.disclaimerLink}>
                        nicepage.com
                    </a>
                    ,&nbsp;
                    <a target={"_blank"} href={"https://www.frontendmentor.io/home"} className={styles.disclaimerLink}>
                        frontendmentor.io
                    </a>
                </p>
            </div>

        </section>
    )
}

export default ProjectSection;