import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <footer className={styles.Footer}>
            <h5>Curate your <span style={{display: 'inline-block'}}>experience today.</span></h5>
            <Link href='/contact'>
                <button className={styles.Footer__contactCTA}>
                    <a>Contact Us</a>
                </button>
            </Link>
            <ul className={styles.Footer__socialList}>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'facebook']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'twitter']}/></a>
                <a href=''><FontAwesomeIcon size='lg' icon={['fab', 'instagram']}/></a>
            </ul>
            <p>©2019 Cocktail Curations. All rights reserved.</p>
        </footer>
    )
}