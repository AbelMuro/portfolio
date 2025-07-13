import React from 'react';
import {useMediaQuery} from '~/Hooks';
import AnimateLine from './AnimateLine';
import AnimateVerticalText from './AnimateVerticalText';
import AnimateCircle from './AnimateCircle';
import DisplayProject from './DisplayProject';
import * as styles from './styles.module.css';

/* 
    this is where i left off, im still debating if i want to keep the diagonal lines being drawn in this component
    I may need to think of a better design

*/

function ProjectSection() {
    const [tablet] = useMediaQuery('(max-width: 940px)');
    const [mobile] = useMediaQuery('(max-width: 500px)');

    return(
        <section className={styles.container}>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Audiophile Website'} src={'audiophile'} href={"https://front-end-audiophile-website.netlify.app/"}/>
            </div>   
            <div className={styles.project}>
                <DisplayProject projectTitle={'Designo Website'} src={'designoWebsite'} href={"https://designo-website-front-end.netlify.app/"}/> 
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Online Chess App'} src={'onlineChessApp'} href={"https://world-class-chess.netlify.app/"}/>    
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Connect Four Game'} src={'connectFourGame'} href={"https://connect-four-game-app.netlify.app"}/>      
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Hang-man Game'} src={'hangmanGame'} href={"https://hangman-game-front-end.netlify.app/"}/>  
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Easy Bank Webpage'} src={'easybankWebpage'} href={"https://easy-bank-website-front.netlify.app/"}/>
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Manage Landing Webpage'} src={'manageLandingPage'} href={"https://manage-landing-website.vercel.app/"}/> 
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Note Taking App'} src={'noteTakingApp'} href={"https://note-taking-app-front-end.netlify.app/"}/>
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Personal Finance App'} src={'personalFinanceApp'} href={"https://personal-finance-app-front-end.netlify.app/"}/>
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Pay API Website'} src={'payApiWebsite'} href={"https://pay-api-front-end-mentor.netlify.app/"}/>
            </div>
            <div className={styles.designText}>
                <AnimateVerticalText scrollThresholds={[18500, 19200]}/>
            </div>   
            <div className={styles.designLineOne}>
                <AnimateLine rotate={tablet ? 0 : 25} scrollThresholds={[18500, 18900]}/>
            </div>
            <div className={styles.designLineTwo}>
                <AnimateLine rotate={tablet ? 0 : -25} scrollThresholds={[18500, 18900]}/>
            </div>
            {!mobile && <div className={styles.designCircle}>
                <AnimateCircle/>
            </div>}
        </section>
    )
}

export default ProjectSection;