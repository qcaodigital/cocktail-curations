import React, { useRef } from 'react';
import styles from './LandingMobileInfo.module.scss';
import smoothscroll from 'smoothscroll';
import LandingInfo from './LandingInfo';
import { motion } from 'framer-motion';
import useInViewFromTop from './../../custom_hooks/useInViewFromTop';

const LandingMobileInfo = React.forwardRef(({refs, navHeight, viewport}, ref) => {
    const textRef = useRef();
    const textInView = useInViewFromTop(textRef)

    return (
        <motion.div 
            className={styles.LandingMobileInfo} 
            ref={ref}
        >
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/imgs/stock/services_page/landing_block.jpg" alt="Cocktail In Coupe Glass With Cherry Garnish"/>
                </div>
                <motion.div ref={textRef} animate={textInView ? 'load_animate' : 'load_initial'}>
                    <LandingInfo refs={refs} navHeight={navHeight} viewport={viewport}/>
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LandingMobileInfo;