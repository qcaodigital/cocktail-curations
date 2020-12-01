import { useEffect, useRef, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './team.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constructRellax from '../helpers/constructRellax';
import Person from '../components/team/Person';
import Story from '../components/team/Story';
import Personnel from '../components/team/Personnel';
import Sustainability from '../components/team/Sustainability';
import ArrowDivider from '../components/common/ArrowDivider';
import FadeInViewContainer from '../components/HOC/FadeInViewContainer';
import { landingTransitions, infoTransitions } from '../page_transitions/team';
import useInViewFromTop from '../custom_hooks/useInViewFromTop';

export default function Team({ state: { viewport }, NAV_SPACER }){
    const bg1Ref = useRef();
    useEffect(() => constructRellax(bg1Ref, {speed: -5, center: false}), []) 

    const bg2Ref = useRef();
    useEffect(() => constructRellax(bg2Ref, {speed: -2, center: true}), []) 

    const infoRef = useRef();
    const infoInView = useInViewFromTop(infoRef, { threshold: .25 })

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: -.1 })

    return (
        <>
        <Head>
            <title>Our Team | Cocktail Curations</title>
        </Head>
        <motion.main 
            id={styles.Team}
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: .75 }}
        >
            <motion.section animate='animate' initial='initial' className={styles.landing}>
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
                            <FadeInViewContainer animateOnly>
                                <p><span>We</span> are</p>
                            </FadeInViewContainer>
                            <FadeInViewContainer animateOnly>
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
            <Story viewport={viewport} />
            <section className={styles.info}>
                <ArrowDivider 
                    size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                    BGcolor='#D7DBD6' 
                    border={{size: 1, color: 'rgba(175 ,175, 175)'}} 
                />    
                <div className={styles.contentContainer}>
                    <div ref={infoRef} className={styles.text}>
                        <FadeInViewContainer>
                            <h3>The Duo</h3>
                        </FadeInViewContainer>
                        <motion.p animate={infoInView ? 'animate' : 'initial'} variants={infoTransitions.contentContainer.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt ex tempore minus laborum architecto accusantium aliquid illum explicabo incidunt autem voluptatem quia, mollitia porro, aspernatur ut ullam cumque ipsum quam! Libero nobis mollitia enim porro voluptates exercitationem repellendus eos nemo aliquam quas perferendis, quis distinctio, sequi necessitatibus voluptatum ducimus, quod modi.</motion.p>
                        <Link href='/contact'>
                            <a>
                                <p>Connect With Us →</p>
                                <motion.div 
                                    animate={infoInView ? 'animate' : 'initial'}
                                    variants={infoTransitions.contentContainer.link} 
                                    className={styles.underline}
                                />
                            </a>
                        </Link>
                    </div>
                    <div ref={imgRef} className={styles.img}>
                        <motion.img
                            animate={imgInView ? 'animate' : 'initial'}    
                            variants={infoTransitions.contentContainer.img} 
                            src={`/imgs/stock/team_page/thy_nicole_bookoflists.jpg`} 
                            alt='Cocktail Curations Owner Thy Parra & Nicole Hassoun At Book of Lists 2020'
                        />
                    </div>
                </div>
                <div className={styles.divider}>
                    <img src="/imgs/embellishments/divider.png" alt="line divider"/>
                </div>
            </section>
            <Personnel/>
            <Sustainability viewport={viewport}/>
        </motion.main>
        </>
    )
}