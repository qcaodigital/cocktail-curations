import Link from 'next/link';
import styles from './Home.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { landingTransitions, headerTransitions } from './../page_transitions/home';
import FadeOnUnmount from './../components/HOC/FadeOnUnmount';

export default function Home({ state: { isNavAniComplete, viewport }}){
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
        >
            <section className={styles.landing}>
                <div className={styles.sections}>
                    <motion.section 
                        animate={isNavAniComplete ? 'animate' : 'initial'} 
                        initial='initial'
                        variants={landingTransitions.staggerContent}
                        id={styles.one}
                    >
                        <div className={styles.bg}/>
                        <motion.div variants={landingTransitions.line} className={styles.line}/>
                        <motion.img 
                            src="/imgs/stock/logos/cc-icon-logo-color.png" 
                            alt="Cocktail Curations Logo"
                            variants={landingTransitions.logo}
                        />
                        <motion.header 
                            variants={headerTransitions.staggerHeader}
                        >   
                            <div style={{ overflow: 'hidden' }}>
                                <motion.p
                                    variants={headerTransitions.fadeUp}
                                >Beautifully crafted</motion.p>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.h1
                                    variants={headerTransitions.fadeUp}
                                >Cocktail Bars</motion.h1>
                            </div>
                            <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                                <motion.h2
                                    variants={headerTransitions.fadeUp}
                                >— for private</motion.h2>
                            </div>
                            <div style={{ overflow: 'hidden', display: 'inline-block' }}>
                                <motion.h2
                                    variants={headerTransitions.fadeUp}
                                    style={{ marginLeft: '.5vw'}}
                                > & corporate events</motion.h2>
                            </div>
                            <motion.div variants={headerTransitions.staggerHeader} className={styles.cta}>
                                <motion.button variants={headerTransitions.fadeIn}>
                                    <Link href='/services'>
                                        <a className='STYLED_BTN'>What we do</a>
                                    </Link>
                                </motion.button>
                                <motion.button variants={headerTransitions.fadeIn}>
                                    <a className='STYLED_BTN'
                                        href='http://www.cocktailcurations-shop.com'
                                        target='_blank'
                                        rel='noopener referrer'
                                    >
                                        Our Products
                                    </a>
                                </motion.button>
                            </motion.div>
                        </motion.header>
                    </motion.section>
                </div>
            </section>
        </motion.section>
        </>
    )
}