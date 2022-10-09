import React from 'react';
import styles from './styles.module.css';

function NavigationBar() {
    return(
        <nav className={styles.navBar}>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <a href="#home"> 
                        Home
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#aboutMe"> 
                        About Me
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="#contactMe">
                        Contact Me
                    </a>
                </li>                  
            </ul>
        </nav>
    )
}

export default NavigationBar;