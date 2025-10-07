import React, {useState} from 'react';
import AnimateTrianglePattern from './AnimateTrianglePattern';
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
                exit={{scaleY: 0}}
                transition={{duration: 0.7}}
                >
                    <AnimateTrianglePattern/>
                    <ProgressBar setMount={setMount}/>         
                    <img className={styles.topBorder} src={images['topBorder']}/>     
                    <img className={styles.bottomBorder} src={images['bottomBorder']}/>
                    <img className={styles.leftBorder} src={images['leftBorder']}/>
                    <img className={styles.rightBorder} src={images['rightBorder']}/>
            </motion.section>
            }           
        </AnimatePresence>

    )
}

export default LoadingScreen;