import React, { useRef, useEffect } from 'react';
import styles from './Spacer.module.scss';
import Rellax from 'rellax';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import { spacerTransitions } from '../../page_transitions/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constructRellax from '../../helpers/constructRellax';
import PropTypes from 'prop-types';

Spacer.propTypes = {
    img: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default function Spacer({ img, buttonText, href }){
    const ref = useRef();
    const inView = useInViewFromTop(ref, { threshold: .25 }); 

    useEffect(() => constructRellax(ref, {speed: -1, center: true}), []) 

    return(
        <div className={styles.spacer}>
            <div className={styles.imgContainer}>
                <img ref={ref} src={img} alt=""/>
            </div>
            <header>
                <motion.button animate={inView ? 'animate' : 'initial'} variants={spacerTransitions.headerScale}>
                    <div className={styles.beforeLine}/>
                    <Link href={href}>
                        <a>
                            <p>{buttonText}</p>
                            <div className={styles.underline}/>
                        </a>
                    </Link>
                    <div className={styles.afterLine}/>
                </motion.button>
            </header>
        </div>
    )
}