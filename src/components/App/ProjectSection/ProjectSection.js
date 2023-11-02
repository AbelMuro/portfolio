import React from 'react';
import Project from './Project';
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
            <Project href="https://front-end-audiophile-website.netlify.app/" src={images["audiophile"]} projectTitle="Audiophile Website"/>
            <Project href="https://designo-website-front-end.netlify.app/" src={images["designoWebsite"]} projectTitle="Designo Website"/>               
            <Project href="https://connect-four-game-app.netlify.app" src={images["connectFourGame"]} projectTitle="Connect Four Game"/>
            <Project href="https://manage-landing-website.vercel.app/" src={images["manageLandingPage"]} projectTitle="Manage Landing Webpage"/>  
            <Project href="https://easy-bank-website-front.netlify.app/" src={images["easybankWebpage"]} projectTitle="Easy Bank Webpage"/>  
            <Project href="https://pay-api-front-end-mentor.netlify.app/" src={images["payApiWebsite"]} projectTitle="Pay API Website"/>  
            <Project href="https://space-tourism-front-end.netlify.app/" src={images["spaceTourism"]} projectTitle="Space Tourism Website"/>           
            <Project href="https://url-shortening-web-app-front-end.netlify.app/" src={images["shortenLinkApp"]} projectTitle="Shorten Link App"/>  
            <Project href="https://myteam-website-front-end.netlify.app/" src={images['myteamWebsite']} projectTitle='MyTeam Website'/>
            <Project href="https://markdown-editor-app-front-end.netlify.app/" src={images["markdownEditorApp"]} projectTitle="Markdown Editor App"/>    
            <Project href="https://clock-app-front-end.netlify.app" src={images["clockApp"]} projectTitle="Clock App"/>         
            <Project href="https://world-view-app.netlify.app/" src={images["worldViewApp"]} projectTitle="World View App"/>         
            <Project href="https://food-dasher-app.netlify.app" src={images["food dasher app"]} projectTitle="Food Dasher App"/>
            <Project href="https://daily-horoscopess.netlify.app/" src={images["horoscopeApp"]} projectTitle="Daily Horoscope App"/> 
            <Project href="https://tic-tac-toe-abel.netlify.app" src={images["ticTacToeGame"]} projectTitle="Tic Tac Toe Game"/>
            <Project href="https://entertainment-app-front-end.netlify.app/user/home" src={images["entertainmentApp"]} projectTitle="Entertainment App"/>
            <Project href="https://github-user-app-one.vercel.app/" src={images["githubUserApp"]} projectTitle="Github User Search App"/>
            <Project href="https://dev-jobs-app-front.netlify.app/" src={images["devJobsApp"]} projectTitle="Dev Jobs App"/>
            <Project href="https://link-sharing-eqf6ito7z-abelmuro.vercel.app/" src={images["linkSharingApp"]} projectTitle="Link Sharing App"/>
            <Project href="https://age-calculator-app-ashy.vercel.app/" src={images["ageCalculatorApp"]} projectTitle="Age Calculator App"/>
            <Project href="https://front-end-invoice-app.netlify.app/" src={images["invoiceApp"]} projectTitle="Invoice Management App"/>   
            <Project href="https://todo-app-fawn-eight.vercel.app/" src={images["secondTodoApp"]} projectTitle="Todo App"/>    
            <Project href="https://tip-calculator-abel.netlify.app/" src={images["tipCalculatorApp"]} projectTitle="Tip Calculator App"/>    
            <Project href="https://credit-card-app-front.netlify.app/" src={images["creditCardApp"]} projectTitle="Credit Card App"/>                  
            <Project href="https://photosnap-front-end.netlify.app/" src={images["photosnapWebsite"]} projectTitle="Photosnap Website"/>
            <Project href="https://kick-ass-weather-app.netlify.app/" src={images["weatherApp"]} projectTitle="Weather App"/>
            <Project href="https://ip-address-app-front-end.netlify.app/" src={images["ipAddressTrackerApp"]} projectTitle="IP Address Tracker App"/>
            <Project href="https://my-dictionaryy-app.netlify.app/" src={images["dictionaryApp"]} projectTitle="Dictionary App"/>
            <Project href="https://dark-pink-mastercard.netlify.app" src={images["dark pink mastercard"]} projectTitle="Dark Pink Mastercard"/>
            <Project href="https://solar-systems-website.netlify.app" src={images["solarSystemWebsite"]} projectTitle="Solar Systems Website"/>
            <Project href="https://instant-chatter-box.netlify.app/" src={images["instantChatterBox"]} projectTitle="Instant Chatter Box App"/>
            <Project href="https://jack-in-the-box-clone.netlify.app" src={images["jack in the box clone"]} projectTitle="Jack In The Box Website"/>
            <Project href="https://sunnyside-agency-webpage-front-end.netlify.app/" src={images["sunnysideWebsite"]} projectTitle="Sunnyside Agency Website"/>
            <Project href="https://crowdfunding-product-webpage.netlify.app/" src={images["crowdfundingWebpage"]} projectTitle="Crowdfunding Webpage"/>
            <Project href="https://news-media-website-front-end.netlify.app/" src={images["newsWebsite"]} projectTitle="News Website"/>
            <Project href="https://recruitment-website-mockup.netlify.app" src={images["recruitmentAgency"]} projectTitle="Recruitment Agency Website"/>
            <Project href="https://memory-game-abel.netlify.app/" src={images["memoryGame"]} projectTitle="Memory Game"/>
            <Project href="https://sky-lunar-designs.netlify.app/" src={images["skyLunarDesigns"]} projectTitle="Sky Lunar Designs Website"/>            
            <Project href="https://employment-management.netlify.app/" src={images["employeeManagementApp"]} projectTitle="Employee Management App"/>
            <Project href="https://my-kanto-pokedex.netlify.app/" src={images["pokedexApp"]} projectTitle="Pokedex App"/>
            <Project href="https://calculator-buddy.netlify.app/" src={images["calculatorApp"]} projectTitle="Calculator App"/>
            <Project href="https://crypto-coins-currency.netlify.app/" src={images["cryptoCurrencyApp"]} projectTitle="Crypto Currency App"/>
            <Project href="https://multi-step-form-subscription.netlify.app/" src={images["multiFormApp"]} projectTitle="Multi Step Form App"/>
            <Project href="https://country-app-data.netlify.app/" src={images["countryApp"]} projectTitle="Countries Data App"/> 
            <Project href="https://product-feedback-front-end.netlify.app/" src={images["productFeedbackApp"]} projectTitle="Product Feedback App"/>
            <Project href="https://rock-paper-scissors-lizard-spock1.netlify.app/" src={images["rockPaperScissorsApp"]} projectTitle="Rock, Paper, Scissors App"/>
            <Project href="https://kanban-task-manager-front-end.netlify.app/" src={images["todoApp"]} projectTitle="Kanban Todo App"/>

            <div className={styles.disclaimerContainer}>
                <h1 className={styles.disclaimerTitle}>
                    DISCLAIMER
                </h1>
                <p className={styles.disclaimerDesc}>
                    The following projects; Jack in the box website, 
                    Recruitment Agency website, Audiophile website, 
                    Multi-Step form app, Countries Data app, Designo website,
                    Product Feedback app, Space Tourism website, Rock Paper Scissors App  
                    were NOT designed by me. I merely re-wrote the websites 
                    from scratch for learning purposes. The credit for 
                    designing these websites goes to 
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