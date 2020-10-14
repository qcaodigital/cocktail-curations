import React, { useState } from 'react';
import styles from './HamburgerMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

export default function HamburgerMenu({ isHamburgerMenuOpen, navList, toggleHBM }){
    const navItems = navList.map((item, idx) => (
        <li key={item.label} className={styles.HamburgerMenu__navItem}>
            <a href={item.href} 
                className={`${styles.HamburgerMenu__navItemLink} ${item.active && styles.active}`}
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
        <nav className={styles.HamburgerMenu}>
            <button onClick={toggleHBM} className={styles.HamburgerMenu__closeIcon} >
                <FontAwesomeIcon size='lg' icon={['fas', 'times']}/>
            </button>
            <img className={styles.HamburgerMenu__brand} src='/imgs/stock/logos/cc-icon-black.svg' alt="Cocktail Curations Logo Icon Olive"/>
            <ul className={styles.HamburgerMenu__navList}>
                {navItems}
            </ul>
            <ul className={`${styles.HamburgerMenu__socialList}`}>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'facebook']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'twitter']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'instagram']}/></a>
            </ul>
            <p className={styles.HamburgerMenu__footer}>©2019 Cocktail Curations. All rights reserved.</p>
        </nav>
        </CSSTransition>
    )
}