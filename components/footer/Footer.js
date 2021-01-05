import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import SocialList from './../nav/SocialList';

Footer.propTypes = {
    navList: PropTypes.array.isRequired
}

export default function Footer({ navList }){
    const footerNav = navList.map(link => (
        <li key={link.label}>
            <Link href={link.href}><a className={link.active ? styles.active : null}>{link.label}</a></Link>
        </li>
    ))

    return(
        <footer id={styles.Footer}>
            <div className={styles.CTA_nav_container}>
                <section className={styles.CTA}>
                    <h2>Curate your <span style={{display: 'inline-block'}}>experience today.</span></h2>
                    <p>Join the hundreds of people who've enjoyed a marvelous beverage with us.</p>
                    <Link href='/contact'>
                        <button className='STYLED_BTN'>
                            <a>Contact Us Now</a>
                        </button>
                    </Link>
                </section>
                <section className={styles.nav}>
                    <ul id={styles.contact} className={styles.nav__section}>
                        <li><h3 className={styles.header}>Reach Out</h3></li>
                        <li><p>Thy Parra</p></li>
                        <li><p>Founder</p></li>
                        <li><a className={styles.tel} href='tel:202 957 2846'>202.957.2846</a></li>
                        <li><a className={styles.tel} href='mailto:thy@cocktailcurations.com'>thy@cocktailcurations.com</a></li>
                        <li className={styles.blank}><p>""</p></li>
                        <li><p>Nicole Hassoun</p></li>
                        <li><p>Founder</p></li>
                        <li><a className={styles.tel} href='tel:202 577 5376'>202.577.5376</a></li>
                        <li><a className={styles.tel} href='mailto:nicole@cocktailcurations.com'>nicole@cocktailcurations.com</a></li>
                    </ul>
                    <ul id={styles.nav} className={styles.nav__section}>
                        <li><h3 className={styles.header}>Menu</h3></li>
                        { footerNav }
                    </ul>
                </section>
            </div>
            <section className={styles.socialCopyright}>
                <ul className={styles.socialList}>
                    <SocialList />
                </ul>
                <p>©2019 Cocktail Curations. All rights reserved.</p>
            </section>
        </footer>
    )
}