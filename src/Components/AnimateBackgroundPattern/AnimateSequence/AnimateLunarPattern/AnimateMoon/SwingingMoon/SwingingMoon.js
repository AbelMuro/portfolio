import React, {useEffect} from 'react';
import {LinearMoon} from '~/Transitions';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useAnimationControls} from 'framer-motion';
import * as styles from './styles.module.css';


function SwingingMoon() {
    const {scrollY} = useScroll();
    const controlSwing = useAnimationControls();

    const scale = useTransform(scrollY, [14000, 14500], [0, 1]);
    const smoothScale = useSpring(scale, LinearMoon);
    const transform = useMotionTemplate`translate(-32px, -0.3px) scale(${smoothScale})`

    const strokeDashoffsetHangingMoon = useTransform(scrollY, [16500, 17000], [98.76, 0]);
    const smoothStrokeDashoffsetHangingMoon = useSpring(strokeDashoffsetHangingMoon, LinearMoon);

    const strokeDashoffsetLine = useTransform(scrollY, [16300, 16500], [37, 0]);
    const smoothStrokeDashoffsetLine = useSpring(strokeDashoffsetLine, LinearMoon)

    const fillHangingMoon = useTransform(scrollY, [17300, 17700], ['#0400ff00', '#0400ff']);


    useEffect(() => {
        controlSwing.start({rotate: [0, 15, 0, -15, 0], transition: {duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'linear'}});
    }, []);


    return(
        <motion.g className={styles.parent_group} initial={{rotate: 0}} animate={controlSwing}>
            <motion.g style={{transform}}>
                <motion.g 
                    className={styles.group}                 
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    filter={'url(#glowEffectSmallMoon)'}
                    > 
                    <motion.path
                        id="path12"
                        d="m 137.53809,98.464359 v 36.68025"
                        fill="none"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeDasharray={37}
                        strokeOpacity={1}
                        style={{strokeDashoffset: smoothStrokeDashoffsetLine, transform: 'translate(-9px, -57px)'}}
                    />
                    <motion.path
                        id="path4-4"
                        d="m 137.57719,98.713273 
                        c -4.6,4.7656 -12.19,4.899 -16.974,0.276 
                            -4.692,-4.646 -4.922,-12.1601 -0.23,-16.954 
                            4.6,-4.7633 12.19,-4.9013 16.951,-0.299 
                            1.15,1.104 -4.439,-2.093 -8.74,-0.46 
                            -3.565,1.38 -6.187,4.0881 -5.865,8.729 
                            0.23,5.364 4.186,8.6881 7.912,9.522 
                            4.232,0.92 8.464,-2.208 7.107,-0.805 z"
                    
                        fill="#0400ff"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={0}
                        strokeDasharray={98.76}
                        strokeOpacity={1}
                        style={{strokeDashoffset: smoothStrokeDashoffsetHangingMoon, fill: fillHangingMoon}}
                    />
                    </motion.g>
            </motion.g>
        </motion.g>

    )
}

export default SwingingMoon;