import React, { useRef } from 'react';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

FadeInViewContainer.propTypes = {
    threshold: PropTypes.number,
    delay: PropTypes.number,
    animateOnly: PropTypes.bool
}

export default function FadeInViewContainer({ threshold, reverse, animateOnly, delay, duration, children }) {
    const ref = useRef();
    const variants = {
        fadeUp: {
            y: '0%',
            transition: {
                delay: delay ? delay : 0,
                duration: duration ? duration : 1.15,
                ease: [.23, .02, .0, 1.01] 
            }
        },
        hide: {
            y: reverse ? '-100%' : '100%',
            transition: {
                duration: .5,
            }
        }
    }

    let animateProp;
    let initialProp;

    if(!animateOnly){
        const inView = useInViewFromTop(ref, { threshold: threshold || .5 })
        animateProp = inView ? 'fadeUp' : 'hide';
        initialProp = null;
    } else {
        animateProp = 'fadeUp';
        initialProp = 'hide'
    }

    return (
        <motion.div animate={animateProp} initial={initialProp} ref={ref} style={{ overflow: 'hidden '}}>
            <motion.div style={{ display: 'inline-block'}} variants={variants}>
                { React.cloneElement(children) } 
            </motion.div>
        </motion.div>
    )
}