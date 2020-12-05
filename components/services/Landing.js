
import { useRef, useEffect } from 'react';
import styles from './Landing.module.scss';
import { motion } from 'framer-motion';
import smoothscroll from 'smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MouseSprite from '../common/MouseSprite';
import LandingMobileInfo from './LandingMobileInfo';
import LandingInfo from './LandingInfo';
import { landingTransitions } from '../../page_transitions/services';
import constructRellax from './../../helpers/constructRellax';

export default function Landing({ viewport, navHeight, NAV_SPACER, isNavAniComplete, refs }){
    const mobileInfoRef = useRef();
    const bgImgRef = useRef();

    useEffect(() => constructRellax(bgImgRef, { speed: -4 }))

    return (
        <motion.section 
            animate={isNavAniComplete ? 'animate' : ''} 
            initial='initial' 
            id={styles.Landing}
            style={{ '--bg-color': '#CCD1B9', '--bg-texture': 'url("/imgs/textures/climpek.png")'}}
        >
            <div ref={bgImgRef} className={styles.imgContainer} style={bgStyles}/>
            <div className={styles.info}>
                <div className={styles.mouseSprite}>
                    <MouseSprite 
                        clickCB={() => smoothscroll(viewport === 'mobile' ? mobileInfoRef.current.offsetTop : refs.copy.current.offsetTop - navHeight / 2, 1000)}
                    />
                </div>
                {viewport !== 'mobile' && NAV_SPACER}
                <motion.div 
                    variants={landingTransitions.info} 
                    className={styles.textContainer}
                    style={{ minHeight: viewport !== 'mobile' ? `calc(100vh - ${navHeight}px` : 'unset' }} 
                >
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