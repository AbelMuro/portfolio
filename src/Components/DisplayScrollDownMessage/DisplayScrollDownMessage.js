import React, {useState, useRef} from 'react';
import icons from '~/assets/icons';
import {motion, AnimatePresence, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function DisplayScrollDownMessage() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const timeoutRef = useRef()

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y > 28000){
            setMount(false);
            clearTimeout(timeoutRef.current)
            return;
        }


        clearTimeout(timeoutRef.current);
        setMount(false);

        timeoutRef.current = setTimeout(() => {
            setMount(true);
        }, 2000)
    })


    return(
        <AnimatePresence>
            {mount &&
                <motion.h2 className={styles.message} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    Scroll down.
                    <motion.img src={icons['arrowDown']} initial={{y: 0}} animate={{y: [0, 20, 0]}} transition={{duration: 1.5, repeat: Infinity}}/>
                </motion.h2>
            }            
        </AnimatePresence>

    )
}

export default DisplayScrollDownMessage;