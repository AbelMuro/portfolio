import React from 'react';
import NavigationBar from './NavigationBar';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection';
import ProjectSection from './ProjectSection';
import ContactMeSection from './ContactMeSection';
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


{/*  	
 	function addNumbers() {
    	let first = "2234535";
        let second = "2765";
    	let shortestString;
        let longestString;
    	if(first.length < second.length){
        	shortestString = first
            longestString = second;
        }
        else{
        	shortestString = second;
            longestString = first;
        }
        	
        let carry = 0;
        let totalSum = "";
             
        for(let x = 0; x < shortestString.length; x++){
        	let a = parseInt(first.charAt(first.length - 1 - x));
            let b = parseInt(second.charAt(second.length - 1 - x));
            let currentSum = a + b + carry;
            if(currentSum >= 10){
            	currentSum = currentSum + "";
                carry = 1;
                totalSum += (currentSum.charAt(1) + "")
            }
            else{
            	carry = 0;
                totalSum += (currentSum + "");
                
            }                    	
        }   
        
        if(totalSum.length > shortestString){
        	longestString.charAt()
        }
        console.log(totalSum);
            
    } */
}