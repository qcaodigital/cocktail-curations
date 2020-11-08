import { useEffect } from 'react';
import Rellax from 'rellax';

function useRellax(ref, options){
    useEffect(() => {
        new Rellax(ref.current, options)
    }, [])
}

export default useRellax;