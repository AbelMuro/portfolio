import React, {lazy, useState} from 'react';
const Project = lazy(() => import('./Project'));
import styles from './styles.module.css';
import images from './images';

function ProjectSection () {
    const [count, setCount] = useState(0);


    return(
        <section className={styles.container} id="projects">
            <div className={styles.titleBox}>
                <h1 className={styles.title}>
                    My Projects ({count})
                </h1>    
                <p className={styles.desc}>
                    I have used the following frameworks/libraries
                    for my projects; React, Redux, GSAP, JQuery, SASS,
                    bootstrap and MUI    
                </p>            
            </div>
            <Project href="https://front-end-audiophile-website.netlify.app/" src={images["audiophile"]} projectTitle="Audiophile Website" setCount={setCount}/>
            <Project href="https://designo-website-front-end.netlify.app/" src={images["designoWebsite"]} projectTitle="Designo Website" setCount={setCount}/>               
            <Project href="https://connect-four-game-app.netlify.app" src={images["connectFourGame"]} projectTitle="Connect Four Game" setCount={setCount}/>
            <Project href="https://hangman-game-front-end.netlify.app/" src={images["hangmanGame"]} projectTitle="Hang-man Game" setCount={setCount}/> 
            <Project href="https://manage-landing-website.vercel.app/" src={images["manageLandingPage"]} projectTitle="Manage Landing Webpage" setCount={setCount}/>  
            <Project href="https://easy-bank-website-front.netlify.app/" src={images["easybankWebpage"]} projectTitle="Easy Bank Webpage" setCount={setCount}/>  
            <Project href="https://pay-api-front-end-mentor.netlify.app/" src={images["payApiWebsite"]} projectTitle="Pay API Website" setCount={setCount}/>  
            <Project href="https://space-tourism-front-end.netlify.app/" src={images["spaceTourism"]} projectTitle="Space Tourism Website" setCount={setCount}/>       
            <Project href="https://planet-facts-front-end.netlify.app/" src={images["planetFactWebsite"]} projectTitle="Planet Fact Website" setCount={setCount}/>  
            <Project href="https://url-shortening-web-app-front-end.netlify.app/" src={images["shortenLinkApp"]} projectTitle="Shorten Link App" setCount={setCount}/>  
            <Project href="https://bookmarking-front-end.netlify.app/" src={images["bookmarkWebsite"]} projectTitle="Bookmark Website" setCount={setCount}/>
            <Project href="https://creative-single-page-website.netlify.app/" src={images["creativeWebsite"]} projectTitle="Creative Website" setCount={setCount}/>
            <Project href="https://myteam-website-front-end.netlify.app/" src={images['myteamWebsite']} projectTitle='MyTeam Website' setCount={setCount}/>
            <Project href="https://quiz-app-front-end-mentor.netlify.app/" src={images['quizApp']} projectTitle='Quiz App' setCount={setCount}/>
            <Project href="https://scoot-front-end.netlify.app/" src={images['scootWebsite']} projectTitle='Scoot Website' setCount={setCount}/>
            <Project href="https://new-calculator-front-end.netlify.app/" src={images['newCalculatorApp']} projectTitle='New Calculator App' setCount={setCount}/>
            <Project href="https://dine-restaurant-front-end.netlify.app/" src={images['dineRestaurantWebsite']} projectTitle='Dine Restaurant Website' setCount={setCount}/>
            <Project href="https://markdown-editor-app-front-end.netlify.app/" src={images["markdownEditorApp"]} projectTitle="Markdown Editor App" setCount={setCount}/>    
            <Project href="https://clock-app-front-end.netlify.app" src={images["clockApp"]} projectTitle="Clock App" setCount={setCount}/>         
            <Project href="https://world-view-videos.netlify.app/" src={images["worldViewApp"]} projectTitle="World View App" setCount={setCount}/>      
            <Project href="https://food-dasher-app-netlify.netlify.app/" src={images["food dasher app"]} projectTitle="Food Dasher App" setCount={setCount}/>
            <Project href="https://daily-horoscopess.netlify.app/" src={images["horoscopeApp"]} projectTitle="Daily Horoscope App" setCount={setCount}/> 
            <Project href="https://pomodoro-front-end-mentor.netlify.app/" src={images["pomodoroApp"]} projectTitle="Pomodoro App" setCount={setCount}/> 
            <Project href="https://tic-tac-toe-abel.netlify.app" src={images["ticTacToeGame"]} projectTitle="Tic Tac Toe Game" setCount={setCount}/>
            <Project href="https://entertainment-app-front-end.netlify.app" src={images["entertainmentApp"]} projectTitle="Entertainment App" setCount={setCount}/>
            <Project href="https://github-user-app-one.vercel.app/" src={images["githubUserApp"]} projectTitle="Github User Search App" setCount={setCount}/>
            <Project href="https://password-generator-front-end-mentor.netlify.app/" src={images["passwordGeneratorApp"]} projectTitle="Password Generator App" setCount={setCount}/>
            <Project href="https://dev-jobs-app-front.netlify.app/" src={images["devJobsApp"]} projectTitle="Dev Jobs App" setCount={setCount}/>
            <Project href="https://link-sharing-boqxtcz3a-abelmuro.vercel.app/" src={images["linkSharingApp"]} projectTitle="Link Sharing App" setCount={setCount}/>
            <Project href="https://age-calculator-app-ashy.vercel.app/" src={images["ageCalculatorApp"]} projectTitle="Age Calculator App" setCount={setCount}/>
            <Project href="https://arch-studio-website.netlify.app/" src={images['archStudio']} projectTitle='Arch Studio Website' setCount={setCount}/>
            <Project href="https://mortgage-calculator-front-end.netlify.app/" src={images['mortgageCalculator']} projectTitle='Mortgage Repayment Calculator' setCount={setCount}/>
            <Project href="https://galleria-front-end-mentor.netlify.app/" src={images['galleriaApp']} projectTitle='Galleria App' setCount={setCount}/>
            <Project href="https://front-end-invoice-app.netlify.app/" src={images["invoiceApp"]} projectTitle="Invoice Management App" setCount={setCount}/>   
            <Project href="https://todo-app-fawn-eight.vercel.app/" src={images["secondTodoApp"]} projectTitle="Todo App" setCount={setCount}/>    
            <Project href="https://tip-calculator-abel.netlify.app/" src={images["tipCalculatorApp"]} projectTitle="Tip Calculator App" setCount={setCount}/>    
            <Project href="https://credit-card-app-front.netlify.app/" src={images["creditCardApp"]} projectTitle="Credit Card App" setCount={setCount}/>                  
            <Project href="https://photosnap-front-end.netlify.app/" src={images["photosnapWebsite"]} projectTitle="Photosnap Website" setCount={setCount}/>
            <Project href="https://product-list-with-cart-front-end.netlify.app/" src={images["productListWithCartWebsite"]} projectTitle="Product List Website" setCount={setCount}/>
            <Project href="https://kick-ass-weather-app.netlify.app/" src={images["weatherApp"]} projectTitle="Weather App" setCount={setCount}/>
            <Project href="https://ip-address-app-front-end.netlify.app/" src={images["ipAddressTrackerApp"]} projectTitle="IP Address Tracker App" setCount={setCount}/>
            <Project href="https://my-dictionaryy-app.netlify.app/" src={images["dictionaryApp"]} projectTitle="Dictionary App" setCount={setCount}/>
            <Project href="https://dark-pink-mastercard.netlify.app" src={images["dark pink mastercard"]} projectTitle="Dark Pink Mastercard" setCount={setCount}/>
            <Project href="https://solar-system-website-gsap.netlify.app/" src={images["solarSystemWebsite"]} projectTitle="Solar Systems Website" setCount={setCount}/>
            <Project href="https://instant-chatter-box.netlify.app/" src={images["instantChatterBox"]} projectTitle="Instant Chatter Box App" setCount={setCount}/>
            <Project href="https://jack-in-the-box-clone.netlify.app" src={images["jack in the box clone"]} projectTitle="Jack In The Box Website" setCount={setCount}/>
            <Project href="https://sunnyside-agency-webpage-front-end.netlify.app/" src={images["sunnysideWebsite"]} projectTitle="Sunnyside Agency Website" setCount={setCount}/>
            <Project href="https://crowdfunding-product-webpage.netlify.app/" src={images["crowdfundingWebpage"]} projectTitle="Crowdfunding Webpage" setCount={setCount}/>
            <Project href="https://news-media-website-front-end.netlify.app/" src={images["newsWebsite"]} projectTitle="News Website" setCount={setCount}/>
            <Project href="https://recruitment-website-mockup.netlify.app" src={images["recruitmentAgency"]} projectTitle="Recruitment Agency Website" setCount={setCount}/>
            <Project href="https://memory-game-abel.netlify.app/" src={images["memoryGame"]} projectTitle="Memory Game" setCount={setCount}/>
            <Project href="https://sky-lunar-design.netlify.app/" src={images["skyLunarDesigns"]} projectTitle="Sky Lunar Designs Website" setCount={setCount}/>        
            <Project href="https://employment-management-application.netlify.app/" src={images["employeeManagementApp"]} projectTitle="Employee Management App" setCount={setCount}/>
            <Project href="https://my-kanto-pokedex.netlify.app/" src={images["pokedexApp"]} projectTitle="Pokedex App" setCount={setCount}/>
            <Project href="https://calculator-buddy.netlify.app/" src={images["calculatorApp"]} projectTitle="Calculator App" setCount={setCount}/>
            <Project href="https://crypto-coins-currency.netlify.app/" src={images["cryptoCurrencyApp"]} projectTitle="Crypto Currency App" setCount={setCount}/>
            <Project href="https://multi-step-form-subscription.netlify.app/" src={images["multiFormApp"]} projectTitle="Multi Step Form App" setCount={setCount}/>
            <Project href="https://country-app-data.netlify.app/" src={images["countryApp"]} projectTitle="Countries Data App" setCount={setCount}/> 
            <Project href="https://product-feedback-front-end.netlify.app/" src={images["productFeedbackApp"]} projectTitle="Product Feedback App" setCount={setCount}/>
            <Project href="https://rock-paper-scissors-lizard-spock1.netlify.app/" src={images["rockPaperScissorsApp"]} projectTitle="Rock, Paper, Scissors App" setCount={setCount}/>
            <Project href="https://kanban-task-manager-front-end.netlify.app/" src={images["todoApp"]} projectTitle="Kanban Todo App" setCount={setCount}/>
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