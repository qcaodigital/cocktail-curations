import { motion, AnimatePresence } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import { landingTransitions } from './../../page_transitions/about';
import constructRellax from './../../helpers/constructRellax';
import { useRef, useEffect, useState } from 'react';
import styles from './Landing.module.scss';
import smoothscroll from 'smoothscroll';
import Carousel from './Carousel';

//FOR NOW, ALL IMGS MUST BE EXACTLY IDENTICAL IN SIZE TO THE PIXEL
const imgArr = [ 'IMG_1734.jpg', 'thy_nicole_bookoflists.jpg', 'ThyNicole_Landscape.jpg'].map(filename => `/imgs/stock/about_page/landing_carousel/${filename}`);

export default function Landing({ isNavAniComplete, NAV_SPACER, navHeight, viewport, storyRef }){
    const headerRef = useRef();
    useEffect(() => constructRellax(headerRef, { speed: -2 }), [])

    return (
        <motion.section 
            style={{ '--navHeight': `${navHeight}px`}}
            animate='animate'
            initial='initial'
            className={styles.Landing}
        >
            {NAV_SPACER}
            <img className={styles.logoBG} src="/imgs/stock/logos/cc-logo-nuemorphed.png" alt=""/>
            <motion.div 
                className={styles.content}
                variants={landingTransitions.landingContainer} 
            >
                <motion.header variants={landingTransitions.header} ref={headerRef}>
                    <motion.h1 variants={landingTransitions.header.children}>We are</motion.h1>
                    <motion.h1 variants={landingTransitions.header.children}>Cocktail Curations</motion.h1>
                    <motion.p variants={landingTransitions.header.children}>Learn about our story</motion.p>
                    <motion.div variants={landingTransitions.header.children} className={styles.underline}/>
                    {viewport === 'desktop' && isNavAniComplete &&  
                        <CTA_BUTTON storyRef={storyRef} navHeight={navHeight}/>
                    }
                </motion.header>
                <Carousel imgs={imgArr} viewport={viewport}/>
                {viewport !== 'desktop' && isNavAniComplete && 
                    <CTA_BUTTON storyRef={storyRef} navHeight={navHeight} viewport={viewport} />
                }
            </motion.div>
        </motion.section>
    )
}

export const CTA_BUTTON = ({ storyRef, navHeight, viewport }) => (
    <motion.div 
        animate='animate'
        initial='initial'
        variants={landingTransitions.header.children} 
        className={styles.cta}
    >
        <motion.button 
            className='STYLED_BTN'
            whileTap={{ scale: viewport !== 'desktop' ? .9 : 1 }}
            onClick={() => {
                smoothscroll(storyRef.current.offsetTop - navHeight, 1000)
            }}
        >
            About Us
        </motion.button>
    </motion.div>
)