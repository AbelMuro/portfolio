import React, {useEffect} from 'react';
import {useControlScrolling, useMediaQuery} from '~/Hooks';
import NavigationBar from './Components/NavigationBar';
import DisplayHeadings from './Components/DisplayHeadings';
import AnimateAboutMeText from './Components/AnimateAboutMeText';
import AnimateBackgroundPattern from './Components/AnimateBackgroundPattern';
import MobileBackgroundPattern from './Components/MobileBackgroundPattern';
import AnimateBackgroundClouds from './Components/AnimateBackgroundClouds';
import ProjectSection from './Components/ProjectSection'
import ContactMeSection from './Components/ContactMeSection';
import DisplayScrollDownMessage from './Components/DisplayScrollDownMessage';
import DisplayMobileHeadings from './Components/DisplayMobileHeadings';
import LoadingScreen from './Components/LoadingScreen';
import './styles.css';

/* 
    this is where i left off, i need to continue working on the DisplayMobileHeadings component
*/


function App() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    useControlScrolling();

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            if ('scrollRestoration' in history) 
                history.scrollRestoration = 'manual';
            
            window.scrollTo(0, 0);
        });
    }, [])

    return(
        <>
            {/*<LoadingScreen/>*/}
            <NavigationBar/>
            {mobile ? <DisplayMobileHeadings/> : <DisplayHeadings/>}
            <AnimateAboutMeText/>

            {mobile ? <MobileBackgroundPattern/> : <AnimateBackgroundPattern/>}

            <AnimateBackgroundClouds/> 
            <ProjectSection/>
            <ContactMeSection/>
            <DisplayScrollDownMessage/>
        </>
    )
}

export default App;
