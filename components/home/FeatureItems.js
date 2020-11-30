import styles from './FeatureItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { featureTransitions } from '../../page_transitions/home';
import PropTypes from 'prop-types';

FeatureItems.propTypes = {
    items: PropTypes.array.isRequired,
    viewport: PropTypes.string
}

export default function FeatureItems({ items, viewport }){
    return(
        <div className={styles.FeatureItems}>
            {items.map((item, idx) => (
                <Item key={item.label} item={item} viewport={viewport} idx={idx} />
            ))}
        </div>
    )
}

export function Item({ item, idx, viewport}){
    const arrowStyles = {
        bottomLeft: { top: '100%', left: '1rem' },
        bottomRight: { top: '100%', right: '1rem' },
        topLeft: { bottom: '100%', left: '1rem', transform: 'rotate(180deg)' },
        topRight: { bottom: '100%', right: '1rem', transform: 'rotate(180deg)' }
    }
    const [linkOpen, setLinkOpen] = useState()
    const [containerObserver, inView] = useInView({ threshold: .5, triggerOnce: true });

    function transformContainer(arrowPosition){
        if(arrowPosition === 'topRight'){
            return { transX: 'calc(-100% + 1rem)', transY: 'calc(0% + 1rem)', transO: 'top right'};
        } else if(arrowPosition === 'topLeft'){
            return { transX: 'calc(-0% - 1rem)', transY: 'calc(0% + 1rem)', transO: 'top left'};
        } else if(arrowPosition === 'bottomRight'){
            return { transX: 'calc(-100% + 1rem)', transY: 'calc(0% - 1rem)', transO: 'bottom right'};
        } else if(arrowPosition === 'bottomLeft'){
            return { transX: 'calc(-0% - 1rem)', transY: 'calc(-100% - 1rem)', transO: 'bottom left'};
        } else {
            return ['0', '0']
        }
    }

    const linkStyles = {
        left: item.focus.x,
        top: item.focus.y,
        translateX: transformContainer(item.arrowPos).transX,
        translateY: transformContainer(item.arrowPos).transY,
        transformOrigin: transformContainer(item.arrowPos).transO
    };

    function closeIconLocation(arrowPos){
        switch (arrowPos) {
            case 'topRight':
                return { bottom: '0', left: '0', transform: 'translate(-50%, 50%)' }
            case 'topLeft':
                return { bottom: '0', right: '0', transform: 'translate(50%, 50%)' }
            case 'bottomRight':
                return { top: '0', left: '0', transform: 'translate(-50%, -50%)' }
            case 'bottomLeft':
                return { top: '0', right: '0', transform: 'translate(50%, -50%)' }
        }
    }

    function handleClose(e){
        e.preventDefault();
        setLinkOpen(false);
    }

    useEffect(() => setLinkOpen(inView && viewport === 'mobile' ? true : false), [inView, viewport])

    return (
        <motion.div
            ref={containerObserver} 
            key={item.label} 
            className={styles.imgContainer}
            animate={linkOpen ? 'open' : 'close'} 
        >
            <img className='no_highlights' src={item.src} alt={item.alt}/>
            <motion.a
                href={item.url}
                target='_blank' 
                style={linkStyles}
                initial='close'
                variants={featureTransitions.scaleUp}
                className={styles.tag}
            >   
                <motion.div 
                    className={styles.iconContainer}    
                    variants={featureTransitions.scaleUp}  
                    transition={{delay: .25, duration: .1}}    
                >
                    <FontAwesomeIcon size={viewport !== 'desktop' ? 'sm' : 'lg'} icon={['fas', 'shopping-bag']}/>
                </motion.div>
                <motion.p style={{ display: 'inline-block' }}>{item.label}</motion.p>
                <div style={arrowStyles[item.arrowPos]} className={styles.arrow}/>
                <div style={closeIconLocation(item.arrowPos)} className={styles.closeIcon} onClick={handleClose}>
                    <FontAwesomeIcon icon={['fas', 'times-circle']} />
                </div>
            </motion.a>
            <motion.div 
                variants={featureTransitions.infoButton} 
                onClick={() => setLinkOpen(true)} 
                className={styles.infoButton}
            >
                <FontAwesomeIcon size='sm' icon={['fas', 'info']}/>
            </motion.div>
        </motion.div>
    )
}
