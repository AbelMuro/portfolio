import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle(props) {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const strokeDashoffset = useTransform(scrollY, [5800, 6200], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, {stiffness: 150, damping: 40});

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 7000)
            setMount(false)
        else
            setMount(true);
    })

    return (
        <AnimatePresence>
            {mount && 
                <motion.circle {...props} className={styles.circle} initial={{opacity: 1}} strokeDasharray={'300'} style={{strokeDashoffset: dashoffsetSpring}} exit={{opacity: 0}}/>
            }
        </AnimatePresence>
    )
}

export default Circle;