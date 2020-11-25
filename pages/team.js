import { useEffect, useRef, useContext } from 'react';
import { StateContext } from '../components/common/Body';
import Head from 'next/head';
import Link from 'next/link';
import styles from './team.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constructRellax from '../helpers/constructRellax';
import Person from '../components/team/Person';
import Story from '../components/team/Story';
import Sustainability from '../components/team/Sustainability';
import ArrowDivider from '../components/common/ArrowDivider';
import FadeInViewContainer from '../components/HOC/FadeInViewContainer';
import { landingTransitions, infoTransitions } from '../page_transitions/team';
import useInViewFromTop from '../custom_hooks/useInViewFromTop';

export default function Team(){
    const state = useContext(StateContext);
    const { viewport } = state;

    const bg1Ref = useRef();
    useEffect(() => constructRellax(bg1Ref, {speed: -5, center: false}), []) 

    const bg2Ref = useRef();
    useEffect(() => constructRellax(bg2Ref, {speed: -2, center: true}), []) 

    const linkRef = useRef();
    const linkInView = useInViewFromTop(linkRef, { threshold: 1 })

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef)

    return (
        <>
        <Head>
            <title>Our Team | Cocktail Curations</title>
        </Head>
        <motion.main id={styles.Team} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <motion.section animate='animate' initial='initial' className={styles.landing}>
                <div className={styles.landingBackgrounds}>
                    <div className={styles.background1container}>
                        <div ref={bg1Ref} className={styles.background1}/>
                    </div>
                    <div className={styles.background2container}>
                        <div ref={bg2Ref} className={styles.background2}/>
                    </div>
                </div>
                <div className={styles.landingContent}>
                    <header>
                        {/* TOTAL ANIMATION TIME BELOW - .5s */}
                        <h1>
                            <FadeInViewContainer animateOnly>
                                <p><span>We</span> are</p>
                            </FadeInViewContainer>
                            <FadeInViewContainer animateOnly>
                                <p className={styles.headerBrand}>Cocktail Curations</p>
                            </FadeInViewContainer>
                        </h1>
                        <motion.div variants={landingTransitions.headerUnderline} className={styles.underline}/>
                        {/* TOTAL ANIMATION TIME BELOW - ~4s */}
                        <motion.div className={styles.box}>
                            <motion.div variants={landingTransitions.box.top} id={styles.topLeft} className={styles.top}/>
                            <motion.div variants={landingTransitions.box.top} id={styles.topRight} className={styles.top}/>
                            <motion.div variants={landingTransitions.box.side} className={styles.right}/>
                            <motion.div variants={landingTransitions.box.bottom} id={styles.bottomLeft} className={styles.bottom}/>
                            <motion.div variants={landingTransitions.box.bottom} id={styles.bottomRight} className={styles.bottom}/>
                            <motion.div variants={landingTransitions.box.side} className={styles.left}/>
                        </motion.div>
                    </header>
                    <motion.div className={styles.landingGallery}>
                        <motion.div variants={landingTransitions.gallery.sideImg} className={styles.landingImgContainer}>
                            <img src="/imgs/stock/team_page/ajp-1005.jpg" alt=""/>
                        </motion.div>
                        <motion.div variants={landingTransitions.gallery.mainImg} id={styles.center} className={styles.landingImgContainer}>
                            <img src="/imgs/stock/team_page/ThyNicole_Portrait-cropped.jpg" alt=""/>
                        </motion.div>
                        <motion.div variants={landingTransitions.gallery.sideImg} className={styles.landingImgContainer}>
                            <img src="/imgs/stock/team_page/ajp-1017.jpg" alt=""/>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
            <Story viewport={viewport} />
            <section className={styles.info}>
                <ArrowDivider 
                    size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                    BGcolor='#D7DBD6' 
                    border={{size: 1, color: 'rgba(175 ,175, 175)'}} 
                />    
                <div className={styles.contentContainer}>
                    <div className={styles.text}>
                        <FadeInViewContainer reverse>
                            <h3>The Duo</h3>
                        </FadeInViewContainer>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt ex tempore minus laborum architecto accusantium aliquid illum explicabo incidunt autem voluptatem quia, mollitia porro, aspernatur ut ullam cumque ipsum quam! Libero nobis mollitia enim porro voluptates exercitationem repellendus eos nemo aliquam quas perferendis, quis distinctio, sequi necessitatibus voluptatum ducimus, quod modi.</p>
                        <Link href='/contact'>
                            <a ref={linkRef}>
                                <p>Connect With Us →</p>
                                <motion.div 
                                    animate={linkInView ? 'animate' : 'initial'}
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
            <section className={styles.personnel}>
                <Person
                    name={{first: 'Nicole', last: 'Hassoun'}}
                    img={{src: "/imgs/stock/team_page/NicoleHassoun.jpg", alt: "Nicole Hassoun Founder of Cocktail Curations"}}
                    text={[
                        'In 2011, Nicole began crafting creative cocktails at a small bar called Gin Joint. She uniquely transformed her skills in engineering into pairing flavored tonics with an endless supply of gins to showcase different characteristics. In 2013, Nicole started Sinchona LLC, a bespoke tonic water company, where she designed and created delicious homemade tonic syrups branded as Chronic Tonic. In that same year, she taught classes all around the DC Metropolitan area on cocktail-making, tonic-making, and the history of gin. In the following year, Nicole was awarded Best Bartender in DC by the Washington Post Express. She then made the move from creating cocktails to distilling spirits and worked her way up to become Master Distiller of Gin and Vodka at Jos. A. Magnus & Co. Distillery in Washington DC. In 2018, she won Best Navy Strength Gin in the World by Gin Magazine, as well as multiple other awards for her line of gins', 
                        'Currently, Nicole owns and operates two companies in the food & beverage industry: Cocktail Curations produces beautifully crafted cocktails and Botanical Waters for every type of event, and Sinchona LLC specializes in distillery and beverage industry advising.'
                    ]}
                    quote='Some quote by Nicole Hassoun with roughly ten words no- maybe actually fifteen words.'
                />
                <div className={styles.spacer}>
                    <div className={styles.bg}/>
                    <p>&</p>
                </div>
                <Person
                    reverse
                    name={{first: 'Thy', last: 'Parra'}}
                    img={{src: "/imgs/stock/team_page/ThyParra.jpg", alt: "Thy Parra Founder of Cocktail Curations"}}
                    text={[
                        'A professionally trained chef, Thy’s career is a 20+ year repertoire of coveted Washington DC hospitality jobs. After attending, the University of Maryland and L’academie de Cuisine, Thy began her career working as a chef for renowned restaurateurs Jeff Buben of Bistro Bis and Cathal Armstrong of Restaurant Eve. She expanded her hospitality expertise as Senior Account Executive for a boutique catering company, as Director of Social Catering at the 5-star Mandarin Oriental Hotel, as well as luxury Event Planner at EVOKE Design and Creative. Thy then led the Events and Marketing department for the award-winning Jos. A. Magnus & Co. Distillery. With her multitude of experience in the hospitality, food and beverage industry, it was inevitable that she integrates her passions to co-found Cocktail Curations with distiller Nicole Hassoun.', 
                        'Thy has received accolades for her work in the event industry including 2012 Top 30 Under 40 Rising Young Event Professionals by Special Events Magazine, as well as, Washington DC’s 2018 Top 12 Dynamic Women by national publication Modern Luxury.'
                    ]}
                    quote='Some quote by Thy Parra with roughly ten words no- maybe actually fifteen words.'
                />
            </section>
            <Sustainability />
        </motion.main>
        </>
    )
}