import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav({ render, navList, viewport, isHamburgerOpen, hamburgerCB }){
    if(!render) return null;
    const [navRef, inView] = useInView();
    const inViewClass = inView ? styles.inView : null;

    const navItems = navList.map((item, idx) => (
        <li 
            key={item.label} 
            className={`${styles.Nav__item} ${inViewClass}`}
        >
            {!item.external && <Link href={item.href}><a className={item.active && styles.active} >{item.label}</a></Link>}
            {item.external && <a className={item.active && styles.active} href={item.href} target='_blank'>{item.label}</a>}
        </li>
    ))

    return (
        <nav ref={ navRef } className={styles.Nav}>
            {viewport === 'mobile' && 
            <button className={`${styles.Nav__hamburgerIcon} ${inViewClass}`}>
                <FontAwesomeIcon 
                    onClick={hamburgerCB} 
                    size='lg' 
                    icon={['fas', 'bars']} 
                />
            </button>}
            <Link href='/'>
                <a className={`${styles.Nav__brand} ${inViewClass}`}><img src="/imgs/stock/logos/cc-logo.png" alt="Cocktail Curations Logo"/></a>
            </Link>
            {viewport !== 'mobile' &&
            <ul className={styles.Nav__list}>
                {navItems}
            </ul>}
            <ul className={`${styles.Nav__socialList} ${inViewClass}`}>
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