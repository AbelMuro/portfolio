import React, {useState} from 'react';
import {useMediaQuery} from '~/Hooks';
import AnimateHandwriting from './AnimateHandwriting';
import {motion, AnimatePresence} from 'framer-motion';
import ProgressBar from './ProgressBar';
import * as styles from './styles.module.css';

function LoadingScreen() {
    const [mount, setMount] = useState(true);
    const [mobile] = useMediaQuery('(max-width: 600px)');

    return(
        <AnimatePresence>
            {mount && 
            <motion.section 
                className={styles.loading}
                exit={{opacity: 0}}
                transition={{duration: 1.7}}
                >
                    {mobile ? <h1 className={styles.title}>Abel's Portfolio</h1> : <AnimateHandwriting/>}
                    <ProgressBar setMount={setMount}/>         
            </motion.section>
            }           
        </AnimatePresence>

    )
}

export default LoadingScreen;