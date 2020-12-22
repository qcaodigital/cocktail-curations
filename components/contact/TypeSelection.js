import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TypeSelection.module.scss';
import { motion } from 'framer-motion';

export default function TypeSelection({ viewport, setFormData, formData, setCurrentProgress }){
    return (
        <motion.ul exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className={styles.list}>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'events'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon size={viewport !== 'mobile' ? '3x' : '2x'} icon={['fas', 'calendar-alt']}/>
                <p>Events</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'products'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon size={viewport !== 'mobile' ? '3x' : '2x'}  icon={['fas', 'shopping-bag']}/>
                <p>Products</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'other'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon size={viewport !== 'mobile' ? '3x' : '2x'}icon={['fas', 'question']}/>
                <p>Other</p>
            </li>
        </motion.ul>
    )
}