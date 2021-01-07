import styles from './Story.module.scss';
import ArrowDivider from '../common/ArrowDivider';
import FadeInViewContainer from '../HOC/FadeInViewContainer';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { storyTransitions } from '../../page_transitions/team';

const Story = React.forwardRef(({ viewport }, ref) => {
    const textRef = useRef();
    const textInView = useInViewFromTop(textRef, { threshold: 0 })

    return (
        <section id={styles.Story} ref={ref}>
            <ArrowDivider 
                size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                BGcolor='var(--secondary-color)' 
                border={{size: 1, color: 'rgba(175 ,175, 175)'}}
            />  
            <header>
                <img src="/imgs/stock/logos/cc-icon-logo-color.png" alt="Cocktail Curations logo"/>
                <FadeInViewContainer threshold={.75}>
                    <h2>Our Story</h2>
                </FadeInViewContainer>
                <FadeInViewContainer>
                    <h3>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit."</h3>
                </FadeInViewContainer>
                <div className={styles.divider}/>
            </header>
            <motion.div 
                animate={textInView? 'animate' : 'initial'} 
                variants={viewport === 'mobile' ? storyTransitions.blockContainer : null} 
                className={styles.contentContainer}
                ref={textRef}
            >
                <motion.div variants={storyTransitions.textContainer} className={styles.block}>
                    <motion.p variants={storyTransitions.text}>Cocktail Curations is a cocktail experience and event bar business based in Falls Church, VA, producing expertly crafted beverages and delicious concoctions. Offering delectable masterclasses and bespoke cocktail-making stations, we offer clients an alternative bar experience for their event. From pre-mixed potions to customizable spirits, tonics, and garnishes, the variety is determined by each client's particular tastes and preferences. Founded by award-winning bartender Nicole Hassoun and acclaimed chef Thy Parra, our business is a product of our mutual love for recipe-crafting and delicious beverages.</motion.p>
                    <motion.p variants={storyTransitions.text}> Hassoun worked as a cocktail bartender in 2011 before starting a small company producing bespoke tonic water and syrups. Hosting masterclasses, she eventually ventured into the distilling industry and became a master distiller of gin and vodka. </motion.p>
                </motion.div>
                <motion.div variants={storyTransitions.textContainer} className={styles.block}>
                    <motion.p variants={storyTransitions.text}>Business-partner Parra boasts an illustrious career working and managing many renowned restaurant kitchens before diverging into boutique catering and event planning. Named in the Top 30 Under 40 Rising Young Event Professionals by Special Events Magazine among other distinctions, Parra set her sights on beverages. Together, the services offered by Cocktail Curations are a cocktail of beverage mastery, freshly made ingredients, exceptional attention to detail, and professional bartending.</motion.p>
                    <motion.p variants={storyTransitions.text}>Enter Cocktail Curations. We craft cocktail soirees for private and corporate events—with both alcoholic and zero-proof concoctions. Shaking things up? Taste our proof.</motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
});

export default Story;