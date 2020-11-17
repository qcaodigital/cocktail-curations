import { useEffect, useRef, useContext, useState } from 'react';
import { StateContext } from '../common/Body';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Rellax from 'rellax';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { copyTransitions } from '../../page_transitions/services';
import styles from './Copy.module.scss';

export default function Copy(){
    const copyLeftImgRellax = useRef();
    const copyRightImgRellax = useRef();
    const state = useContext(StateContext);
    const { viewport } = state;

    useEffect(() => {
        new Rellax(copyLeftImgRellax.current, { speed: 1 })
        new Rellax(copyRightImgRellax.current, { speed: 3 })
    }, [])

    const copyCenterImgRef = useRef();
    const inView = useInViewFromTop(copyCenterImgRef, { threshold: .1 })
    return(
        <section id={styles.Copy}>
            <div className={styles.headerSection}>
                <h2 className={styles.headerEmp}>We provide</h2>
                <h2>a vast variety of services to bring our knowledge and passion for next-level mixology to the world.</h2>
                <img src="/imgs/stock/logos/cc-icon-logo-color.png" alt="Cocktail Curations Logo Icon"/>
            </div>
            <div className={styles.gallery}>
                <div className={styles.parallaxContainer}>
                    <div ref={copyLeftImgRellax} id={styles.galleryLeft} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_header (1)-sq-flipped.jpg" alt="Cocktail Curations Classes"/>
                    </div>
                    <div 
                        ref={copyCenterImgRef} 
                        id={styles.galleryCenter} 
                        className={styles.imgContainer}
                    >
                        <img 
                            className={inView ? styles.inView : null} 
                            src="/imgs/stock/services_page/services_header (3)-short.jpg" 
                            alt="Cocktail Curations Botanical Bar"
                        />
                        <img ref={copyCenterImgRef} id={styles.dot_circle} className={styles.embellishment} src='/imgs/embellishments/grey-dots.png' alt="grey dots"/>
                        <img id={styles.dots} className={styles.embellishment} src='/imgs/embellishments/dots.png' alt="dots"/>
                    </div>
                    <div ref={copyRightImgRellax} id={styles.galleryRight} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_header (2)-sq.jpg" alt=""/>
                        <img id={styles.dots} className={styles.embellishment} src='/imgs/embellishments/dots.png' alt="Cocktail Curations Experiential Bar Service"/>
                    </div>
                    {viewport !== 'mobile' && <motion.div 
                        className={styles.galleryTextRight}
                        animate={inView ? 'animate' : 'initial'}
                        variants={copyTransitions.stagger}
                    >
                        <motion.p variants={copyTransitions.textboxVariant}>Reach out to us</motion.p>
                        <motion.p variants={copyTransitions.textboxVariant}>and see what we can do</motion.p>
                        <motion.p variants={copyTransitions.textboxVariant}>just for you</motion.p>
                        <Link href='/contact'>
                            <motion.a variants={copyTransitions.textboxVariant}>
                                <p>Contact Us</p>
                                <motion.div variants={copyTransitions.ctaUnderlineVariant}/>
                            </motion.a>
                        </Link>
                    </motion.div>}
                </div>
            </div>
        </section>
    )
}
            