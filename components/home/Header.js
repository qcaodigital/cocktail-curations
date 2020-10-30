import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const container = {
    outOfView: {
        opacity: 0
    },
    inView: {
        opacity: 1,
        transition: {
            staggerChildren: .35,
            duration: 1,
            delay: .3
        }
    }
}

const fadeIn = {
    outOfView: {
        opacity: 0
    },
    inView: {
        opacity: 1
    }
}


export default function Header({ header, text }){
    const [ref, inView] = useInView({ threshold: .1, triggerOnce: true })

    return (
        <motion.header 
            ref={ref} 
            className={styles.Header}
            variants={container}
            animate={inView ? 'inView' : 'outOfView' }
        >
            <motion.h3 variants={fadeIn}>Cocktail Curations</motion.h3>
            <motion.h4 variants={fadeIn}>{ header }</motion.h4>
            <motion.p variants={fadeIn}>{ text }</motion.p>
            <motion.div variants={fadeIn}>
                <FontAwesomeIcon icon={['fas', 'glass-martini-alt']}/>
            </motion.div>
        </motion.header>
    )
}