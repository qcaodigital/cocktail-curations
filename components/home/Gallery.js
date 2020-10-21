import styles from './Gallery.module.scss';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { StateContext } from '../common/Body';
import transitions from './GalleryTransitions';

export default function Gallery({ imgs, reverse }){
    const state = useContext(StateContext);
    const { viewport } = state;
    const [ref, inView] = useInView({ threshold: .2, triggerOnce: false });

    return (
        <div
            ref={ref } 
            className={`${styles.Gallery} ${reverse ? styles.reverse : null}`}
        >
            {imgs.map(img => {
                let variant;
                if(viewport === 'mobile') {
                    variant = transitions.mobileTransition;
                } else if(viewport === null) {
                    return;
                } else if(!reverse && img.card || reverse && !img.card) {
                    variant = transitions.panFromRight
                } else if(!reverse && !img.card || reverse && img.card) {
                    variant = transitions.panFromLeft
                } 
                return (
                    <motion.div 
                        key={img.url} 
                        className={`${styles.Gallery__imgContainer} ${img.card ? styles.hasCard : null}`}
                        data-variant={variant}
                        variants={variant}
                        animate={inView ? 'animate' : 'initial'}
                    >
                        {img.card && (
                        <figcaption>
                            <p>{img.card.subheader}</p>
                            <a href={img.card.href}>
                                <h3>{img.card.header}</h3>
                            </a>
                        </figcaption>
                        )}
                        <motion.img src={img.url} alt={img.alt}/>
                    </motion.div>
                )
            })}
            <div className={styles.Gallery__spacerBG}/>
        </div>
    )
}