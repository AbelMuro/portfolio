import React, {useEffect} from 'react';
import {motion} from 'framer-motion';

function Path(props) {

    return(
        <motion.path 
            {...props} 
            fill='white' 
            stroke='white' 
            strokeWidth='1'
            strokeDasharray={'1000'}
            initial={{strokeDashoffset: 1000}}
            animate={{strokeDashoffset: 0}}
            transition={{duration: 10.5}}
        />
    )
}

export default Path;