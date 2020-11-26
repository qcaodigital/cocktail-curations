import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function FadeOnUnmount({unmountIf, children, exitTransition, animateTransition, initialTransition, dontAnimate}){
    const variants = {
        animate: {
            opacity: 1,
            transition: typeof animateTransition !== 'undefined' ? animateTransition : null
        },
        initial: {
            opacity: 0,
            transition: typeof initialTransition !== 'undefined' ? initialTransition : null
        },
        exit: {
            opacity: 0,
            transition: typeof exitTransition !== 'undefined' ? exitTransition : null
        },
    }

    if(dontAnimate){
        return (
            <>
                {!unmountIf && React.cloneElement(children)}
            </>
        )
    } else {
        return (
            <AnimatePresence>
                {!unmountIf && React.cloneElement(children, {
                    animate: 'animate',
                    initial: 'initial',
                    exit: 'exit',
                    variants: variants
                })}
            </AnimatePresence>
        )
    }
}