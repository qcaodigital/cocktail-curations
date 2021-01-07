import { useRef, useEffect } from 'react';
import styles from './Landing.module.scss';
import { motion } from 'framer-motion';
import smoothscroll from 'smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MouseSprite from '../common/MouseSprite';
import LandingMobileInfo from './LandingMobileInfo';
import LandingInfo from './LandingInfo';
import { landingTransitions } from './../../page_transitions/services';
import constructRellax from './../../helpers/constructRellax';
import FadeInViewContainer from './../HOC/FadeInViewContainer';

export default function Landing({ viewport, navHeight, NAV_SPACER, refs }){
    const mobileInfoRef = useRef();
    const bgImgRef = useRef();

    useEffect(() => constructRellax(bgImgRef, { speed: -4 }), [])

    return (
        <motion.section 
            id={styles.Landing}
            style={{ 
                '--bg-color': 'var(--highlight-color-light-less)', 
                // '--bg-texture': 'url("/imgs/textures/[insert texture file]")'
            }}
        >
            <div ref={bgImgRef} className={styles.imgContainer}/>
            <div className={styles.info}>
                <div className={styles.mouseSprite}>
                    <MouseSprite 
                        clickCB={() => 
                            smoothscroll(viewport === 'mobile' 
                                ? mobileInfoRef.current.offsetTop 
                                : refs.copy.current.offsetTop - navHeight / 2, 1000
                        )}
                    />
                </div>
                {viewport !== 'mobile' && NAV_SPACER}
                <div
                    className={styles.textContainer}
                    style={{ minHeight: viewport !== 'mobile' ? `calc(100vh - ${navHeight}px` : 'unset' }} 
                >
                    {viewport === 'mobile' && <motion.h2 variants={landingTransitions.fadeIn}>Learn about</motion.h2>}
                    <motion.h2 variants={landingTransitions.title.boxAndFlower}>
                        <div className={styles.overflowContainer}>
                            <motion.span
                                variants={landingTransitions.fadeIn}
                            >our services</motion.span>
                        </div>
                    </motion.h2>
                    {viewport !== 'mobile' && <LandingInfo refs={refs} navHeight={navHeight} viewport={viewport}/>}
                    {viewport !== 'mobile' && <motion.div variants={landingTransitions.fadeIn} className={styles.divider}>
                        <img src="/imgs/embellishments/divider-white.png" alt=""/>
                    </motion.div>}
                </div>
                <div className={styles.iconContainer}> {/* MOBILE ONLY */}
                    <FontAwesomeIcon size='lg' icon={['fas', 'glass-cheers']} style={{ width: '2rem'}} />
                </div>
            </div>
            {viewport === 'mobile' && 
                <LandingMobileInfo 
                    ref={mobileInfoRef} 
                    refs={refs} 
                    navHeight={navHeight} 
                    viewport={viewport}
            />}
        </motion.section>   
    )
}