import { motion } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';
import { landingTransitions } from './../../page_transitions/team';
import constructRellax from './../../helpers/constructRellax';
import { useRef, useEffect, useState } from 'react';
import styles from './Landing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const imgArr = ["/imgs/stock/team_page/ThyNicole_Landscape.jpg", "/imgs/stock/team_page/thy_nicole_bookoflists.jpg", "/imgs/stock/team_page/IMG_1734.jpg"]

export default function Landing({ isNavAniComplete, NAV_SPACER }){
    const [currImg, setCurrImg] = useState(0)

    return (
        <motion.section animate={isNavAniComplete ? 'animate' : 'initial'} initial='initial' className={styles.Landing}>
            {NAV_SPACER}
            <div className={styles.content}>
                <header>
                    <h1>We are</h1>
                    <h1>Cocktail Curations</h1>
                    <p>Learn about our story</p>
                    <div className={styles.underline}/>
                </header>
                <div className={styles.carousel}>
                    <div className={styles.counters}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    <button 
                        id={styles.UP_LEFT} 
                        className={styles.chevron}
                        onClick={() => setCurrImg(curr => curr - 1)}                            
                    >
                        <FontAwesomeIcon icon={['fa', 'chevron-left']}/>
                    </button>
                    <button 
                        id={styles.DOWN_RIGHT} 
                        className={styles.chevron}
                        onClick={() => setCurrImg(curr => curr + 1)}    
                    >
                        <FontAwesomeIcon icon={['fa', 'chevron-right']}/>
                    </button>
                    <div className={styles.imgContainer}>
                        <img src={imgArr[currImg]} alt=""/>
                    </div>
                </div>
                <div className={styles.cta}>
                    <button className='STYLED_BTN'>Learn About Us</button>
                </div>
            </div>
        </motion.section>
    )
}