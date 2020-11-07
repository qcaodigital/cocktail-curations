import React, { useRef, useEffect } from 'react';
import styles from './Spacer.module.scss';
import Rellax from 'rellax';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useInViewFromTop from '../../custom_hooks/useInViewFromTop';
import transitions from './transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Spacer({ img, buttonText }){
    const imgRef = useRef();
    const imgInView = useInViewFromTop(imgRef, { threshold: .2 });  
    useEffect(() => {
        new Rellax(imgRef.current, { speed: -2, center: true });
    }, [])

    return(
        <div className={styles.spacer}>
            <div ref={imgRef} className={styles.parallaxContainer} style={{backgroundImage: `url(${img})`}}/>
            <header>
                <motion.button animate={imgInView ? 'animate' : 'initial'}>
                    <Link href='/contact'>
                        <a>{buttonText}
                            <div className={styles.underline}/>
                        </a>
                    </Link>
                </motion.button>
            </header>
        </div>
    )
}