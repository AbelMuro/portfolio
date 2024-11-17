import React from 'react';
import styles from './styles.module.css';
import MobileNavBar from './MobileNavBar';
import {useMediaQuery} from 'react-responsive';


function NavigationBar() {
    const mobile = useMediaQuery({query: "(max-width: 600px)"});

    const handleLink = () => {
        const event = new Event('display-all-projects');        //this event will force the projectSection component to display ALL projects, then we will scroll down to the ContactMe component
        document.dispatchEvent(event);
    }

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
                    <a href="#contactMe" onClick={handleLink}>          {/* Clicking on this link will not automatically scroll to the component in the app, which is why i have the onClick Event handler*/}
                        Contact Me
                    </a>
                </li>                  
            </ul>
        </nav>
    
}

export default NavigationBar;