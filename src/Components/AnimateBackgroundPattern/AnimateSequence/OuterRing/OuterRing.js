import React, {useState} from 'react'
import * as styles from './styles.module.css';
import {LinearRing} from '~/Transitions';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import images from './images';


function OuterRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [200, 1400], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1000)
            setMount(false)
        else
            setMount(true)
    })


    return(

        <AnimatePresence>
            {
                mount &&
                <motion.div      
                        id='outer ring'   
                        className={styles.container}                
                        exit={{opacity: 0}}
                        >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={styles.svg} 
                        viewBox={"0 0 206.40488 206.40488"} 
                        >
                        <defs>
                            <filter id='glowEffectOuterRing' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                        </defs>
                        <motion.g     
                            initial={{rotate: 0, opacity: 1}} 
                            animate={{rotate: [0, 360], transition: {repeat: Infinity, duration: 18.9, ease: 'linear', delay: 1}}} 
                            style={{scale: smoothScale}}
                            className={styles.group}>
                                <motion.image
                                    x={31.5}
                                    y={31}
                                    filter={'url(#glowEffectOuterRing)'}
                                    href={images['outerRing']}
                                    className={styles.outerRing}
                                />                            
                        </motion.g>

                    </svg>

               </motion.div>     
            }                    
        
        </AnimatePresence>
    )
}

export default OuterRing;