import { useRef } from 'react';
import styles from './Bases.module.scss';
import { motion } from 'framer-motion';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';

const Bases = React.forwardRef(({}, ref) => {
    const inView = useInViewFromTop(ref, { threshold: .1 });
    const mainImgRef = useRef();
    const mainImgInView = useInViewFromTop(mainImgRef, { threshold: .1 })

    return(
        <section ref={ref} id={styles.Bases}>
            <div className={styles.contentContainer}>
                <motion.header
                    variants={sectionTransitions.stagger} 
                    animate={inView ? 'animate' : 'initial'} 
                    className={styles.headerContainer}
                >
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>Customize your</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>very own artisanal</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>
                            <span className={styles.emph}>
                                cocktail base.
                                <motion.div 
                                    className={styles.emphUnderline}
                                    variants={sectionTransitions.emphUnderline}
                                />
                            </span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariant}>We curate and bottle, you shake with your favorite spirit and finish with our beautiful
                    garnishes. Our perfectly balanced cocktail bases are made with fresh ingredients, flavorful
                    botanicals, handcrafted simple syrups and bitters delivered to your door.</motion.p>
                    <motion.p variants={sectionTransitions.headerVariant}>We will work with you to craft a deliciously, special flavor for your next event. Our cocktail bases are also available in pre-made, curated flavors kept in limited stock. Follow the link below to check out out latest bases!</motion.p>
                    <motion.div variants={sectionTransitions.opacity} className={styles.CTA}>
                        <a href='http://www.cocktailcurations-shop.com' target='_blank' rel='noopener noreferrer'>
                            <button className='STYLED_BTN'>Shop Bases</button>
                        </a>
                    </motion.div>
                </motion.header>
                <div className={styles.gallery}>
                    <motion.div ref={mainImgRef} animate={mainImgInView ? 'animate' : 'initial'} id={styles.main} className={styles.imgContainer}>
                        <motion.img variants={sectionTransitions.mainImgScale} src="/imgs/stock/services_page/bases.jpg" alt="Cocktail Curations Base"/>
                    </motion.div>
                    <div id={styles.secondary} className={styles.imgContainer}>
                        <img src="/imgs/stock/services_page/bases_sm.jpg" alt="Cocktail Curations Base"/>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Bases;