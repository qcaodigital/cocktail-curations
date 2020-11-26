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

Nav.propTypes = {
    render: PropTypes.bool.isRequired,
    navList: PropTypes.array.isRequired,
    viewport: PropTypes.oneOf(['mobile', 'tablet', 'desktop', null]),
    hamburgerCB: PropTypes.func.isRequired,
    currentPath: PropTypes.oneOf([...navList.map(nav => nav.href)]).isRequired
}

export default function Nav({render, navList, viewport, hamburgerCB, currentPath, scrollThreshold, navHeight, navHeightCB}){
    //RENDER PROP IS TRUE ONCE INITIAL RENDER IN THE MAIN BODY COMPONENT HAPPENS SO THAT THE WINDOW OBJECT IS ACCESSIBLE TO THIS NAV COMPONENT ON FIRST REAL RENDER
    if(!render) return null;
    const navRef = useRef();
    
    //DETERMINE WHETHER OR NOT TO HIDE NAV BASED ON SCROLL THRESHOLD PROP
    //EACH PATH'S SCROLL THRESHOLD IS DEFINED IN A USEEFFECT HOOK IN THE MAIN BODY COMPONENT
    //DEFAULT THRESHOLD IS 120 PIXELS SCROLLED IF NOT DEFINED
    const [minimizeNav, setMinimizeNav] = useState(false);
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
    }, [minimizeNav, currentPath])

    //DETERMINE HEIGHT OF FIXED NAV FOR SPACER USAGE
    useEffect(() => navHeightCB(navRef.current.offsetHeight), []) //ONLOAD
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
            className={minimizeNav ? styles.min : null}
            ref={ navRef }
            variants={transitions.mainFade}
            initial='hide'
            animate={initialRenderComplete ? 'show' : 'showWithDelay'}
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
                    <a href='https://www.facebook.com/cocktailcurations/' target='_blank'>
                        <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'facebook']}/>
                    </a>
                    <a href='https://www.instagram.com/cocktailcurations/' target='_blank'>
                        <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'instagram']}/>
                    </a>
                    <a href='https://twitter.com/CocktailCurate' target='_blank'>
                        <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'twitter']}/>
                    </a>
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