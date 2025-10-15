import React, {useEffect, useState} from 'react';
import projectImages from '~/assets/ProjectData/images'
import OuterMostRing from '~/Components/AnimateBackgroundPattern/AnimateSequence/OuterMostRing/images';
import OuterRing from '~/Components/AnimateBackgroundPattern/AnimateSequence/OuterRing/images';
import InnerRing from '~/Components/AnimateBackgroundPattern/AnimateSequence/InnerRing/images';
import CenterRing from '~/Components/AnimateBackgroundPattern/AnimateSequence/CenterRing/images';
import InnerMostRing from '~/Components/AnimateBackgroundPattern/AnimateSequence/InnerRing/images';
import OuterMostSquare from '~/Components/AnimateBackgroundPattern/AnimateSequence/AnimateSquarePattern/OuterMostSquare/images';
import OuterSquare from '~/Components/AnimateBackgroundPattern/AnimateSequence/AnimateSquarePattern/OuterSquare/images';
import InnerSquare from '~/Components/AnimateBackgroundPattern/AnimateSequence/AnimateSquarePattern/InnerSquare/images';
import InnerMostTriangle from '~/Components/AnimateBackgroundPattern/AnimateSequence/AnimateSquarePattern/InnerSquare/images';
import contactMeIcons from '~/Components/ContactMeSection/icons';
import assets from '~/assets/icons';
import * as styles from './styles.module.css';

function ProgressBar({setMount}){
    const [percent, setPercent] = useState(0);

    const displayMessage = () => {
        if(percent < 30)
            return 'Hold on... let me think.';
        else if(percent >= 30 && percent < 60)
            return 'Dusting off that brain of mine..';
        else if(percent >= 60 && percent <= 99)
            return 'Almost done..'
        else 
            return "I'm finished!";
    }

    const removeScrollBar = () => {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    }

    const restoreScrollBar = () => {
        const body = document.querySelector('body');
        body.style.overflow = '';
    }


    const preloadImages = () => {
        const allImages = [
            ...Object.entries(projectImages), 
            ...Object.entries(OuterMostRing), 
            ...Object.entries(OuterRing),
            ...Object.entries(InnerRing),
            ...Object.entries(CenterRing),
            ...Object.entries(InnerMostRing),
            ...Object.entries(OuterMostSquare),
            ...Object.entries(OuterSquare),
            ...Object.entries(InnerSquare),
            ...Object.entries(InnerMostTriangle),
            ...Object.entries(assets),
            ...Object.entries(contactMeIcons),
        ];
        const n = allImages.length;

        const promises = allImages.map(([name, src], i) => {
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.src = src;
                image.onload = () => {
                    resolve();
                    setTimeout(() => setPercent((prev) => prev < 100 ? Math.ceil(prev + ((1/n) * 100)) : 100), i * 100)
                }
                image.onerror = () => {
                    reject(new Error(`${name} image couldn't be loaded`));
                }
            })
        })

        return Promise.all(promises);
    }

    useEffect(() => {
        removeScrollBar();
        preloadImages()
            .then(() => {
                console.log('All images have been pre-loaded');
            })
            .catch((error) => {
                const message = error.message;
                console.error('Error occurred while pre-loading images', message);
            })
    }, [])


    useEffect(() => {
        if(percent >= 100)
            setTimeout(() => {
                restoreScrollBar();
                setMount(false);
            }, 1000);
    }, [percent])


    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo(0, 0);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    }, [])

    return(
        <div className={styles.content}>
            <h2 className={styles.title}>
               {displayMessage()}
            </h2>
            <div className={styles.progress}>
                <div className={styles.progress_bar} style={{width: `${Math.ceil(percent)}%`}}></div>
            </div>        
            <h3 className={styles.progress_percent}>
                {`Loading [${percent}]%`}
            </h3>  
        </div>

    )
}

export default ProgressBar;