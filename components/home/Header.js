import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const fadeUp = {
    outOfView: {
        opacity: 0,
        transition: {
            duration: 0
        }
    },
    inView: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const stagger = {
    inView: {
        transition: {
            staggerChildren: .15
        }
    }
}

export default function Header({ header, text }){
    const [ref, inView] = useInView({ threshold: .1, triggerOnce: true })

    return (
        <motion.header 
            ref={ref} 
            className={styles.Header}
            variants={stagger}
            animate={inView ? 'inView' : 'outOfView' }
        >
            <motion.h3 variants={fadeUp}>Cocktail Curations</motion.h3>
            <motion.h4 variants={fadeUp}>{ header }</motion.h4>
            <motion.p variants={fadeUp}>{ text }</motion.p>
            <motion.div variants={fadeUp}>
                <FontAwesomeIcon icon={['fas', 'glass-martini-alt']}/>
            </motion.div>
        </motion.header>
    )
}