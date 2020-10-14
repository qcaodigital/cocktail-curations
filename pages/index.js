import React, { useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.scss';
import Link from 'next/link';

export default function Home({ isHamburgerMenuOpen }){
    return(
        <>
        <Head>
            <title>Home | Cocktail Curations</title>
        </Head>
        <main className={styles.Home}>
            <section className={styles.Home__landing}>
                <h1 className={styles.Home__heading}>Beautifully crafted cocktail bars for private and corporate events.</h1>
                <button className={styles.Home__CTA}>
                    <Link href='/about'>
                        <a>Learn About Us</a>
                    </Link>
                </button>
            </section>
        </main>
        </>
    )
}