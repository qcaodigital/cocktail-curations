import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './services.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes'
import Bars from '../components/services/Bars';
import Bases from '../components/services/Bases';
import constructRellax from '../helpers/constructRellax';
import MouseDirection from '../components/HOC/MouseDirection';
import smoothscroll from 'smoothscroll';
import { landingTransitions } from '../page_transitions/services';

export default function Services({ state }){
    const backgroundRellax = useRef();
    const classesRef = useRef();
    const barsRef = useRef();
    const basesRef = useRef();

    useEffect(() => constructRellax(backgroundRellax, {speed: -5}), [])
    const handleNavClick = (ref) => smoothscroll(ref.current.offsetTop, 1250);

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
            <motion.section animate='animate' initial='initial' className={styles.landing}>
                <motion.div variants={landingTransitions.serviceBox} className={styles.services_box}>
                    <motion.div variants={landingTransitions.serviceBoxChildren}>
                        <FontAwesomeIcon size='2x' icon={['fas', 'glass-cheers']}/>
                    </motion.div>
                    <motion.h1 variants={landingTransitions.serviceBoxChildren}>Our Services</motion.h1>
                    <motion.ul variants={landingTransitions.serviceBoxChildren} className={styles.services_list}>
                        <MouseDirection><li onClick={() => handleNavClick(classesRef)}>Cocktail Classes</li></MouseDirection>
                        <MouseDirection><li onClick={() => handleNavClick(barsRef)}>Experiential Bars</li></MouseDirection>
                        <MouseDirection><li onClick={() => handleNavClick(basesRef)}>Cocktail Bases</li></MouseDirection>
                    </motion.ul>
                </motion.div>
            </motion.section>
            <Copy viewport={state.viewport}/>
            <Bars ref={barsRef}/>
            <Classes ref={classesRef}/>
            <Bases ref={basesRef}/>
        </motion.main>
        </>
    )
}