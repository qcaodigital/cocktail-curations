import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import transitions from './NavTransitions';

export default function Nav({render, navList, viewport, navHeightCB, hamburgerCB, route }){
    if(!render) return null;
    const navRef = useRef();

    useEffect(() => {
        if(navRef.current !== null){
            navHeightCB(navRef.current.offsetHeight)
        }
    }, [viewport])

    const [hideNav, setHideNav] = useState(false);
    useEffect(() => {
        function handleScroll(e){
            const scrollThreshold = 120;
            if(window.scrollY > scrollThreshold && !hideNav){
                setHideNav(true);
            } else if(window.scrollY < scrollThreshold && hideNav){
                setHideNav(false)
            }
        }   
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hideNav])

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
                <motion.a className={styles.brand}>
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
        {viewport === 'mobile' && (
        <motion.button
            className={`${styles.hamburgerIcon} ${styles.fixed}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={!initialRenderComplete ? { delay: 1 } : { delay: 0 }}
        >
            <FontAwesomeIcon 
                onClick={hamburgerCB} 
                size='lg' 
                icon={['fas', 'bars']} 
            />
        </motion.button>)}  
        </>
    )
}