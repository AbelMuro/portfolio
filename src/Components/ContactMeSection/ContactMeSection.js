import React, {useState} from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Map from './Map';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ContactMeSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    
    const encode = (data) => {
        return Object.keys(data)                                                        
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))  
            .join("&");
    }

    const handleSubmit = async (e) => {

        try{
            alert("Message has been submitted")             //i am forced to put the alert before making the fetch request 
            await fetch("/" , {                             //because netlify is not displaying the alert if i put it after the fetch request (not sure whats going on here)
                method: "POST",
                headers: {"Content-Type" : "application/x-www-form-urlencoded"},
                body: encode({"form-name" : "contact", name: name, email: email, message: message})
            });             
            e.preventDefault(); 
        }
        catch(error){
        }
    }

    

    return(
        <section className={styles.container} id="contactMe">
            <div className={styles.blackBox}>
                <div>
                    <h1 className={styles.contactMeTitle}>
                        Contact Me
                    </h1>
                    <p className={styles.contactMeDesc}>
                        Questions? Concerns? Please message me 
                        and I will respond as soon as I can.
                    </p>
                    {/* note to my future self: please check the index.html file in the outer most folder in src*/}
                    <form className={styles.formContainer} id="reset" onSubmit={handleSubmit}>                   
                        <TextField id="outlined-basic" label="Enter Name" variant="outlined" className={styles.inputs} inputProps={{type: "text", name: "name"}} required value={name} onChange={handleName}/>
                        <br/>
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" className={styles.inputs} inputProps={{type: "email", name: "email"}} required value={email} onChange={handleEmail}/>
                        <br/>
                        <TextField
                            inputProps={{name: "message"}}
                            className={styles.inputMessage}
                            id="outlined-multiline-static"
                            label="Enter Message"
                            multiline
                            rows={8}
                            required
                            value={message}
                            onChange={handleMessage}
                            />  
                        <Box className={styles.button}>
                            <Button type="submit" variant="contained">Submit</Button>                             
                        </Box>

                    </form>                    
                </div>
            </div>   
            <Map/>
        </section>
    )
}

export default ContactMeSection;