import React from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Map from './Map';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ContactMeSection() {

    const handleSubmit = (e) => {
        let allForms = document.forms["reset"];
        alert("Your Message has been submitted");
        allForms.reset();        
        e.preventDefault;
    }

    return(
        <section className={styles.container} id="contactMe">
            <div className={styles.blackBox}>
                <div className={styles.contactMeContainer}>
                    <h1 className={styles.contactMeTitle}>
                        Contact Me
                    </h1>
                    <p className={styles.contactMeDesc}>
                        Questions? Concerns? Please message me 
                        and I will respond as soon as I can.
                    </p>
                    <form className={styles.formContainer} id="reset" onSubmit={handleSubmit} name="contact" method="post">
                        <TextField id="outlined-basic" label="Enter Name" variant="outlined" className={styles.inputs} type="text" name="name" required/>
                        <br/>
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" className={styles.inputs} type="email" name="email" required/>
                        <br/>
                        <TextField
                            name="message"
                            className={styles.inputMessage}
                            id="outlined-multiline-static"
                            label="Enter Message"
                            multiline
                            rows={8}
                            required/>  
                        <Box className={styles.button}>
                            <Button type="submit" variant="contained">Submit</Button>                             
                        </Box>
                        <input type="hidden" name="form-name" value="contact" />
                    </form>                    
                </div>
            </div>   
            <Map/>
        </section>
    )
}

export default ContactMeSection;