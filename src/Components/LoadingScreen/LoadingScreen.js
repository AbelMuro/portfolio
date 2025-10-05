import React from 'react';
import ProgressBar from './ProgressBar';
import * as styles from './styles.module.css';

function LoadingScreen() {
    return(
        <section className={styles.loading}>
            <div className={styles.content}>
                <h2>Hold on.. let me think.</h2>
                <ProgressBar/>              
            </div>

        </section>
    )
}

export default LoadingScreen;