import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterMessage from './EnterMessage';
import {motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to display a message to the user letting them know that their message has been submitted
*/

function Form() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        try{
            const response = await fetch('http://localhost:4000/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, message})
            })

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
            }

            else{
                const result = await response.text();
                console.log(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
        }

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