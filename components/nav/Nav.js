import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import transitions from './NavTransitions';
import PropTypes from 'prop-types';

Nav.propTypes = {
    render: PropTypes.bool.isRequired,
    navList: PropTypes.array.isRequired,
    //CANNOT SET PROP TYPES FOR VIEWPORT BECAUSE IT IS NULL ON INITIAL RENDER
    // viewport: PropTypes.string.isRequired,
    navHeightCB: PropTypes.func.isRequired,
    hamburgerCB: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired
}

export default function Nav({render, navList, viewport, navHeightCB, hamburgerCB, currentPath, scrollThreshold}){
    //RENDER PROP IS TRUE ONCE INITIAL RENDER IN THE MAIN BODY COMPONENT HAPPENS SO THAT THE WINDOW OBJECT IS ACCESSIBLE TO THIS NAV COMPONENT ON FIRST REAL RENDER
    if(!render) return null;
    const navRef = useRef();

    //SEND TO MAIN STATE CONTEXT THE HEIGHT OF THE NAV EVERYTIME PATH CHANGES (IN CASE OF STYLE CHANGES DEPENDENT ON PATH AND VIEWPORT SIZE CHANGE)
    useEffect(() => {
        if(navRef.current !== null){
            navHeightCB(navRef.current.offsetHeight)
        }
    }, [viewport, currentPath, hideNav])

    //DETERMINE WHETHER OR NOT TO HIDE NAV BASED ON SCROLL THRESHOLD PROP
    //EACH PATH'S SCROLL THRESHOLD IS DEFINED IN A USEEFFECT HOOK IN THE MAIN BODY COMPONENT
    //DEFAULT THRESHOLD IS 120 PIXELS SCROLLED IF NOT DEFINED
    const [hideNav, setHideNav] = useState(false);
    useEffect(() => {
        function handleScroll(e){
            if(window.scrollY > scrollThreshold && !hideNav){
                setHideNav(true);
            } else if(window.scrollY < scrollThreshold && hideNav){
                setHideNav(false)
            }
        }   
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hideNav, currentPath])

    //HIDE NAV UNTIL LOADER ANIMATION IS COMPLETE
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setInitialRenderComplete(true)
        }, 3000);
    }, [])

    return (
        <>
        <AnimatePresence>
        {!hideNav && (
        <motion.nav id={styles.Nav}
            ref={ navRef }
            variants={transitions.mainFade}
            initial='hide'
            animate={initialRenderComplete ? 'show' : 'showWithDelay'}
            exit='exit'
        >
            {viewport !== 'mobile' && <img className={styles.leftIcon} src='/imgs/stock/logos/cc-icon-black.png' alt='Cocktail Curations Logo' />}
            <Link href='/'>
                <motion.a className={currentPath === '/' ? `DISABLED_LINK ${styles.brand}` : styles.brand}>
                    <img src="/imgs/stock/logos/cc-logo.png" alt="Cocktail Curations Logo"/>
                </motion.a>
            </Link>
            {viewport !== 'mobile' &&
            <ul className={styles.list}>
                {navList.map((item, idx) => (
                    <li 
                        key={item.label} 
                        className={styles.item}
                    >
                        {!item.external ? (
                            <Link href={item.href}><a className={item.active ? styles.active : null}>{item.label}</a></Link>
                        ) : (
                            <a className={item.active ? styles.active : null} href={item.href} target='_blank'>{item.label}</a>
                        )}
                    </li>
                ))}
            </ul>}
            <ul className={styles.socialList}>
                <a href='https://www.facebook.com/cocktailcurations/' target='_blank'>
                    <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'facebook']}/>
                </a>
                <a href='https://www.instagram.com/cocktailcurations/' target='_blank'>
                    <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'instagram']}/>
                </a>
                <a href='https://twitter.com/CocktailCurate' target='_blank'>
                    <FontAwesomeIcon size={viewport !== 'desktop' ? 'lg' : 'lg'} icon={['fab', 'twitter']}/>
                </a>
            </ul>
        </motion.nav>)}
        </AnimatePresence>
        {/* THE HAMBURGER BUTTON ELEMENT BELOW IS REMOVED FROM THE NAV COMPONENT SO THAT IT DOES NOT ANIMATE OUT ON 'NAV HIDE' */}
        {viewport === 'mobile' && (
        <motion.button
            onClick={hamburgerCB} 
            className={hideNav ? `${styles.scrolled} ${styles.hamburgerIcon}` : styles.hamburgerIcon}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={!initialRenderComplete ? { delay: 1 } : { delay: 0 }}
        >
            <div/>
            <div/>
            <div/>
        </motion.button>)}  
        </>
    )
}