import React, {useState} from 'react';
import {LinearRing} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';


function InnerMostRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    
    const scale = useTransform(scrollY, [800, 2000], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);
    const transform = useMotionTemplate`translate(76.5px, 75px) scale(${smoothScale})`

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1800)
            setMount(false);
        else
            setMount(true);
    })


    return(
        <AnimatePresence>
            {mount &&
            <motion.div 
                id='inner most lines'
                className={styles.container}
                initial={scrollY.get() > 1700 && {opacity: 0}}
                animate={scrollY.get() > 1700 && {opacity: 1}}
                exit={{opacity: 0}}
                >
                <svg className={styles.svg} viewBox={"0 0 200 200"}>
                    <motion.image
                        x={65}
                        y={65}
                        href={images['glowEffect']}
                        className={styles.glowEffect}
                        style={{scale: smoothScale}}
                        />  

                    <motion.g 
                        initial={{rotate: 0}}
                        animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 16, ease: 'linear', delay: 4}}} 
                        >
                        <motion.image 
                            href={images['innerMostRing']}
                            style={{transform}}
                            className={styles.ring}
                            />                      
                    </motion.g>


                </svg>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default InnerMostRing;