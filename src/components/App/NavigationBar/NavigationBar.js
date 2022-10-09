import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useMediaQuery} from 'react-responsive';


function NavigationBar() {
    const mobile = useMediaQuery({query: "(max-width: 800px)"})


    const openMenu = (e) => {
        let navBar = e.target.parentElement;
        navBar.classList.toggle(styles.toggle);
    }

    useEffect(() => {
        if(!mobile){
            let navBar = document.querySelector("." + styles.navBar);
            navBar.classList.remove(styles.toggle);
        }
    })

    return(
        <nav className={styles.navBar}>
            <div onClick={openMenu} className={styles.hamburger}>
                <span className={styles.eventBubbling}>
                    <FontAwesomeIcon icon={faBars}  />  
                </span>
            </div>
                      
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