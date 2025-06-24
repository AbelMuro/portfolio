import React, {useEffect} from 'react';
import icons from './icons';
import {motion, useAnimationControls} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to finish this component's animation and
    i also want to create a new glow effect via the filter element in svg
*/

function AnimateBackground() {
    const controlFirstCloud = useAnimationControls();

    const animateFirstCloud = async () => {
        await controlFirstCloud.start({height: '200px', top: '100px'});
    }

    useEffect(() => {
        animateFirstCloud();
    }, [])

    return(
        <section className={styles.container}>
            <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="smokeEffect">
                        <feGaussianBlur stdDeviation={5}/>
                    </filter>
                </defs>
            </svg>
            <motion.div 
                className={styles.smoke} 
                initial={{width: '100px'}}
                animate={controlFirstCloud}
                transition={{duration: 1.4, ease: 'linear'}}
                style={{filter: 'url(#smokeEffect)'}}
                />
        </section>
    )   
}

export default AnimateBackground;