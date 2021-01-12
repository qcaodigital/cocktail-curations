import styles from './LandingInfo.module.scss';
import smoothscroll from 'smoothscroll';
import { motion } from 'framer-motion';
import { landingTransitions } from './../../page_transitions/services';
import PropTypes from 'prop-types';

LandingInfo.propTypes = {
    refs: PropTypes.objectOf(PropTypes.object).isRequired,
    navHeight: PropTypes.number.isRequired,
    viewport: PropTypes.string
}

export default function LandingInfo({refs, navHeight, viewport}){
    const scrollAnchorDesktopAdjustment = viewport === 'mobile' ? 0 : navHeight / 2;
    const scrollAnchorDuration = 2000;

    return (
        <motion.div className={styles.infoBlock}
            variants={landingTransitions.info}
        >
            <motion.div variants={landingTransitions.info.children} className={styles.smallHr}/>
            <motion.h3 variants={landingTransitions.info.children}>We offer a variety of services to share our love and passion for mixology. </motion.h3>
            <motion.h4 variants={landingTransitions.info.children}>Our expertise includes technical education and training in: spirits, mixology, and recipe creation, developing cocktail menus, designing thoughtfully garnished cocktail, and curating mind-blowing cocktails with or without alcohol.</motion.h4>
            <motion.p variants={landingTransitions.info.children}><em>Check out our:</em></motion.p>
            <motion.ul variants={landingTransitions.info.children}>
                <li>
                    Experience-based, <strong>speciality bars</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bars.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Interactive <strong>cocktail classes</strong>. 
                    <span 
                        onClick={() => smoothscroll(refs.classes.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)}
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Custom-curated <strong>cocktail bases</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bases.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>... and more!</li>
            </motion.ul>
        </motion.div>
    )
}