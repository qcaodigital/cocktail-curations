import Head from 'next/head';
import styles from './Services.module.scss';
import { NAV_SPACER } from '../components/common/Body';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rellax from 'rellax';
import { useEffect, useRef } from 'react';

export default function Services(){
    const rellaxRef = useRef();

    useEffect(() => {
        new Rellax(rellaxRef.current, {
            speed: 1
        })
    }, [])

    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Services} initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={styles.background}/>
            <div className={styles.landing}>
                <NAV_SPACER />
                <div ref={rellaxRef} className={styles.services_box}>
                    <FontAwesomeIcon size='2x' icon={['fas', 'glass-cheers']}/>
                    <h1>Our Services</h1>
                    <ul className={styles.services_list}>
                        <li>Cocktail Classes</li>
                        <li>Experiential Bars</li>
                        <li>Cocktail Bases</li>
                    </ul>
                </div>
            </div>
        </motion.main>
        </>
    )
}