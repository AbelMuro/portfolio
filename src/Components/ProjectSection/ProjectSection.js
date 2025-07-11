import React from 'react';
import AnimateVerticalLine from './AnimateVerticalLine';
import AnimateDiagonalLine from './AnimateDiagonalLine';
import DisplayProject from './DisplayProject';
import * as styles from './styles.module.css';

function ProjectSection() {
    return(
        <section className={styles.container}>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Audiophile Website'} src={'audiophile'} href={"https://front-end-audiophile-website.netlify.app/"}/>
                <DisplayProject projectTitle={'Designo Website'} src={'designoWebsite'} href={"https://designo-website-front-end.netlify.app/"}/> 
                <DisplayProject projectTitle={'Connect Four Game'} src={'connectFourGame'} href={"https://connect-four-game-app.netlify.app"}/>                 
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Hang-man Game'} src={'hangmanGame'} href={"https://hangman-game-front-end.netlify.app/"}/>    
                <DisplayProject projectTitle={'Online Chess App'} src={'onlineChessApp'} href={"https://world-class-chess.netlify.app/"}/>    
                <DisplayProject projectTitle={'Manage Landing Webpage'} src={'manageLandingPage'} href={"https://manage-landing-website.vercel.app/"}/>        
            </div>
            <div className={styles.project}>
                <DisplayProject projectTitle={'Easy Bank Webpage'} src={'easybankWebpage'} href={"https://easy-bank-website-front.netlify.app/"}/>     
            </div>


            <AnimateVerticalLine row={'1/2'} column={'1/4'} scrollThresholds={[18500, 19000]}/>
            <AnimateDiagonalLine row={'2/3'} column={'1/3'} direction='west' scrollThresholds={[18900, 19400]}/>
            <AnimateDiagonalLine row={'2/3'} column={'2/4'} direction='east' scrollThresholds={[18900, 19400]}/>
            
        </section>
    )
}

export default ProjectSection;