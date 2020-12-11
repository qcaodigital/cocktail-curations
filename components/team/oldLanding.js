import { motion } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import { landingTransitions } from './../../page_transitions/team';
import constructRellax from './../../helpers/constructRellax';
import { useRef, useEffect } from 'react';
import styles from './Landing.module.scss';

export default function Landing({ isNavAniComplete, NAV_SPACER }){
    const bg1Ref = useRef();
    useEffect(() => constructRellax(bg1Ref, {speed: -5, center: false}), []) 

    const bg2Ref = useRef();
    useEffect(() => constructRellax(bg2Ref, {speed: -2, center: true}), [])

    return (
        <motion.section animate={isNavAniComplete ? 'animate' : 'initial'} initial='initial' className={styles.Landing}>
            <div className={styles.landingBackgrounds}>
                <div className={styles.background1container}>
                    <div ref={bg1Ref} className={styles.background1}/>
                </div>
                <div className={styles.background2container}>
                    <div ref={bg2Ref} className={styles.background2}/>
                </div>
            </div>
            {NAV_SPACER}
            <div className={styles.landingContent}>
                <header>
                    {/* TOTAL ANIMATION TIME BELOW - .5s */}
                    <h1>
                        <FadeInViewContainer animateOnly followParent>
                            <p><span>We</span> are</p>
                        </FadeInViewContainer>
                        <FadeInViewContainer animateOnly followParent>
                            <p className={styles.headerBrand}>Cocktail Curations</p>
                        </FadeInViewContainer>
                    </h1>
                    <motion.div variants={landingTransitions.headerUnderline} className={styles.underline}/>
                    {/* TOTAL ANIMATION TIME BELOW - ~4s */}
                    <motion.div className={styles.box}>
                        <motion.div variants={landingTransitions.box.top} id={styles.topLeft} className={styles.top}/>
                        <motion.div variants={landingTransitions.box.top} id={styles.topRight} className={styles.top}/>
                        <motion.div variants={landingTransitions.box.side} className={styles.right}/>
                        <motion.div variants={landingTransitions.box.bottom} id={styles.bottomLeft} className={styles.bottom}/>
                        <motion.div variants={landingTransitions.box.bottom} id={styles.bottomRight} className={styles.bottom}/>
                        <motion.div variants={landingTransitions.box.side} className={styles.left}/>
                    </motion.div>
                </header>
                <motion.div className={styles.landingGallery}>
                    <motion.div variants={landingTransitions.gallery.sideImg} className={styles.landingImgContainer}>
                        <img src="/imgs/stock/team_page/ajp-1005.jpg" alt=""/>
                    </motion.div>
                    <motion.div variants={landingTransitions.gallery.mainImg} id={styles.center} className={styles.landingImgContainer}>
                        <img src="/imgs/stock/team_page/ThyNicole_Portrait-cropped.jpg" alt=""/>
                    </motion.div>
                    <motion.div variants={landingTransitions.gallery.sideImg} className={styles.landingImgContainer}>
                        <img src="/imgs/stock/team_page/ajp-1017.jpg" alt=""/>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}