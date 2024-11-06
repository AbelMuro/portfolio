import { useEffect, useRef, useState } from 'react'; 

const useIntersectionObserver = (callback, options) => { 
    const [target, setTarget] = useState(null); 
    const observer = useRef(null); 

    useEffect(() => { 
        if (!observer.current) 
            observer.current = new IntersectionObserver(callback, options); 
        
        const { current: currentObserver } = observer; 
        if (target) 
            currentObserver.observe(target); 
        
        return () => target && currentObserver.unobserve(target);  
         
    }, [target, callback, options]); 

    return setTarget; 
}; 

export default useIntersectionObserver;