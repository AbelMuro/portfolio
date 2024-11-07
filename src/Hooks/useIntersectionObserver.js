import { useEffect, useState } from 'react'; 

const useIntersectionObserver = (callback, options) => { 
    const [target, setTarget] = useState(null); 

    useEffect(() => { 
        const observer = new IntersectionObserver(callback, options); 
        target && observer.observe(target); 
        
        return () => target &&  observer.unobserve(target);  
         
    }, [target, callback, options]); 
    
    return setTarget; 
}; 

export default useIntersectionObserver;