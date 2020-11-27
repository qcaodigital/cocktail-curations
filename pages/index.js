import React, { useContext, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './home.module.scss';
import Link from 'next/link';
import Gallery from '../components/home/Gallery';
import Header from '../components/home/Header';
import FeatureItems from '../components/home/FeatureItems';
import { motion } from 'framer-motion';
import { landingTransitions } from '../page_transitions/home';
import constructRellax from '../helpers/constructRellax';
import smoothscroll from 'smoothscroll';
import featureItems from '../data/Home_featureItems';

export default function Home({ state: { viewport, navHeight }, NAV_SPACER }){
    const landingSectionRef = useRef();

    const bgRef = useRef();
    useEffect(() => constructRellax(bgRef, { speed: -6 }), [])

    return(
        <>
        <Head>
            <title>Home | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Home}
            exit={{ opacity: 0 }} 
            transition={{ duration: .5 }}
        >
            <motion.div 
                initial='initial'
                animate='animate'
                variants={landingTransitions.background}
                className={styles.backgroundContainer}
            >
                <div ref={bgRef} className={styles.background}/>
            </motion.div>
            {NAV_SPACER}
            <motion.section 
                ref={landingSectionRef} 
                className={styles.landing}
                style={{ minHeight: `calc(100vh - ${navHeight ? navHeight : 0}px)`}}
                animate='animate'
                initial='initial'
            >
                <div className={styles.headingContainer}>
                    <motion.h1 
                        variants={landingTransitions.headingContainer}
                        className={styles.heading}
                    >
                        <motion.div variants={landingTransitions.textFadeUp} className={styles.small}>Beatifully crafted</motion.div>
                        <motion.div variants={landingTransitions.textFadeUp}>cocktail bars</motion.div>
                        <motion.div variants={landingTransitions.textFadeUp}><span className={styles.it}>—for</span>corporate</motion.div>
                        <motion.div variants={landingTransitions.textFadeUp}><span className={styles.it}>and</span> private events</motion.div>
                    </motion.h1>
                </div>
                <motion.div 
                    className={styles.CTAContainer}
                    variants={landingTransitions.CTAContainer}
                >
                    <button className='STYLED_BTN' style={{
                        backgroundColor: 'var(--main-color)'
                    }}>
                        <Link href='/about'>
                            <a>Learn About Us</a>
                        </Link>
                    </button>
                    <button className='STYLED_BTN'>
                        <a href="http://www.cocktailcurations-shop.com" target='_blank'>Shop Our Products</a>
                    </button>
                </motion.div>
                <motion.div 
                    onClick={() => smoothscroll(landingSectionRef.current.offsetTop + landingSectionRef.current.offsetHeight - 100, 1250)}
                    className={styles.chevronContainer}
                    variants={landingTransitions.CTAContainer}
                >
                    <div className={styles.arrow}>
                        <div className={styles.chevron}></div>
                        <div className={styles.chevron}></div>
                    </div>
                    <div className={styles.arrow}>
                        <div className={styles.chevron}></div>
                        <div className={styles.chevron}></div>
                    </div>
                </motion.div>
            </motion.section>
            <section className={styles.info}>
                <Header header="Curate— it's in our name." text='We provide a wide range of knowledge and services, including technical education and training in: spirits, mixology, and recipe creation, developing cocktail menus, designing thoughtfully garnished cocktail, and curating mind-blowing cocktails with or without alcohol.'/>
                <Gallery 
                    viewport={viewport}
                    imgs={[
                        {
                            url: "/imgs/stock/home_page/IMG_9431-sq.jpg", 
                            alt: 'Cocktail Curations Molecular Bar Book Of Lists 2020'
                        }, 
                        {
                            url: "/imgs/stock/home_page/weddingprodc-sq.jpg",
                            alt: 'Wedding Pro DC Cocktail Curations',
                            card: {
                                header: 'Experiential Bars', subheader: 'Enjoy our', href: '/events'
                            }
                        }
                    ]}
                />
                <Gallery 
                    viewport={viewport}
                    imgs={[
                        {
                            url: "/imgs/stock/home_page/IMG_1730.jpg", 
                            alt: 'Cocktail Curations Virtual Class'
                        }, 
                        {
                            url: "/imgs/stock/home_page/IMG_0540.jpg",
                            alt: 'Cocktail Curations Class At Kentlands Clubhouse',
                            card: {
                                header: 'Cocktail Classes', subheader: 'Learn In Our', href: '/events'
                            }
                        }
                    ]}
                    reverse={true}
                />
            </section>
            <section className={styles.productFeature}>
                <Header 
                    header='Cocktail bases now available online!'
                    text='Our cocktail bases take your home bar to the next level. Made with artisanal and thoughtfully crafted flavors and prepared with fresh and sustainable ingredients, our cocktail bases are waiting to be shaken or stirred with your favorite spirit. Build the perfect beverage in minutes then top it all off with our included homemade garnishes and enjoy.'
                />
                <FeatureItems items={ featureItems } viewport={viewport}/>
            </section>
        </motion.main>
        </>
    )
}

