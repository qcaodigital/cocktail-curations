import React, { useContext, useEffect, useRef } from 'react';
import { StateContext, NAV_SPACER } from '../components/common/Body';
import Head from 'next/head';
import styles from './Home.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from '../components/home/Gallery';
import Header from '../components/home/Header';
import FeatureItems from '../components/home/FeatureItems';
import { motion } from 'framer-motion';
import transitions from '../page_transitions/home';

const feature_row_items = [
    {
        src: '/imgs/stock/feature-1.jpg',
        alt: 'Cocktail Curations Smoked Orange Maple Old Fashioned Base',
        label: 'Old Fashioned Cocktail Base',
        url: 'https://www.cocktailcurations-shop.com/collections/cocktail-bases/products/old-fashioned-cocktail-base',
        focus: { x: '53%', y: '38%' },
        arrowPos: 'bottomLeft'
    },
    {
        src: '/imgs/stock/feature-2.jpg',
        alt: 'Cocktail Curations Key Lime Basil Base',
        label: 'Key Lime Basil Cocktail Base',
        url: 'https://www.cocktailcurations-shop.com/collections/cocktail-bases/products/lemon-thyme-elderflower-tonic',
        focus: { x: '70%', y: '43%' },
        arrowPos: 'topRight'
    },
    {
        src: '/imgs/stock/feature-3.jpg',
        alt: 'Cocktail Curations Orange Crush Base',
        label: 'Orange Crush Cocktail Base',
        url: 'https://www.cocktailcurations-shop.com/collections/cocktail-bases/products/orange-crush-cocktail-base',
        focus: { x: '35%', y: '35%' },
        arrowPos: 'topLeft'
    },
    {
        src: '/imgs/stock/feature-4.jpg',
        alt: 'Cocktail Curations Spiced Pear Base',
        label: 'Spiced Pear Cocktail Base',
        url: 'https://www.cocktailcurations-shop.com/collections/cocktail-bases/products/spiced-pear-cocktail-base',
        focus: { x: '50%', y: '25%' },
        arrowPos: 'bottomRight'
    }
]

export default function Home(){
    const state = useContext(StateContext);
    const { viewport, navHeight } = state;
    const landingSectionRef = useRef();

    return(
        <>
        <Head>
            <title>Home | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Home} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0, duration: 1 }} 
                className={styles.background}
            />
            <section ref={ landingSectionRef } className={styles.landing}>
                <NAV_SPACER/>
                <motion.div 
                    className={styles.headingContainer}
                    variants={transitions.headingContainer}
                    initial='initial'
                    animate='animate'
                >
                    <motion.div className={styles.headingBorder} variants={transitions.fadeUp}/>
                    <motion.h1 
                        variants={transitions.fadeUp} 
                        className={styles.heading}
                    >
                        Beautifully crafted <span style={{ display: 'inline-block'}}>cocktail bars</span>
                    </motion.h1>
                    <motion.h2 
                        variants={transitions.fadeUp} 
                        className={styles.subheading}
                    >
                        for private and corporate events
                    </motion.h2>
                    <motion.div className={styles.headingBorder} variants={transitions.fadeUp}/>
                </motion.div>
                <motion.div 
                    className={styles.CTAContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: .75 }}
                >
                    <motion.button className={`${styles.CTA} ${styles.black}`}>
                        <Link href='/about'>
                            <a>Learn About Us</a>
                        </Link>
                    </motion.button>
                    <motion.button className={styles.CTA}>
                        <a href="http://www.cocktailcurations-shop.com" target='_blank'>Shop Our Products</a>
                    </motion.button>
                </motion.div>
                <motion.div 
                    onClick={() => window.scrollTo({ top: landingSectionRef.current.offsetTop + landingSectionRef.current.offsetHeight - 100, behavior: 'smooth' })}
                    className={styles.chevronContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: .75 }}
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
            </section>
            <section className={styles.info}>
                <Header header="Curate— it's in our name." text='We provide a wide range of knowledge and services, including technical education and training in: spirits, mixology, and recipe creation, developing cocktail menus, designing thoughtfully garnished cocktail, and curating mind-blowing cocktails with or without alcohol.'/>
                <Gallery 
                    imgs={[
                        {
                            url: "/imgs/stock/JPEG/IMG_9431-sq.jpg", 
                            alt: 'Cocktail Curations Molecular Bar Book Of Lists 2020'
                        }, 
                        {
                            url: "/imgs/stock/JPEG/weddingprodc-sq.jpg",
                            alt: 'Wedding Pro DC Cocktail Curations',
                            card: {
                                header: 'Experiential Bars', subheader: 'Enjoy our', href: '/events'
                            }
                        }
                    ]}
                />
                <Gallery 
                    imgs={[
                        {
                            url: "/imgs/stock/JPEG/IMG_1730.jpg", 
                            alt: 'Cocktail Curations Virtual Class'
                        }, 
                        {
                            url: "/imgs/stock/JPEG/IMG_0540.jpg",
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
                <FeatureItems items={ feature_row_items } viewport={viewport}/>
            </section>
        </motion.main>
        </>
    )
}

