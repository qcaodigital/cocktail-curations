import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import transitions from './NavTransitions';

export default function Nav({ render, navList, viewport, isHamburgerOpen, hamburgerCB, navHeightCB }){
    if(!render) return null;
    const inViewClass = 'hello';
    const navRef = useRef();

    const navItems = navList.map((item, idx) => (
        <motion.li key={item.label} className={styles.Nav__item} variants={transitions.navList}>
            {!item.external && <Link href={item.href}><a className={item.active ? styles.active : null}>{item.label}</a></Link>}
            {item.external && <a className={item.active ? styles.active : null} href={item.href} target='_blank'>{item.label}</a>}
        </motion.li>
    ))

    useEffect(() => {
        navHeightCB(navRef.current.offsetHeight)
    }, [viewport])

    const [hideNav, setHideNav] = useState(false);
    useEffect(() => {
        function handleScroll(e){
            const scrollThreshold = 100;
            if(window.scrollY > scrollThreshold && !hideNav){
                setHideNav(true);
            } else if(window.scrollY < scrollThreshold && hideNav){
                setHideNav(false)
            }
        }   
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hideNav])

    return (
        <motion.nav 
            ref={ navRef } 
            className={`${styles.Nav}`}
            variants={transitions.nav}
            initial='hide'
            animate={hideNav ? 'hide' : 'show'}
        >
            {viewport === 'mobile' ? (
                <motion.button className={styles.Nav__hamburgerIcon}>
                    <FontAwesomeIcon 
                        onClick={hamburgerCB} 
                        size='lg' 
                        icon={['fas', 'bars']} 
                    />
                </motion.button>  
                ) : (
                <img className={styles.Nav__leftIcon} src='/imgs/stock/logos/cc-icon-black.png' alt='Cocktail Curations Logo' />
            )}
            <Link href='/'>
                <a className={styles.Nav__brand}><img src="/imgs/stock/logos/cc-logo.png" alt="Cocktail Curations Logo"/></a>
            </Link>
            {viewport !== 'mobile' &&
            <motion.ul 
                className={styles.Nav__list}
                variants={transitions.navList}
                initial='hide'
                animate={ hideNav ? 'hide' : 'show' }
            >
                {navItems}
            </motion.ul>}
            <ul className={styles.Nav__socialList}>
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
        </motion.nav>
    )
}