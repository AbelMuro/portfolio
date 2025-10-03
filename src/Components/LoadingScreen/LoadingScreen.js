import React from 'react';
import ProgressBar from './ProgressBar';
import * as styles from './styles.module.css';

function LoadingScreen() {
    return(
        <section className={styles.loading}>
            <ProgressBar/>
        </section>
    )
}

export default LoadingScreen;