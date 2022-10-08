import React from 'react';
import NavigationBar from './NavigationBar';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';


function App() {
    return(
    <BrowserRouter>
        <NavigationBar />
        <HomeSection />
        <AboutMeSection/>
    </BrowserRouter>
    )
}

export default App;
