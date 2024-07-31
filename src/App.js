import React, {lazy} from 'react';
import NavigationBar from './Components/NavigationBar';
import HomeSection from './Components/HomeSection';
import AboutMeSection from './Components/AboutMeSection';
const ProjectSection = lazy(() => import('./Components/ProjectSection'));
const ContactMeSection = lazy(() => import('./Components/ContactMeSection'));
import './styles.css';


function App() {
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
