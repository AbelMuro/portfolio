import React from 'react';
import styles from './styles.module.css';
import MobileNavBar from './MobileNavBar';
import {useMediaQuery} from 'react-responsive';


function NavigationBar() {
    const mobile = useMediaQuery({query: "(max-width: 600px)"});


    return mobile ? <MobileNavBar/>  : 
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
    
}

export default NavigationBar;