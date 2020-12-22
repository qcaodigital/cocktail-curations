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
                    <motion.p variants={storyTransitions.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</motion.p>
                    <motion.p variants={storyTransitions.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</motion.p>
                </motion.div>
                <motion.div variants={storyTransitions.textContainer} className={styles.block}>
                    <motion.p variants={storyTransitions.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</motion.p>
                    <motion.p variants={storyTransitions.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
});

export default Story;