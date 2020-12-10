import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import transitions from './NavTransitions';
import PropTypes from 'prop-types';
import FadeOnUnmount from '../HOC/FadeOnUnmount';
import navList from './../../data/navList';
import SocialList from './SocialList';

Nav.propTypes = {
    render: PropTypes.bool.isRequired,
    navList: PropTypes.array.isRequired,
    viewport: PropTypes.oneOf(['mobile', 'tablet', 'desktop', null]),
    hamburgerCB: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    navHeight: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
    navHeightCB: PropTypes.func.isRequired,
    navAniCompletionCB: PropTypes.func.isRequired
}

export default function Nav({render, navList, viewport, hamburgerCB, router, navHeight, navHeightCB, navAniCompletionCB }){
    //RENDER PROP IS TRUE ONCE INITIAL RENDER IN THE MAIN BODY COMPONENT HAPPENS SO THAT THE WINDOW OBJECT IS ACCESSIBLE TO THIS NAV COMPONENT ON FIRST REAL RENDER
    if(!render) return null;
    const navRef = useRef();
    
    //DETERMINE WHETHER OR NOT TO HIDE NAV BASED ON SCROLL THRESHOLD PROP
    //EACH PATH'S SCROLL THRESHOLD IS DEFINED IN A USEEFFECT HOOK IN THE MAIN BODY COMPONENT
    //DEFAULT THRESHOLD IS 120 PIXELS SCROLLED IF NOT DEFINED
    const [minimizeNav, setMinimizeNav] = useState(true);
    const scrollThreshold = 100;
    useEffect(() => {
        function handleMinimizeNavOnScroll(){
            if(window.scrollY > scrollThreshold && !minimizeNav){
                setMinimizeNav(true);
            } else if(window.scrollY < scrollThreshold && minimizeNav){
                setMinimizeNav(false)
            }
        }

        window.addEventListener('scroll', handleMinimizeNavOnScroll)
        return () => window.removeEventListener('scroll', handleMinimizeNavOnScroll)
    }, [minimizeNav, router])

    //DETERMINE HEIGHT OF FIXED NAV FOR SPACER USAGE
    useEffect(() => {
        setTimeout(() => {
            navHeightCB(navRef.current.offsetHeight)
        }, 350)
    }, [router])
    
    useEffect(() => {
        setTimeout(() => {
            if(!minimizeNav){
                navHeightCB(navRef.current.offsetHeight);
            }
        }, 350); //SET TO 350MS TO ALLOW NAV TO COMPLETE ANIMATION (FRAMER MOTION DEFAULT OF 350MS) AND THEN CAPTURE NAVHEIGHT
    }, [viewport, minimizeNav])

    //HIDE NAV UNTIL LOADER ANIMATION IS COMPLETE
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setInitialRenderComplete(true)
        }, 3000);
    }, [])

    return (
        <motion.nav id={styles.Nav}
            className={minimizeNav || router.pathname === '/' ? styles.min : null}
            data-path={viewport !== 'mobile' ? router.pathname : null}
            ref={ navRef }
            variants={transitions.mainFade}
            initial='hide'
            animate={initialRenderComplete ? 'show' : 'showWithDelay'}
            onAnimationComplete={() => navAniCompletionCB()}
        >
            <FadeOnUnmount unmountIf={viewport === 'mobile' || minimizeNav} dontAnimate={minimizeNav}>
                <motion.img 
                    className={styles.leftIcon} 
                    src='/imgs/stock/logos/cc-icon-black.png'
                    alt='Cocktail Curations Logo' 
                />
            </FadeOnUnmount>
            <FadeOnUnmount unmountIf={viewport === 'mobile' && minimizeNav}>
                <motion.div className={minimizeNav ? `${styles.brand} ${styles.min}` : styles.brand}>
                    <Link href='/'>
                        {minimizeNav ? (
                            <a><img src="/imgs/stock/logos/cc-logo-min2.png" alt="Cocktail Curations Logo"/></a>
                        ) : (
                            <a><img src="/imgs/stock/logos/cc-logo.png" alt="Cocktail Curations Logo"/></a>
                        )}
                    </Link>
                </motion.div>
            </FadeOnUnmount>       
            <FadeOnUnmount unmountIf={viewport === 'mobile'}>
                <motion.ul className={minimizeNav ? `${styles.list} ${styles.min}` : styles.list}>
                    {navList.map((item, idx) => (
                        <li key={item.label} className={styles.item}>
                            {!item.external ? (
                                <Link href={item.href}><a className={item.active ? styles.active : null}>{item.label}</a></Link>
                            ) : (
                                <a className={item.active ? styles.active : null} href={item.href} target='_blank'>{item.label}</a>
                            )}
                        </li>
                    ))}
                </motion.ul>
            </FadeOnUnmount>
            <FadeOnUnmount unmountIf={minimizeNav} dontAnimate={viewport !== 'mobile'}>
                <motion.ul className={styles.socialList}>
                    <SocialList/>
                </motion.ul>
            </FadeOnUnmount>
            <FadeOnUnmount unmountIf={viewport !== 'mobile'}>
                <motion.button
                    onClick={hamburgerCB} 
                    className={styles.hamburgerIcon}
                >
                    <div/>
                    <div/>
                    <div/>
                    <p>MENU</p>
                </motion.button>
            </FadeOnUnmount>
        </motion.nav>
    )
}