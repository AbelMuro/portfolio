import React from 'react';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Map from './Map';

const theme = createTheme({
    palette: {
        customColor: {
            main: '#615c5c',
            contrastText: '#FFF'
        }
    }
})


function ContactMe() {
    return(
        <section className={styles.container}>

            <form className={styles.formContainer}>
                <h1 className={styles.title}> Contact Me</h1>
                <TextField className={styles.name} id="filled-basic" label="Enter Name" variant="filled" required/> <br/>
                <TextField className={styles.email} id="filled-basic" label="Enter Email" variant="filled" required/> <br/>
                <TextField
                    className={styles.body}
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={10}
                    defaultValue="Type here.."
                    variant="filled"
                    required
                    />
                <br/>
                <ThemeProvider theme={theme}>
                    <Button color="customColor" type="submit" variant="contained">
                        Submit
                    </Button>                    
                </ThemeProvider>
            </form>
            <Map/>
        </section>
    )

}

export default ContactMe;