import React from 'react';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faUser, faSheetPlastic} from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
    return(
        <nav className={styles.navBar}>
            <FontAwesomeIcon icon={faHouse} className={styles.icon} title={"Home"}/> 

            <FontAwesomeIcon icon={faSheetPlastic} className={styles.icon} title={"Projects"}/>                

            <FontAwesomeIcon icon={faUser} className={styles.icon} title={"Contact Me"}/>            
        </nav>
    )
}

export default NavigationBar;