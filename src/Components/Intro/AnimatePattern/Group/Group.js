import React from 'react';
import {motion} from 'framer-motion'
import * as styles from './styles.module.css';

function Group({children, from, to, duration, scale}) {

    return(
        <motion.g className={styles.container} style={{scale}}>
            <motion.g
                className={styles.group}
                initial={{rotate: from}}
                animate={{rotate: to}}
                transition={{repeat: Infinity, ease: 'linear', duration}}
            >
                {children}
            </motion.g>            
        </motion.g>

    )
}

export default Group;