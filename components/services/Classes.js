import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Classes.module.scss';
import transitions from './ClassesTransitions';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import Rellax from 'rellax';
import { useInView } from 'react-intersection-observer';

const Classes = React.forwardRef(({}, ref) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef)

    const blockQuoteRef = useRef();
    const blockQuoteInView = useInViewFromTop(blockQuoteRef, { threshold: .1 });

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: .1 });

    const spacerImgRef = useRef();
    const spacerImgInView = useInViewFromTop(spacerImgRef, { threshold: .2 });  
    useEffect(() => {
        new Rellax(spacerImgRef.current, { speed: -1, center: true });
    }, [])

    return(
        <section ref={ref} id={styles.Classes}>
            <div className={styles.contentContainer}>
                <motion.header ref={headerRef} animate={headerInView ? 'animate' : 'initial'}>
                    <motion.h2 variants={transitions.stagger}>
                        <motion.span variants={transitions.headerVariant}>Elevate your bartending</motion.span> 
                        <motion.span variants={transitions.headerVariant}>knowledge and skills by</motion.span>
                        <motion.span variants={transitions.headerVariant}>hosting a <span className={styles.emp}>cocktail class.</span></motion.span>
                    </motion.h2>
                    <motion.p variants={transitions.headerVariantDelayed}>We will teach your guests how to craft cocktail classics or customize a cocktail based on your group’s theme or preference. Cocktail Curations will provide instructors, barware, cocktail utensils, and all additional natural juices, handcraft mixers and garnishes.</motion.p>
                </motion.header>
                <div className={styles.imgContainer} id={styles.first}>
                    <motion.img ref={imgRef} animate={{ scale: imgInView ? 1 : 1.2}} transition={{ duration: 2, ease: [.38, .25, 0, 1]}}src="/imgs/stock/services_page/classes.jpg" alt="Cocktail Curations Class Kentlands Clubhouse"/>
                </div>
                <div className={styles.imgContainer} id={styles.second}>
                    <img src="/imgs/stock/services_page/classes2.jpg" alt="Cocktail Curations Class Kentlands Clubhouse"/>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F95B5B" d="M43,-50.3C53.8,-42.2,59.2,-26.8,58.7,-12.8C58.2,1.2,51.9,13.7,44.2,24C36.4,34.2,27.3,42.1,14,53.4C0.7,64.6,-16.7,79.3,-33.2,78.7C-49.7,78.1,-65.2,62.4,-69.8,44.9C-74.5,27.4,-68.2,8.2,-62.8,-9C-57.3,-26.3,-52.6,-41.7,-42.3,-49.8C-32,-58,-16,-58.8,0.1,-58.9C16.1,-59,32.2,-58.3,43,-50.3Z" transform="translate(100 100)" />
                    </svg>
                    <img className={styles.emb} src="/imgs/embellishments/dots.png" alt=""/>
                </div>
                <motion.div ref={blockQuoteRef} animate={blockQuoteInView ? 'animate' : 'initial'} className={styles.desktopText}>
                    <motion.h3 variants={transitions.blockQuoteText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia praesentium unde consequuntur fugiat ab, rem cum dolores nulla libero. Placeat tempore possimus dolorum modi?
                    </motion.h3>
                </motion.div>
            </div>
            <div className={styles.spacer}>
                <div ref={spacerImgRef} className={styles.parallaxContainer}/>
                <header>
                    <motion.button animate={spacerImgInView ? 'animate' : 'initial'}>
                        <motion.div variants={transitions.spacerButtonBorderX} id={styles.top} className={styles.borderX}/>
                        <motion.div variants={transitions.spacerButtonBorderY} id={styles.left} className={styles.borderY}/>
                        <Link href='/contact'>
                            <a>Book a class today</a>
                        </Link>
                        <motion.div variants={transitions.spacerButtonBorderY} id={styles.right} className={styles.borderY}/>
                        <motion.div variants={transitions.spacerButtonBorderX} id={styles.bottom} className={styles.borderX}/>
                    </motion.button>
                </header>
            </div>
        </section>
    )
})

export default Classes;