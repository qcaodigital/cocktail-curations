import {  useRef } from 'react';
import styles from './Person.module.scss';
import FadeInViewContainer from '../HOC/FadeInViewContainer';
import { motion } from 'framer-motion';
import transitions from '../../page_transitions/common';
import { personnelTransitions } from '../../page_transitions/team';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';

export default function Person({ name, img, text, quote, reverse, bgColor }){
    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: -.05 });

    const nameRef = useRef();
    const nameInView = useInViewFromTop(nameRef)


    return(
        <div id={styles.Person} className={reverse && styles.reverse}>
            <div className={styles.nameContainer}>
                <motion.h3
                    ref={nameRef}
                    animate={nameInView ? 'animate' : 'initial'}
                    variants={personnelTransitions.name}
                >
                    {name.first}
                </motion.h3>
                <motion.h3
                    ref={nameRef}
                    animate={nameInView ? 'animate' : 'initial'}
                    variants={personnelTransitions.name}
                >
                    {name.last}
                </motion.h3>
            </div>
            <div ref={imgRef} className={styles.imgContainer} style={{ overflow: 'hidden' }}>
                <motion.img variants={transitions.imgScaleIn} animate={imgInView ? 'animate' : 'initial'} src={img.src} alt={img.alt}/>
            </div>
            <div className={styles.text}>
                {text.map(textsection => (
                    <p key={textsection}>{textsection}</p>
                ))}
                <blockquote>{quote}</blockquote>
            </div>
        </div>
    )
}