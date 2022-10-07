import React from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faHouse, faUser, faSheetPlastic} from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
    return(
        <nav className={styles.navBar}>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} className={styles.icon} title={"Home"}/> 
            </Link>
            <Link to="/projects">
                <FontAwesomeIcon icon={faSheetPlastic} className={styles.icon} title={"Projects"}/>                
            </Link>
            <Link to="/contactme">
                <FontAwesomeIcon icon={faUser} className={styles.icon} title={"Contact Me"}/>            
            </Link>

        </nav>
    )
}

export default NavigationBar;