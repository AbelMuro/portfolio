import React, {useEffect, useState, useRef} from 'react';
import * as styles from './styles.module.css';

function ProgressBar(){
    const [percent, setPercent] = useState(0);
    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(() => {
            setPercent((prevPercent) => {
                if(prevPercent < 99)
                    return prevPercent + 1;
                else
                    return 100;
            })
        }, 100)
    }, [])

    useEffect(() => {
        if(percent === 100)
            clearInterval(interval.current);
    }, [percent])

    return(
        <>
            <div className={styles.progress}>
                <div className={styles.progress_bar} style={{width: `${percent}%`}}></div>
            </div>        
            <h3 className={styles.progress_percent}>
                {`[${percent}]%`}
            </h3>  
        </>

    )
}

export default ProgressBar;