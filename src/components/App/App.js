import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactMePage from './ContactMePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';


function App() {
    return(
    <BrowserRouter>
        <NavigationBar />
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/contactme" element={<ContactMePage />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
