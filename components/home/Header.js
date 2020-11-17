import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { headerTransitions } from '../../page_transitions/home';
import PropTypes from 'prop-types';

Header.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default function Header({ header, text }){
    const ref = useRef();
    const inView = useInViewFromTop(ref, { threshold: .1 })

    return (
        <motion.header 
            ref={ref} 
            className={styles.Header}
            variants={headerTransitions.container}
            animate={inView ? 'inView' : 'outOfView' }
        >
            <motion.h3 variants={headerTransitions.text}>Cocktail Curations</motion.h3>
            <motion.h4 variants={headerTransitions.text}>{ header }</motion.h4>
            <motion.p variants={headerTransitions.text}>{ text }</motion.p>
            <motion.div variants={headerTransitions.text}>
                <FontAwesomeIcon icon={['fas', 'glass-martini-alt']}/>
            </motion.div>
        </motion.header>
    )
}