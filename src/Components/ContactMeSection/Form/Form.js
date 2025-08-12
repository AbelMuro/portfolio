import React, {useState} from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterMessage from './EnterMessage';
import DisplayPopupMessage from './DisplayPopupMessage';
import {ClipLoader} from 'react-spinners'
import {motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css';


function Form() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reset, setReset] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        try{
            setLoading(true);

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
                setOpen(true);
                setReset(true);
            }

            else{
                const result = await response.text();
                console.log(result);
            }

            setLoading(false)

        }
        catch(error){
            const message = error.message;
            console.log(message);
            setLoading(false);
        }
    }

    return(
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <LayoutGroup>              
                <EnterName reset={reset} setReset={setReset}/>            
                <EnterEmail reset={reset} setReset={setReset}/>
                <EnterMessage reset={reset} setReset={setReset}/>
                <motion.button className={styles.submit} layout> 
                    {loading ? <ClipLoader size='40' color='white'/> : 'Submit' }
                </motion.button>                 
            </LayoutGroup>
            <DisplayPopupMessage open={open} setOpen={setOpen}/>
        </motion.form>
    )
}

export default Form;