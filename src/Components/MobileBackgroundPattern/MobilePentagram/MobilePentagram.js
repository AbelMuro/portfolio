import React from 'react';
import TechIcon from './TechIcon';
import * as styles from './styles.module.css';

function MobilePentagram() {
    return( 
            <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                <defs>
                    <filter id='glowEffectPentagramOuterCircles' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                    </filter>  
                    <filter id='glowEffectPentagramInnerCircles' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                    </filter>  
                    <filter id='glowEffectPentagramRect' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                    </filter>  
                </defs>

                <g className={styles.group}>                        
                        <circle 
                            id="path695"
                            cx={150.95853}
                            cy={115.17852}
                            r={14.348076}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.56101}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={300}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'react'} x={149.8} y={103.5} size={'2'} scrollThresholds={[3000, 3100]}/>
                        <circle 
                            id="path697"
                            cx={150.71886}
                            cy={104.37801}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'node'} x={158.61783 - 1.1} y={107.42867 - 1} size={'2.3'} scrollThresholds={[3300, 3400]}/>
                        <circle
                            id="path702"
                            cx={158.61783}
                            cy={107.42867}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'express'} x={161.7774 - 1.4} y={114.64666 - 1.5} size={'3.1'} scrollThresholds={[3600, 3700]}/>    
                        <circle 
                            id="path696"
                            cx={161.7774}
                            cy={114.64666}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />              
                        <TechIcon name={'vue'} x={159.01715 - 1.1} y={122.11411 - 1.2} size={'2.3'} scrollThresholds={[3900, 4000]}/>                         
                        <circle 
                            id="path700-2"
                            cx={159.01715}
                            cy={122.11411}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'mySQL'} x={151.39981 - 1.4} y={125.92314 - 1.4} size={'3.1'} scrollThresholds={[4200, 4300]}/>
                        <circle 
                            id="path701"
                            cx={151.39981}
                            cy={125.92314}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'next'} x={142.73816 - 1.5} y={122.13708 - 1.7} size={'3.3'} scrollThresholds={[4500, 4600]}/>
                        <circle 
                            id="path700"
                            cx={142.73816}
                            cy={122.13708}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'mongoDB'} x={140.04163 - 2.3} y={114.70116 - 2} size={'4'} scrollThresholds={[4800, 4900]}/>
                        <circle 
                            id="path699"
                            cx={140.04163}
                            cy={114.70116}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        <TechIcon name={'framermotion'} x={143.03781 - 1.65} y={107.51036 - 1.6} size={'3.5'} scrollThresholds={ [5100, 5200]}/>                            
                        <circle 
                            id="path698"
                            cx={143.03781}
                            cy={107.51036}
                            r={1.6746536}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.334931}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeDasharray={10.5194}
                            strokeDashoffset={0}
                            strokeOpacity={1}
                            />
                        {/*<AnimateTechTitles x={144.39165 + 6.50} y={108.76334 + 5.3}/> */ }                    
                        <rect 
                            id="rect704"
                            x={144.39165}
                            y={108.76334}
                            width={13.409038}
                            height={12.420458}
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.167469}
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeOpacity={1}
                            />         
                        <path
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform='translate(120, 85), scale(0.2)'
                            d="m 150.67604,106.23255 46.73045,45.2844 -43.10325,43.6851 -46.7305,-45.2844 z"
                            id="rect704-3-9-6"
                            />                 
                </g>   
        </svg>
        )
}

export default MobilePentagram