import React, {useState} from 'react';
import AnimateHandwriting from './AnimateHandwriting';
import {motion, AnimatePresence} from 'framer-motion';
import ProgressBar from './ProgressBar';
import images from './images';
import * as styles from './styles.module.css';

function LoadingScreen() {
    const [mount, setMount] = useState(true);

    return(
        <AnimatePresence>
            {mount && 
            <motion.section 
                className={styles.loading}
                exit={{opacity: 0}}
                transition={{duration: 1.7}}
                >
                    <AnimateHandwriting/>
                    <ProgressBar setMount={setMount}/>         
            </motion.section>
            }           
        </AnimatePresence>

    )
}

export default LoadingScreen;