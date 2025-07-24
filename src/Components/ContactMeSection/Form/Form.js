import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterMessage from './EnterMessage';
import {motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css';


/* 
    this is where i left off, i need to finish the responsiveness of the following component
    then i can either start developing the API for this app or i can continue fixing the visual bugs
    with the scrolling animation
*/

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <LayoutGroup>              
                <EnterName />            
                <EnterEmail />
                <EnterMessage />
                <motion.button className={styles.submit} layout> 
                    Submit
                </motion.button>                 
            </LayoutGroup>
        </motion.form>
    )
}

export default Form;