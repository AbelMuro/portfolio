import React, {useState} from 'react';
import styles from './styles.module.css';
import images from './images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';

//now i need to implement the motion component to add an exit animation and an initial animation
function MobileNavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <nav className={styles.container}>
            <button className={styles.hamburger} onClick={handleOpen}>
                <FontAwesomeIcon icon={faBars} color='white' size='3x'/>  
            </button>
            {open && <section className={styles.menu}>
                <ul className={styles.navItems}>
                    <li className={styles.navClose} onClick={handleOpen}>
                        <FontAwesomeIcon icon={faClose} className={styles.close} color='white' size='3x'/>  
                    </li>
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
                    <img className={styles.flowerPattern} src={images['flower']}/>               
                </ul>
            </section>}
        </nav>
    )
}

export default MobileNavBar;