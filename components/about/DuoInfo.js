import ArrowDivider from './../common/ArrowDivider';
import { infoTransitions } from './../../page_transitions/about';
import { motion } from 'framer-motion';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import styles from './DuoInfo.module.scss';
import { useRef, useEffect } from 'react';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import Link from 'next/link';

export default function DuoInfo({ viewport }){
    const infoRef = useRef();
    const infoInView = useInViewFromTop(infoRef, { threshold: .25 })

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: -.1 })

    return (
        <section className={styles.DuoInfo}>
            <ArrowDivider 
                size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                BGcolor='#D7DBD6' 
                border={{size: 1, color: 'rgba(175 ,175, 175)'}} 
            />    
            <div className={styles.contentContainer}>
                <div ref={infoRef} className={styles.text}>
                    <FadeInViewContainer>
                        <h3>The Duo</h3>
                    </FadeInViewContainer>
                    <motion.p 
                        animate={infoInView ? 'animate' : 'initial'} 
                        variants={infoTransitions.contentContainer.text}
                    >
                        Thy Parra and Nicole Hassoun have a combined energy that fizzes like your favorite glass of Champagne. It’s a meeting of the spirits that began years ago, when Parra—a former chef, luxury event planner, and catering and events director—contracted Hassoun, a craft bartending expert, as a gin specialist and mixologist. Their careers kept them together (even working at the same DC distillery) so at some point they said, "We’ve been working together in every way possible, so it’s about time we followed our dreams." 
                    </motion.p>
                    <Link href='/contact'>
                        <a>
                            <p>Connect With Us →</p>
                            <motion.div 
                                animate={infoInView ? 'animate' : 'initial'}
                                variants={infoTransitions.contentContainer.link} 
                                className={styles.underline}
                            />
                        </a>
                    </Link>
                </div>
                <motion.img
                    ref={imgRef}
                    animate={imgInView ? 'animate' : 'initial'}    
                    variants={infoTransitions.contentContainer.img} 
                    src={`/imgs/stock/about_page/thy_nicole_bookoflists.jpg`} 
                    alt='Cocktail Curations Owner Thy Parra & Nicole Hassoun At Book of Lists 2020'
                />
            </div>
            <div className={styles.divider}>
                <img src="/imgs/embellishments/divider.png" alt="line divider"/>
            </div>
        </section>
    )
}