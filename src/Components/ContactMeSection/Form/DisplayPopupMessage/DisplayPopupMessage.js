import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function DisplayPopupMessage({open, setOpen}) {

    useEffect(() => {
        if(!open) return;

        setTimeout(() => {
            setOpen(false)
        }, 4000)
    }, [open])

    return(
        <AnimatePresence> 
            {open && 
            <motion.dialog 
                className={styles.dialog} 
                open={true} 
                initial={{top: -120}} 
                animate={{top: 120}}
                exit={{top: -120}}
                transition={{duration: 0.2, ease: 'linear'}}
                >
                    <h1>
                        Your message has been sent to me.
                    </h1>
                    <p>
                        I will get back to you as soon as I can.
                    </p>
            </motion.dialog> 
            }           
        </AnimatePresence>

    )
}

export default DisplayPopupMessage;