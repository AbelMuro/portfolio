import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle(props) {
    const [mount, setMount] = useState(true);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.58, 0.62], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, {stiffness: 150, damping: 30});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.70)
            setMount(false)
        else
            setMount(true);
    })

    return (
        <AnimatePresence>
            {mount && 
                <motion.circle {...props} className={styles.circle} initial={{opacity: 1}}strokeDasharray={'300'} style={{strokeDashoffset: dashoffsetSpring}} exit={{opacity: 0}}/>
            }
        </AnimatePresence>
    )
}

export default Circle;