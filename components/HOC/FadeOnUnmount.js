import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function FadeOnUnmount({unmountOn, children}){
    return (
        <AnimatePresence>
            {!unmountOn && React.cloneElement(children, {
                animate: { opacity: 1, visibility: 'visible' },
                initial: { opacity: 0, visibility: 'hidden' },
                exit: { opacity: 0 },
            })}
        </AnimatePresence>
    )
}