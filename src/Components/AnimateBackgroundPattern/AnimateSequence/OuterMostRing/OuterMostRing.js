import React, {useState} from 'react';
import {LinearRing} from '~/Transitions';
import {motion, useMotionValueEvent, useScroll, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function OuterMostRing(){
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1200], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 600)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='outer most ring'
                    className={styles.container}
                    exit={{opacity: 0}}
                    >
                    <svg className={styles.container} viewBox="0 0 206 205" >
                        <motion.image
                            x={-7.5} 
                            y={-7} 
                            initial={{opacity: 1, rotate: 0}} 
                            animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 31, ease: 'linear'}}} 
                            style={{scale: smoothScale}}
                            className={styles.ring} 
                            href={images['outerMostRing']} 
                        />                            
                    </svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default OuterMostRing;
