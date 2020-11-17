import styles from './Gallery.module.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { StateContext } from '../common/Body';
import { galleryTransitions } from '../../page_transitions/home';
import PropTypes from 'prop-types';

Gallery.propTypes = {
    imgs: PropTypes.array.isRequired,
    reverse: PropTypes.bool
}

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
                    variant = galleryTransitions.mobileTransition;
                } else if(!reverse && img.card || reverse && !img.card) {
                    variant = galleryTransitions.panFromRight
                } else if(!reverse && !img.card || reverse && img.card) {
                    variant = galleryTransitions.panFromLeft
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
                        <motion.img variants={galleryTransitions.scale} src={img.url} alt={img.alt}/>
                    </motion.div>
                )
            })}
            <div className={styles.spacerBG}/>
        </div>
    )
}