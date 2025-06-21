import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Map from './Map';

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

                    </form>                    
                </div>
            </div>   
            <Map/>
        </section>
    )
}

export default ContactMeSection;