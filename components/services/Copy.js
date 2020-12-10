import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Rellax from 'rellax';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { copyTransitions } from '../../page_transitions/services';
import styles from './Copy.module.scss';
import ArrowDivider from '../common/ArrowDivider';
import PropTypes from 'prop-types';

const Copy = React.forwardRef(({ viewport }, ref) => {
    const copyLeftImgRellax = useRef();
    const copyRightImgRellax = useRef();

    useEffect(() => {
        new Rellax(copyLeftImgRellax.current, { speed: 1 })
        new Rellax(copyRightImgRellax.current, { speed: 3 })
    }, [])

    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef, { threshold: .1 })

    const copyCenterImgRef = useRef();
    const inView = useInViewFromTop(copyCenterImgRef, { threshold: .1 })
    return(
        <section ref={ref} id={styles.Copy}>
            <ArrowDivider size={{value: 1.5, measurement: 'rem'}} border={{size: 1, color: 'var(--main-color-fade-more)'}} BGcolor='#F1F2EB'/>
            <motion.div
                ref={headerRef} 
                animate={headerInView ? 'animate' : 'initial'} 
                variants={copyTransitions.headerContainer} 
                className={styles.headerSection}
            >
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2 variants={copyTransitions.headerText} className={styles.headerEmp}>Our Promise</motion.h2>
                </div>                
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2 variants={copyTransitions.headerText}>is to offer a specially-curated event or experience that is fitted to every individual client's needs. No need or desire gets left behind.</motion.h2>
                </div>                
                <img src="/imgs/stock/logos/cc-icon-logo-color.png" alt="Cocktail Curations Logo Icon"/>
            </motion.div>
            <div className={styles.gallery}>
                <div className={styles.parallaxContainer}>
                    <div ref={copyLeftImgRellax} id={styles.galleryLeft} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_copy_2.jpg" alt="Cocktail Curations Classes"/>
                    </div>
                    <div 
                        ref={copyCenterImgRef} 
                        id={styles.galleryCenter} 
                        className={styles.imgContainer}
                    >
                        <img 
                            className={inView ? styles.inView : null} 
                            src="/imgs/stock/services_page/services_copy_1.jpg" 
                            alt="Cocktail Curations Botanical Bar"
                        />
                        <img ref={copyCenterImgRef} id={styles.dot_circle} className={styles.embellishment} src='/imgs/embellishments/grey-dots.png' alt="grey dots"/>
                        <img id={styles.dots} className={styles.embellishment} src='/imgs/embellishments/dots.png' alt="dots"/>
                    </div>
                    <div ref={copyRightImgRellax} id={styles.galleryRight} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/services_copy_3.jpg" alt=""/>
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
                            <motion.a variants={copyTransitions.ctaVariant}>
                                <p>Contact Us</p>
                                <motion.div variants={copyTransitions.ctaUnderlineVariant}/>
                            </motion.a>
                        </Link>
                    </motion.div>}
                </div>
            </div>
        </section>
    )
})

Copy.propTypes = {
    viewport: PropTypes.string.isRequired
}

export default Copy;
            