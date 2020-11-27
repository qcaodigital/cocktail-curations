import { useState, useEffect } from 'react';
import styles from './Loadingscreen.module.scss';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

Loadingscreen.propTypes = {
    turnOffLoading: PropTypes.func.isRequired
}

export default function Loadingscreen({ turnOffLoading }){
    const animationTime = 1.25;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(!isLoading){
            turnOffLoading();
        }
    }, [isLoading])

    return (
        <AnimatePresence exitBeforeEnter>
            {isLoading && 
            <motion.div exit={{ opacity: 0 }} transition={{ delay: 1 }} className={styles.Loadingscreen}>
                <div className={styles.textContainer}>
                    <Line text='Welcome To' duration={animationTime}/>
                    <Line text='Cocktail Curations' duration={animationTime} delay={animationTime} closeLoading={() => setIsLoading(false)}/>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export const Line = ({ text, duration, delay, closeLoading }) => {
    const [textExit, setTextExit] = useState(false);

    const wordVariant = {
        animate: {
            y: '-50%',
            transition: {
                duration: duration
            }
        },
        initial: {
            y: '100%',
            x: '-50%',
            opacity: 1
        },
        exit: {
            y: '-150%'
        }
    }

    return (
        <AnimatePresence>
            {!textExit && <motion.h2 
                exit={{ y: '-150%'}} 
                transition={{ 
                    duration: duration,
                    delay: delay * 1.25
                }} 
                animate={{ y: '-50%', opacity: 1 }} 
                initial={{ y: '100%', x: '-50%', opacity: 0 }} 
                onAnimationComplete={() => {
                    setTimeout(() => {
                        setTextExit(true);
                        if(closeLoading){
                            closeLoading();
                        }
                    }, delay ? 0 : duration * 250);
                }}
            >
                {text}
            </motion.h2>}
        </AnimatePresence>
    )
}