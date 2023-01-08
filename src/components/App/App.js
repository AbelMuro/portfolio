import React from 'react';
import NavigationBar from './NavigationBar';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection';
import ProjectSection from './ProjectSection';
import ContactMeSection from './ContactMeSection';
import './styles.css';


function App() {
    const one = 1;
    const two = 1;
    const three = 1;
    const four = 1;
    const five = 2;

    return(
        <>
            <NavigationBar />
            <HomeSection />
            <AboutMeSection/>
            <ProjectSection/>
            <ContactMeSection/>
        </>
    )
}

export default App;
