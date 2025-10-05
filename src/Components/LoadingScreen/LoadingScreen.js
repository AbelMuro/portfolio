import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import ProgressBar from './ProgressBar';
import * as styles from './styles.module.css';

function LoadingScreen() {
    const [mount, setMount] = useState(true);

    return(

        <AnimatePresence>
            {mount && 
            <motion.section 
                className={styles.loading}
                exit={{scaleY: 0}}
                transition={{duration: 0.7}}
                >
                <div className={styles.content}>
                    <h2>Hold on.. let me think.</h2>
                    <ProgressBar setMount={setMount}/>              
                </div>
            </motion.section>
            }           
        </AnimatePresence>

    )
}

export default LoadingScreen;