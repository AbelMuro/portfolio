import React from 'react';
import {motion} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

function TechIcon({name, x, y, size, scrollThresholds}) {
    return(

        <g transform={`translate(${x}, ${y})`}>
            <motion.image 
                width={size} 
                className={styles.icon} 
                href={icons[name]}
                />  
        </g>
    )
}

export default TechIcon;