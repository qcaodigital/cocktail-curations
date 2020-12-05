import { useRef } from 'react';
import styles from './Sustainability.module.scss';
import { motion } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';
import { sustainabilityTransitions } from './../../page_transitions/team';

export default function Sustainability({ viewport }){
    return(
        <section id={styles.Sustainability}>
            <section id={styles.primary}>
                <SectionInfo 
                    viewport={viewport} 
                    img={{
                        src: '/imgs/stock/team_page/Gin_Reception Cocktail_Curations-sq.jpg',
                        alt: 'Cocktail Curations Gin Reception'
                    }}
                    header='We believe in applied sustainability'
                    subheader='Cocktail Curations strives to be a sustainable zero-waste company.'
                    textblocks={[{
                        header: '50%',
                        text: 'of all produce is simply thrown away in the United States and so much more is wasted from partially used produce.'
                    },
                    {
                        header: '65%',
                        text: 'of plastic used in the hospitality sector is either single-use or unneccessarily wasted.'
                    }]}
                />
            </section>
            <section id={styles.secondary}>
                <SectionInfo 
                    viewport={viewport} 
                    img={{
                        src: '/imgs/stock/team_page/sustainability-1-sq.jpg',
                        alt: 'Cocktail Curations Garnish'
                    }}
                    header='taking care of the earth should be ingrained in everything a company does.'
                    subheader='We suscribe to the idea of working towards keeping our home beautiful for future generations to come. So what are we doing about it?'
                    textblocks={[{
                        header: ['We use fruits and vegetables ', <span key={2} style={{ display: "inline-block"}}>pith to peel</span>],
                        text: 'From juicing fresh fruits to create our mixes, using the pith to make our bitters, and utilizing the peel to create our beautiful Botanical Waters, no produce goes to waste in our kitchen.'
                    },
                    {
                        header: 'Unused products from our events have a second life',
                        text: 'We create other amazing products like our tonics and botanical waters largely from "leftover" produce. Additionally, we avoid using single-use plastics in our events.'
                    }]}
                />
            </section>
        </section>
    )
}

export const SectionInfo = ({ viewport, img, header, subheader, textblocks }) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef)

    const textRef = useRef();
    const textInview = useInViewFromTop(textRef)
    return (
        <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
                <img src={img.src} alt={img.alt}/>
            </div>
            <div className={styles.info}>
                <header ref={headerRef}>
                    <FadeInViewContainer>
                        <motion.h3>{header}</motion.h3>
                    </FadeInViewContainer>
                    <motion.p 
                        variants={sustainabilityTransitions.subHeader} 
                        animate={headerInView ? 'animate' : 'initial'}
                    >
                        {subheader}
                    </motion.p>
                </header>
                <motion.div ref={textRef} animate={textInview ? 'animate' : 'initial'} className={styles.text}>
                    {textblocks.map((block, idx) => (
                        <div key={block.header} className={styles.textContainer}>
                            <FadeInViewContainer delay={viewport !== 'mobile' && idx === 1 ? .2 : 0}>
                                <motion.h4>{block.header}</motion.h4>
                            </FadeInViewContainer>
                            <motion.p variants={sustainabilityTransitions.text}>{block.text}</motion.p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}