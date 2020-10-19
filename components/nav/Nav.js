import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav({ render, navList, viewport, isHamburgerOpen, hamburgerCB, navHeightCB }){
    if(!render) return null;
    const inViewClass = 'hello';
    const navRef = useRef();

    const navItems = navList.map((item, idx) => (
        <li key={item.label} className={styles.Nav__item}>
            {!item.external && <Link href={item.href}><a className={item.active ? styles.active : null}>{item.label}</a></Link>}
            {item.external && <a className={item.active ? styles.active : null} href={item.href} target='_blank'>{item.label}</a>}
        </li>
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
        <nav ref={ navRef } className={`${styles.Nav} ${hideNav ? styles.hidden : null}`}>
            {viewport === 'mobile' ? (
                <button className={styles.Nav__hamburgerIcon}>
                    <FontAwesomeIcon 
                        onClick={hamburgerCB} 
                        size='lg' 
                        icon={['fas', 'bars']} 
                    />
                </button>  
                ) : (
                <img className={styles.Nav__leftIcon} src='/imgs/stock/logos/cc-icon-black.png' alt='Cocktail Curations Logo' />
            )}
            <Link href='/'>
                <a className={styles.Nav__brand}><img src="/imgs/stock/logos/cc-logo.png" alt="Cocktail Curations Logo"/></a>
            </Link>
            {viewport !== 'mobile' &&
            <ul className={styles.Nav__list}>
                {navItems}
            </ul>}
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
        </nav>
    )
}