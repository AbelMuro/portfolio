import React, {useState} from 'react';
import {LinearRing} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to finish optimizing this component with its scale animation
    then i will need to find another glow effect that is more optimized for safari

    oh and dont forget to translate the pentagram design so that its more centered
*/


function InnerMostLines() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [600, 1800], [1, 2.3])
    const smoothScale = useSpring(scale, LinearRing);
    const transform = useMotionTemplate`translate(74px, 75px) scale(${smoothScale})`

    const strokeDashoffset = useTransform(scrollY, [2000, 3000], [0, 60]);
    const smoothDashoffset = useSpring(strokeDashoffset, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 3700)
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
                style={{scale: smoothScale}}
                exit={{opacity: 0}}
                >
                <svg className={styles.svg} viewBox={"0 0 200 200"}>
                    <motion.g style={{transform}}>
                    { /* north line */ }
                        <motion.path 
                            id="path1429"
                            d="M 25.7978,0.219 L 25.7978,11.579"
                            fill="none"
                            fillOpacity={1}
                            stroke="#0400ff"
                            strokeWidth={0.6}
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeOpacity={1}
                            style={{strokeDashoffset: smoothDashoffset, transform: 'translate(0.5px, -3px)'}} 
                            strokeDasharray='60' 
                            />
                        {/* east line*/}
                        <motion.path 
                            id="path1429-7"
                            d="M 52.6008,25.849 L 40,25.9983"
                            fill="none"
                            fillOpacity={1}
                            stroke="#0400ff"
                            strokeWidth={0.6}
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            strokeMiterlimit={1}
                            strokeOpacity={1} 
                            style={{strokeDashoffset: smoothDashoffset, transform: 'translate(1px, -1px)'}} 
                            strokeDasharray='60' 
                        />
                        {/* south line*/}
                        <motion.path 
                            id="path1429-7-8"
                            d="M 25.3058,51.8473 L 25.2023,39"
                            fill="none"
                            fillOpacity={1}
                            stroke="#0400ff"
                            strokeWidth={0.6}
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeOpacity={1}
                            style={{strokeDashoffset: smoothDashoffset, transform: 'translate(1.5px, 0.5px)'}} 
                            strokeDasharray='60' 
                            />
                        {/* west line*/}
                        <motion.path 
                            id="path1429-5"
                             d="M 0.4808,26.0143 L 13.1808,26.0005"
                            fill="none"
                            fillOpacity={1}
                            stroke="#0400ff"
                            strokeWidth={0.6}
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            strokeOpacity={1}
                            style={{strokeDashoffset: smoothDashoffset, transform: 'translate(-1.5px, -1.5px)'}} 
                            strokeDasharray='60' />

                    </motion.g>

                    </svg>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default InnerMostLines;