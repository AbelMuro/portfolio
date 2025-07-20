import React, {useState, useRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';

function useMount(element){
    const [mount, setMount] = useState(false);
    const target = useRef();
    const {scrollYProgress} = useScroll({target, offset: ['start end', 'end -30vh']});    

    useMotionValueEvent(scrollYProgress, 'change', (y) => {
        if(y === 0)
            setMount(false);
        else if(y < 1)
            setMount(true);
        else
            setMount(false);
    });

    return [mount, target];
}

export default useMount;