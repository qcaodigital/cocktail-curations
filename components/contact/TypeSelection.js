import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TypeSelection.module.scss';
import { motion } from 'framer-motion';

export default function TypeSelection({ viewport, setFormData, formData, setCurrentProgress }){
    const iconWidth = {
        width: viewport === 'mobile' ? '1.5rem' : '2rem'
    }

    return (
        <motion.ul className={styles.list}>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'events'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'calendar-alt']} style={iconWidth}/>
                <p>Events</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'products'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'shopping-bag']} style={iconWidth}/>
                <p>Products</p>
            </li>
            <li className={styles.item}
                onClick={() => {
                    setFormData(formData => ({ ...formData, type: 'other'}))
                    setCurrentProgress(2)
                }}
            >
                <FontAwesomeIcon icon={['fas', 'question']} style={iconWidth}/>
                <p>Other</p>
            </li>
        </motion.ul>
    )
}