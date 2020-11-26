import { useEffect, useState } from 'react';

export default function useScrollThreshold(defaultThres, thresholdObj, router){
    const [scrollThreshold, setScrollThreshold] = useState(defaultThres);

    useEffect(() => {
        for (const pathname in thresholdObj){
            if(`/${pathname}` === router.pathname){
                setScrollThreshold(thresholdObj[pathname])
            } else {
                setScrollThreshold(defaultThres)
            }
        }
    }, [router])

    return scrollThreshold;
}