import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Services.module.scss';
import { NAV_SPACER } from '../components/common/Body';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rellax from 'rellax';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes'
import Bars from '../components/services/Bars';

export default function Services(){
    const backgroundRellax = useRef();
    const classesRef = useRef();
    const barsRef = useRef();

    useEffect(() => {
        new Rellax(backgroundRellax.current, {speed: -5})
    }, [])

    function handleNavClick(ref){
        window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})
    }

    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Services} 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
        >
            <div className={styles.backgroundContainer}>
                <div ref={backgroundRellax} className={styles.background}/>
            </div>
            <section className={styles.landing}>
                <NAV_SPACER />
                <div className={styles.services_box}>
                    <FontAwesomeIcon size='2x' icon={['fas', 'glass-cheers']}/>
                    <h1>Our Services</h1>
                    <ul className={styles.services_list}>
                        <li onClick={() => handleNavClick(classesRef)}>Cocktail Classes</li>
                        <li onClick={() => handleNavClick(barsRef)}>Experiential Bars</li>
                        <li>Cocktail Bases</li>
                    </ul>
                </div>
            </section>
            <Copy />
            <Classes ref={classesRef}/>
            <Bars ref={barsRef}/>
        </motion.main>
        </>
    )
}