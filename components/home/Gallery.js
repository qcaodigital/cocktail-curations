import styles from './Gallery.module.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { StateContext } from '../common/Body';
import transitions from './GalleryTransitions';

export default function Gallery({ imgs, reverse }){
    const state = useContext(StateContext);
    const { viewport } = state;

    return (
        <div
            className={`${reverse ? styles.reverse : null}`}
            id={styles.Gallery}
        >
            {imgs.map(img => {
                const [ref, inView] = useInView({ threshold: .2, triggerOnce: true });
                let variant;
                if(viewport === 'mobile') {
                    variant = transitions.mobileTransition;
                } else if(!reverse && img.card || reverse && !img.card) {
                    variant = transitions.panFromRight
                } else if(!reverse && !img.card || reverse && img.card) {
                    variant = transitions.panFromLeft
                } 

                return (
                    <motion.div
                        ref={ref} 
                        key={img.url + viewport} 
                        className={`${styles.imgContainer} ${img.card ? styles.hasCard : null}`}
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
                        <motion.img variants={transitions.scale} src={img.url} alt={img.alt}/>
                    </motion.div>
                )
            })}
            <div className={styles.spacerBG}/>
        </div>
    )
}