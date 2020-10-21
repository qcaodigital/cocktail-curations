import React, { useState, useContext, useRef } from 'react';
import { StateContext } from '../components/common/Body';
import Head from 'next/head';
import styles from './Home.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from '../components/home/Gallery';
import Header from '../components/home/Header';
import { motion } from 'framer-motion'

export default function Home(){
    const state = useContext(StateContext);
    const { viewport, navHeight } = state;
    const landingSectionRef = useRef();
    return(
        <>
        <Head>
            <title>Home | Cocktail Curations</title>
        </Head>
        <motion.main className={styles.Home}>
            <section ref={landingSectionRef} className={styles.Home__landing}>
                <div id='NAV_SPACER' style={{ marginTop: navHeight}}/>
                <div className={styles.Home__headingContainer}>
                    <h1 className={styles.Home__heading}>Beautifully crafted <span style={{ display: 'inline-block'}}>cocktail bars</span></h1>
                    <h2 className={styles.Home__subheading}>for private and corporate events</h2>
                </div>
                <div className={styles.Home__CTAContainer}>
                    <button className={`${styles.Home__CTA} ${styles.black}`}>
                        <Link href='/about'>
                            <a>Learn About Us</a>
                        </Link>
                    </button>
                    <button className={styles.Home__CTA}>
                        <a href="http://www.cocktailcurations-shop.com" target='_blank'>Shop Our Products</a>
                    </button>
                </div>
                <div 
                    onClick={() => window.scrollTo({ top: landingSectionRef.current.offsetTop + landingSectionRef.current.offsetHeight - 100, behavior: 'smooth' })}className={styles.Home__chevronContainer}
                >
                    <div className={styles.Home__arrow}>
                        <div className={styles.Home__chevron}></div>
                        <div className={styles.Home__chevron}></div>
                    </div>
                    <div className={styles.Home__arrow}>
                        <div className={styles.Home__chevron}></div>
                        <div className={styles.Home__chevron}></div>
                    </div>
                </div>
            </section>
            <section className={styles.Home__info}>
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
            <section className={styles.Home__productFeature}>
                <Header 
                    header='Cocktail bases now available online!'
                    text='Our cocktail bases take your home bar to the next level. Made with artisanal and thoughtfully crafted flavors and prepared with fresh and sustainable ingredients, our cocktail bases are waiting to be shaken or stirred with your favorite spirit. Build the perfect beverage in minutes then top it all off with our included homemade garnishes and enjoy.'
                />
                <div className={styles.grid}>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/feature-1.jpg" alt="img"/>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/feature-2.jpg" alt="img"/>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/feature-3.jpg" alt="img"/>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/feature-4.jpg" alt="img"/>
                    </div>
                </div>
            </section>
        </motion.main>
        </>
    )
}

