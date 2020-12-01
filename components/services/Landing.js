import { useRef } from 'react';
import styles from './Landing.module.scss';
import { motion } from 'framer-motion';
import smoothscroll from 'smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MouseSprite from '../common/MouseSprite';
import LandingMobileInfo from './LandingMobileInfo';
import LandingInfo from './LandingInfo';
import { landingTransitions } from '../../page_transitions/services';

export default function Landing({ viewport, navHeight, NAV_SPACER, refs }){
    const mobileInfoRef = useRef();

    return (
        <motion.section animate='animate' initial='initial' id={styles.Landing}>
            <div className={styles.imgContainer}>
                <div className={styles.mouseSprite}>
                    <MouseSprite 
                        clickCB={() => smoothscroll(viewport === 'mobile' ? mobileInfoRef.current.offsetTop : refs.copy.current.offsetTop - navHeight / 2, 1000)}
                    />
                </div>
            </div>
            <div className={styles.info}>
                {viewport !== 'mobile' && NAV_SPACER}
                <motion.div variants={landingTransitions.info} className={styles.textContainer}>
                    {viewport === 'mobile' && <h2>Learn about</h2>}
                    <h2>our services</h2>
                    {viewport !== 'mobile' && <LandingInfo refs={refs} navHeight={navHeight} viewport={viewport}/>}
                    {viewport !== 'mobile' && <div className={styles.divider}>
                        <img src="/imgs/embellishments/divider-white.png" alt=""/>
                    </div>}
                </motion.div>
                <div className={styles.iconContainer}> {/* MOBILE ONLY */}
                    <FontAwesomeIcon size='lg' icon={['fas', 'glass-cheers']}/>
                </div>
            </div>
            {viewport === 'mobile' && <LandingMobileInfo ref={mobileInfoRef} refs={refs} navHeight={navHeight} viewport={viewport}/>}
        </motion.section>   
    )
}