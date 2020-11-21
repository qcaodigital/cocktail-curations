import React, { useRef } from 'react';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

FadeUpInViewContainer.propTypes = {
    threshold: PropTypes.number,
    animateOnly: PropTypes.bool
}

export default function FadeUpInViewContainer({ threshold, animateOnly, children }) {
    if(threshold && (threshold < 0 || threshold > 1)){
        throw 'FadeUpInViewContainer Error: Threshold must be a value between 0 and 1';
    }

    const ref = useRef();
    const variants = {
        animate: {
            y: '0%',
            transition: {
                duration: 1,
                ease: [.23, .02, .0, 1.01] 
            }
        },
        initial: {
            y: '100%',
            transition: {
                duration: .5,
            }
        }
    }

    let animateProp;
    let initialProp;

    if(!animateOnly){
        const inView = useInViewFromTop(ref, { threshold: threshold || .5 })
        animateProp = inView ? 'animate' : 'initial';
        initialProp = null;
    } else {
        animateProp = 'animate';
        initialProp = 'initial'
    }

    return (
        <motion.div animate={animateProp} initial={initialProp} ref={ref} style={{ overflow: 'hidden '}}>
            <motion.div style={{ display: 'inline-block'}} variants={variants}>
                { React.cloneElement(children) } 
            </motion.div>
        </motion.div>
    )
}