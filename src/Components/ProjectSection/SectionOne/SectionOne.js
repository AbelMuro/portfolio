import React from 'react';
import {useMediaQuery} from '~/Hooks';
import AllProjects from '../ProjectData';
import AnimateLine from '../AnimateLine';
import AnimateVerticalText from './AnimateVerticalText';
import AnimateCircle from './AnimateCircle';
import DisplayProject from '../DisplayProject';
import * as styles from './styles.module.css';

function SectionOne(){
    const [tablet] = useMediaQuery('(max-width: 940px)');


    return(
        <section className={styles.container}>
            {
                AllProjects.slice(0, 12).map((project) => {
                    const title = project.projectTitle;
                    const src = project.src;
                    const href = project.href;
                    return (
                        <div className={styles.project} key={title}>
                            <DisplayProject projectTitle={title} src={src} href={href}/>
                        </div>   
                    )
                })
            }
            <div className={styles.designText}>
                <AnimateVerticalText scrollThresholds={[18500, 19200]}/>
            </div>   
            <div className={styles.designLineOne}>
                <AnimateLine rotate={tablet ? 0 : 25} scrollThresholds={[18500, 18900]}/>
            </div>
            <div className={styles.designLineTwo}>
                <AnimateLine rotate={tablet ? 0 : -25} scrollThresholds={[18500, 18900]}/>
            </div>
            <div className={styles.designCircle}>
                <AnimateCircle/>
            </div>
        </section>
    )
}

export default SectionOne;