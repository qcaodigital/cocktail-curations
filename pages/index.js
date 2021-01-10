import Link from 'next/link';
import styles from './Home.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { landingTransitions, headerTransitions } from './../page_transitions/home';
import FadeOnUnmount from './../components/HOC/FadeOnUnmount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { onTap } from './../page_transitions/common';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';

export default function Home({ pageAniStartCB, state: { isNavAniComplete, viewport }}){
    const headerVariant = headerTransitions.fadeIn;
    const onAniStart = useOnAniStartOnlyEntry(pageAniStartCB);
    return (
        <>
        <Head>
            <title>Welcome To Cocktail Curations</title>
        </Head>
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            id={styles.Home}
            onAnimationStart={onAniStart}
        >
            <section className={styles.landing}>
                <motion.section 
                    animate={isNavAniComplete ? 'animate' : 'initial'} 
                    initial='initial'
                    variants={landingTransitions.staggerContent}
                    id={styles.one}
                >
                    <div className={styles.bg} 
                        // src='/imgs/stock/home_page/bg-edge-trans2-min.png'
                    />
                    <motion.div variants={landingTransitions.line} className={styles.line}/>
                    <motion.img 
                        src="/imgs/stock/logos/cc-icon-logo-color.png" 
                        alt="Cocktail Curations Logo"
                        variants={landingTransitions.logo}
                        className={styles.logo}
                    />
                    <motion.header 
                        variants={headerTransitions.staggerHeader}
                    >   
                        <div style={{ overflow: 'hidden' }}>
                            <motion.p
                                variants={headerVariant}
                            >Beautifully crafted</motion.p>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.h1
                                variants={headerVariant}
                            >Cocktail Bars</motion.h1>
                        </div>
                        <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                            <motion.h2
                                variants={headerVariant}
                            >— for private</motion.h2>
                        </div>
                        <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                            <motion.h2
                                variants={headerVariant}
                                style={{ marginLeft: '.5vw'}}
                            > & corporate events</motion.h2>
                        </div>
                        <motion.div variants={headerTransitions.staggerHeader} className={styles.cta}>
                            <motion.button variants={headerTransitions.fadeIn} whileTap={{ scale: viewport !== 'desktop' ? .9 : 1 }}>
                                <Link scroll={false} href='/services'>
                                    <a className='STYLED_BTN'>What we do</a>
                                </Link>
                            </motion.button>
                            <motion.button variants={headerTransitions.fadeIn} whileTap={{ scale: viewport !== 'desktop' ? .9 : 1 }}>
                                <a className='STYLED_BTN'
                                    href='http://www.cocktailcurations-shop.com'
                                    target='_blank'
                                    rel='noopener referrer'
                                >
                                    <span>Our Shop</span>
                                </a>
                            </motion.button>
                        </motion.div>
                    </motion.header>
                </motion.section>
            </section>
        </motion.section>
        </>
    )
}