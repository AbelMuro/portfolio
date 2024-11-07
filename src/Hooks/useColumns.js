import {useState, useEffect} from 'react';
import useMediaQuery from './useMediaQuery.js';

function useColumns() {
    const [mobile] = useMediaQuery('(max-width: 700px)');
    const [tablet] = useMediaQuery('(max-width: 1050px)');
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        if(mobile)
            setColumns(1);
        else if(tablet)
            setColumns(2);
        else
            setColumns(3);
    }, [mobile, tablet])

    return [columns];
}

export default useColumns;