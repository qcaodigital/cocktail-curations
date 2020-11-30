import React from 'react';
import styles from './LandingMobileInfo.module.scss';
import smoothscroll from 'smoothscroll';
import LandingInfo from './LandingInfo';

const LandingMobileInfo = React.forwardRef(({refs}, ref) => {
    return (
        <div className={styles.LandingMobileInfo} ref={ref}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/imgs/stock/services_page/landing_block.jpg" alt=""/>
                </div>
                <LandingInfo/>
            </div>
        </div>
    )
})

export default LandingMobileInfo;