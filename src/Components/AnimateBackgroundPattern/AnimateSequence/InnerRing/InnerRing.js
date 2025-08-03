import React, {useState} from "react";
import {LinearRing} from '~/Transitions';
import {motion, useScroll, AnimatePresence, useMotionValueEvent, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function InnerRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [600, 1800], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1500)
            setMount(false);
        else
            setMount(true);
    })


    return( 
        <AnimatePresence>
            {
                mount &&
                <motion.div
                    id='inner ring'
                    className={styles.container}
                    initial={scrollY.get() > 1400 && {opacity: 0}}
                    animate={scrollY.get() > 1400 && {opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.7}}}
                    >
                    <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                            <motion.image
                                x={50}
                                y={49}
                                initial={{rotate: 0}} 
                                animate={{rotate: [0, 360], transition: {repeat: Infinity, duration: 14.9, ease: 'linear', delay: 3}}} 
                                style={{scale: smoothScale}}
                                className={styles.ring}
                                href={images['innerRing']}/>                            
                    </svg>                    
                </motion.div>

            }
        </AnimatePresence>

    )
}

export default InnerRing;