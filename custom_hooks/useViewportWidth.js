import React, { useState } from 'react';

export default function useViewportWidth(){
    const [viewport, setViewport] = useState()

    if(window.innerWidth < 750){
        setViewport('mobile')
    } else if(window.innerWidth < 990){
        setViewport('tablet')
    } else {
        setViewport('desktop')
    }

    return viewport;
}