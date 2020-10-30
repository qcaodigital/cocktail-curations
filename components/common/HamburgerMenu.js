import React, { useState } from 'react';
import styles from './HamburgerMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

export default function HamburgerMenu({ isHamburgerMenuOpen, navList, toggleHBM }){
    const navItems = navList.map((item, idx) => (
        <li key={item.label} className={styles.navItem}>
            <a href={item.href} 
                className={`${styles.link} ${item.active && styles.active}`}
            >
                {item.label}
            </a>
        </li>
    ))

    return (
        <CSSTransition
            in={isHamburgerMenuOpen}
            timeout={500}
            unmountOnExit
            classNames={{ ...styles }}   
        >
        <nav id={styles.HamburgerMenu}>
            <button onClick={toggleHBM} className={styles.closeIcon} >
                <FontAwesomeIcon size='lg' icon={['fas', 'times']}/>
            </button>
            <img className={styles.brand} src='/imgs/stock/logos/cc-icon-black.svg' alt="Cocktail Curations Logo Icon Olive"/>
            <ul className={styles.navList}>
                {navItems}
            </ul>
            <ul className={`${styles.socialList}`}>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'facebook']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'twitter']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'instagram']}/></a>
            </ul>
            <p className={styles.footer}>©2019 Cocktail Curations. All rights reserved.</p>
        </nav>
        </CSSTransition>
    )
}