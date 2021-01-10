import { useEffect, useState } from 'react';

export default function useOnAniStartOnlyEntry(cb){
    const [onAniStart, setOnAniStart] = useState(cb);
    useEffect(() => {
        setOnAniStart(null)
    }, [])

    return onAniStart;
}
