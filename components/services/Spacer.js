import React, { useRef } from 'react';
import styles from './Spacer.module.scss';
import Rellax from 'rellax';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import transitions from './transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useRellax from '../../custom_hooks/useRellax';

export default function Spacer({ img, buttonText, href }){
    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: .2 });  
    useRellax(imgRef, { speed: -3, center: true });

    return(
        <div className={styles.spacer}>
            <div ref={imgRef} className={styles.parallaxContainer} style={{backgroundImage: `url(${img})`}}/>
            <header>
                <motion.button animate={imgInView ? 'animate' : 'initial'}>
                    <Link href={href}>
                        <a>{buttonText}
                            <div className={styles.underline}/>
                        </a>
                    </Link>
                </motion.button>
            </header>
        </div>
    )
}