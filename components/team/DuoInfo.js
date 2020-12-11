import ArrowDivider from './../common/ArrowDivider';
import { infoTransitions } from './../../page_transitions/team';
import { motion } from 'framer-motion';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import styles from './DuoInfo.module.scss';
import { useRef } from 'react';
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt ex tempore minus laborum architecto accusantium aliquid illum explicabo incidunt autem voluptatem quia, mollitia porro, aspernatur ut ullam cumque ipsum quam! Libero nobis mollitia enim porro voluptates exercitationem repellendus eos nemo aliquam quas perferendis, quis distinctio, sequi necessitatibus voluptatum ducimus, quod modi.
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
                <div ref={imgRef} className={styles.img}>
                    <motion.img
                        animate={imgInView ? 'animate' : 'initial'}    
                        variants={infoTransitions.contentContainer.img} 
                        src={`/imgs/stock/team_page/thy_nicole_bookoflists.jpg`} 
                        alt='Cocktail Curations Owner Thy Parra & Nicole Hassoun At Book of Lists 2020'
                    />
                </div>
            </div>
            <div className={styles.divider}>
                <img src="/imgs/embellishments/divider.png" alt="line divider"/>
            </div>
        </section>
    )
}