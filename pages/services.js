import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './services.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes'
import Bars from '../components/services/Bars';
import Bases from '../components/services/Bases';
// import constructRellax from '../helpers/constructRellax';
import MouseDirection from '../components/HOC/MouseDirection';
import smoothscroll from 'smoothscroll';
import { landingTransitions } from '../page_transitions/services';
import MouseSprite from '../components/common/MouseSprite';

export default function Services({ state: { viewport }}){
    const classesRef = useRef();
    const barsRef = useRef();
    const basesRef = useRef();

    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Services} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <motion.section animate='animate' initial='initial' className={styles.landing}>
                <div className={styles.imgContainer}>
                    <MouseSprite clickCB={() => alert('Some scroll event should happen here')}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.textContainer}>
                        {viewport === 'mobile' && <h2>Learn about</h2>}
                        <h2>our services</h2>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon size='lg' icon={['fas', 'glass-cheers']}/>
                        </div>
                    </div>
                </div>
                {viewport === 'mobile' && <div className={`${styles.info} ${styles.secondary}`}>
                    <div className={styles.infoContainer}>
                        <div className={styles.imgContainer}>
                            <img src="/imgs/stock/services_page/landing_block.jpg" alt=""/>
                        </div>
                        <div className={styles.textContainer}>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla rem maiores repellat earum blanditiis modi dolore error,.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla rem maiores repellat earum blanditiis modi dolore error,.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem, ipsum dolor sit amet consectetur.</li>
                                <li>Lorem, ipsum dolor ipsum dolor.</li>
                            </ul>
                        </div>
                    </div>
                </div>}
            </motion.section>
            <Copy viewport={viewport}/>
            <Bars ref={barsRef}/>
            <Classes ref={classesRef}/>
            <Bases ref={basesRef}/>
        </motion.main>
        </>
    )
}