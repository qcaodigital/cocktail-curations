import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Classes.module.scss';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import Rellax from 'rellax';
import AdditionalInfo from './AdditionalInfo';

const Classes = React.forwardRef(({ viewport }, ref) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef)

    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: .1 });

    return(
        <section ref={ref} id={styles.Classes}>
            <div className={styles.bottomBorder}/>
            <div className={styles.topBorder}/>
            <div className={styles.contentContainer}>
                <motion.header ref={headerRef} animate={headerInView ? 'animate' : 'initial'}>
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>Elevate your bartending</motion.span> 
                        <motion.span variants={sectionTransitions.headerVariant}>knowledge and skills by</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>hosting a  
                            <span className={styles.emph}>
                                cocktail class.
                                <motion.div 
                                    className={styles.emphUnderline}
                                    variants={sectionTransitions.emphUnderline}
                                />
                            </span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariant}>We will teach your guests how to craft cocktail classics or customize a cocktail based on your group’s theme or preference. Cocktail Curations will provide instructors, barware, cocktail utensils, and all additional natural juices, handcraft mixers and garnishes.</motion.p>
                </motion.header>
                <div className={styles.imgContainer} id={styles.first}>
                    <motion.img ref={imgRef} animate={imgInView ? 'animate' : 'initial'} variants={sectionTransitions.mainImgScale} src="/imgs/stock/services_page/classes.jpg" alt="Cocktail Curations Class Kentlands Clubhouse"/>
                </div>
                <div className={styles.imgContainer} id={styles.second}>
                    <img src="/imgs/stock/services_page/classes2.jpg" alt="Cocktail Curations Class Kentlands Clubhouse"/>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F95B5B" d="M43,-50.3C53.8,-42.2,59.2,-26.8,58.7,-12.8C58.2,1.2,51.9,13.7,44.2,24C36.4,34.2,27.3,42.1,14,53.4C0.7,64.6,-16.7,79.3,-33.2,78.7C-49.7,78.1,-65.2,62.4,-69.8,44.9C-74.5,27.4,-68.2,8.2,-62.8,-9C-57.3,-26.3,-52.6,-41.7,-42.3,-49.8C-32,-58,-16,-58.8,0.1,-58.9C16.1,-59,32.2,-58.3,43,-50.3Z" transform="translate(100 100)" />
                    </svg>
                    <img className={styles.emb} src="/imgs/embellishments/dots.png" alt=""/>
                </div>
                <div className={styles.desktopText}>
                    <h3>Our cocktail classes are also available <span className={styles.emph}>virtually!</span> Have your guests learn proper ratios and techniques for crafting their own, perfect cocktail at home. 
                    </h3>
                </div>
            </div>
            <AdditionalInfo 
                textBlocks={[{
                    header: 'Header Text One',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nemo debitis iste libero maiores illum nisi est itaque repellendus totam rem reiciendis delectus adipisci sit, quaerat minus quis facilis consequuntur doloremque fuga quod. Quis at debitis eaque provident, qui tenetur ullam, cum accusantium vel sunt tempora eum! Ipsa, ullam. Dolor?'
                }, {
                    header: 'Header Text Two',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nemo debitis iste libero maiores illum nisi est itaque repellendus totam rem reiciendis delectus adipisci sit, quaerat minus quis facilis consequuntur doloremque fuga quod. Quis at debitis eaque provident, qui tenetur ullam, cum accusantium vel sunt tempora eum! Ipsa, ullam. Dolor?'
                }]}
                cta={{
                    text: 'Book a class',
                    href: '/contact'
                }}
                viewport={viewport}
            />
        </section>
    )
})

export default Classes;