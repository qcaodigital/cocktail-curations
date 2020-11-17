import React, { useRef } from 'react';
import styles from './Bars.module.scss';
import { motion } from 'framer-motion';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { useInView } from 'react-intersection-observer';
import Spacer from './Spacer';

const Bars = React.forwardRef(({}, ref) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef, { threshold: .1 });

    const blockQuoteRef = useRef();
    const blockQuoteInView = useInViewFromTop(blockQuoteRef, { threshold: .1 });

    return (
        <section id={styles.Bars} ref={ref}>
            <motion.div ref={headerRef} className={styles.contentContainer}>
                <motion.header animate={headerInView ? 'animate' : 'initial'}>
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>Personalize and tailor</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>your event with one</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>of our <span className={styles.emph}>experiential bars.</span></motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariantDelayed}>To curate is to design and select items from among a large number of possibilities. Our mixology bars offer customized  experiences for your special event. It's more than just a specialty cocktail. Our bartenders engage with guests and craft cocktails to their preference. From liquid, garnish, to displays, we curate your perfect cocktail bar and guest experience.</motion.p>
                    <motion.p variants={sectionTransitions.headerVariantDelayed}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ullam voluptatem error, adipisci debitis veniam nemo explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ullam voluptatem error, adipisci debitis veniam nemo explicabo.</motion.p>
                </motion.header>
                <div className={styles.gallery}>
                    <div id={styles.center} className={styles.imgContainer}>
                        <motion.img variants={sectionTransitions.mainImgScale} animate={headerInView ? 'animate' : 'initial'} src="/imgs/stock/services_page/bars_main.jpg" alt="Cocktail Curations Wedding Wire The Knot Event"/>
                    </div>
                    <div id={styles.top} className={styles.imgContainer}>
                        <img className={styles.galleryImg} src="/imgs/stock/services_page/bars-sq.jpg" alt="Cocktail Curations Book of Lists Event 2020"/>
                        <img className={styles.embellishment} src="/imgs/embellishments/pink-dots.png" alt=""/>
                        <motion.p 
                            ref={blockQuoteRef} 
                            variants={sectionTransitions.blockQuoteText_bars} 
                            animate={blockQuoteInView ? 'animate' : 'initial'} 
                            className={styles.desktopText}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ullam voluptatem error, adipisci debitis veniam nemo explicabo.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
            <Spacer
                img='/imgs/stock/services_page/bars_spacer_bg.jpg'
                buttonText='Inquire About Booking'
                href='/contact'
            />
        </section>
    )
})

export default Bars;