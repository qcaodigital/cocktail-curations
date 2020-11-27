import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.scss';
import Head from 'next/head';

export default function LoadingScreen({ turnOffLoading }){
    const textAnimationDuration = 3.5;
    const loadingScreenExitAnimationDuration = .5;

    const textVariants = {
        initial: {
            x: '-50%',
            y: '100%'
        },
        animate: {
            y: ['100%', '-50%', '-50%', '-150%'],
            transition: {
                duration: textAnimationDuration,
                times: [0, .45, .75, 1]
            }
        }
    }

    const container = {
        animate: {
            transition: {
                staggerChildren: textAnimationDuration * .9
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: loadingScreenExitAnimationDuration
            }
        }
    }

    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    return (
        <>
            <Head>  
                <title>Cocktail Curations</title>
            </Head>
            <AnimatePresence>
                {!isAnimationComplete && <motion.div 
                    className={styles.Loadingscreen}
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    variants={container}
                    onAnimationComplete={() => {
                        setIsAnimationComplete(true);
                        setTimeout(() => {
                            turnOffLoading();
                        }, loadingScreenExitAnimationDuration * 1000)
                    }}
                >
                    <div className={styles.textContainer}>
                        <motion.h2 variants={textVariants}>Welcome To</motion.h2>
                        <motion.h2 variants={textVariants}>Cocktail Curations</motion.h2>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}