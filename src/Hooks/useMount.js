import React, {useState, useRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';

function useMount(){
    const [mount, setMount] = useState(false);
    const target = useRef();
    const {scrollYProgress} = useScroll({target, offset: ['start end', 'end -30vh']});    

    useMotionValueEvent(scrollYProgress, 'change', (y) => {
        setMount(y < 1);
    });

    return [mount, target];
}

export default useMount;