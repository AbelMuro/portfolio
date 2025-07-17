import {useState, useEffect} from 'react';

function useIntersectionObserver (callback, options) { 
    const [target, setTarget] = useState(null);     //target is supposed to be a reference to an element 

    useEffect(() => { 
        const observer = new IntersectionObserver(callback, options); 
        target && observer.observe(target); 
        
        return () => target && observer.unobserve(target);  
         
    }, [target, callback, options]); 

    return setTarget;                       //the setTarget MUST be assigned to an element as a ref
}; 

export default useIntersectionObserver;