import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navList } from '../common/Body';

export default function Footer(){
    const footerNav = navList.map(link => (
        <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
    ))

    return(
        <footer id={styles.Footer}>
            <div className={styles.CTA_nav_container}>
                <section className={styles.CTA}>
                    <h5>Curate your <span style={{display: 'inline-block'}}>experience today.</span></h5>
                    <p>Join the hundreds of people who've enjoyed a marvelous beverage with us.</p>
                    <Link href='/contact'>
                        <button>
                            <a>Contact Us Now</a>
                        </button>
                    </Link>
                </section>
                <section className={styles.nav}>
                    <ul id={styles.contact} className={styles.nav__section}>
                        <li><h3 className={styles.header}>Contact Us</h3></li>
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
                    <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'facebook']}/></a>
                    <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'twitter']}/></a>
                    <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'instagram']}/></a>
                </ul>
                <p>©2019 Cocktail Curations. All rights reserved.</p>
            </section>
        </footer>
    )
}