import React, {useState} from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import {motion, AnimatePresence} from 'framer-motion';
import {menuVariant, menuItemVariant} from './Variants';

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
            <AnimatePresence>
                {open && 
                <motion.section 
                    className={styles.menu} 
                    initial='hide' 
                    animate='show' 
                    exit='exit'
                    variants={menuVariant}>
                    <ul className={styles.navItems}>
                        <motion.li className={styles.navClose} onClick={handleOpen} variants={menuItemVariant}>
                            <FontAwesomeIcon icon={faClose} className={styles.close} color='white' size='3x'/>  
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#home"> 
                                Home
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#aboutMe"> 
                                About Me
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#projects">
                                Projects
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#contactMe">
                                Contact Me
                            </a>
                        </motion.li>             
                    </ul>
                </motion.section>}                
            </AnimatePresence>
        </nav>
    )
}

export default MobileNavBar;