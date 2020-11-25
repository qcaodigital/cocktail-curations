import { useEffect, useState, useRef } from 'react';

function useInViewFromTop(ref, options){
    const [inView, setInView] = useState(false)
    const [elementScrollPosition, setElementScrollPosition] = useState();

    useEffect(() => {
        function handleScroll(){
            if(options && options.threshold){
                let thresholdSize = ref.current.getBoundingClientRect().height * (1 * options.threshold);
                if(!inView && (ref.current.getBoundingClientRect().y  - window.innerHeight < (0 - thresholdSize))){
                    setInView(true)
                } else {
                    setInView(false)
                }
            } else {
                if(!inView && (ref.current.getBoundingClientRect().y - window.innerHeight < 0)){
                    setInView(true)
                } else {
                    setInView(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return inView;
}

export default useInViewFromTop;