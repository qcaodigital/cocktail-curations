import styles from './Bars.module.scss';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sectionTransitions } from '../../page_transitions/services';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import AdditionalInfo from './AdditionalInfo';
import PropTypes from 'prop-types';

const Bars = React.forwardRef(({ viewport }, ref) => {
    const headerRef = useRef();
    const headerInView = useInViewFromTop(headerRef, { threshold: .1 });

    return (
        <section id={styles.Bars} ref={ref}>
            <div ref={headerRef} className={styles.contentContainer}>
                <motion.header animate={headerInView ? 'animate' : 'initial'} initial='initial'>
                    <motion.h2 variants={sectionTransitions.stagger}>
                        <motion.span variants={sectionTransitions.headerVariant}>Personalize and tailor</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>your event with one</motion.span>
                        <motion.span variants={sectionTransitions.headerVariant}>of our 
                            <span className={styles.emph}>
                                experiential bars.
                                <motion.div 
                                    className={styles.emphUnderline}
                                    variants={sectionTransitions.emphUnderline}
                                />
                            </span>
                        </motion.span>
                    </motion.h2>
                    <motion.p variants={sectionTransitions.headerVariant}>To curate is to design and select items from among a large number of possibilities. Our mixology bars offer customized experiences for your special event. It's more than just a specialty cocktail. Our bartenders engage with guests and craft cocktails to their preference. From liquid, garnish, to displays, we curate your perfect cocktail bar and guest experience.</motion.p>
                    <motion.p variants={sectionTransitions.headerVariant}>With our experience, we can tailor to virtually any need our clients have. From bar-mitvahs to holiday parties, we've done it all and we're passionate about the details. Our creative process includes finding out what food will be serviced and playing up flavors from there. Each event dictates what kind of garnishes and glassware use. We liken our company to a "chamleon". We aim to blend in each each event's look and style.</motion.p>
                </motion.header>
                <div className={styles.gallery}>
                    <div id={styles.center} className={styles.imgContainer}>
                        <motion.img 
                            variants={sectionTransitions.mainImgScale} 
                            animate={headerInView ? 'animate' : 'initial'} 
                            src="/imgs/stock/services_page/bars_main.jpg" 
                            alt="Cocktail Curations Wedding Wire The Knot Event"
                        />
                    </div>
                    <div id={styles.top} className={styles.imgContainer}>
                        <img className={styles.galleryImg} src="/imgs/stock/services_page/bars-sq.jpg" alt="Cocktail Curations Book of Lists Event 2020"/>
                        <img className={styles.embellishment} src="/imgs/embellishments/pink-dots.png" alt="pink dots"/>
                        <p className={styles.desktopText}>We offer cocktail couture. Our designs are your personal preference and style!</p>
                    </div>
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
                    text: 'Inquire about booking',
                    href: '/contact'
                }}
                viewport={viewport}
            />
        </section>
    )
})

Bars.propTypes = {
    viewport: PropTypes.string
}

export default Bars;