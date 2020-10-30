import styles from './FeatureItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import transitions from './FeatureItemsTransitions';

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
            return ['calc(-100% + 1rem)', 'calc(0% + 1rem)'];
        } else if(arrowPosition === 'topLeft'){
            return ['calc(-0% - 1rem)', 'calc(0% + 1rem)'];
        } else if(arrowPosition === 'bottomRight'){
            return ['calc(-100% + 1rem)', 'calc(0% - 1rem)'];
        } else if(arrowPosition === 'bottomLeft'){
            return ['calc(-0% - 1rem)', 'calc(-100% - 1rem)'];
        } else {
            return ['0', '0']
        }
    }

    const linkStyles = {
        left: item.focus.x,
        top: item.focus.y,
        translateX: transformContainer(item.arrowPos)[0],
        translateY: transformContainer(item.arrowPos)[1]
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
                variants={transitions.scaleUp}
            >   
                <motion.div 
                    className={styles.iconContainer}    
                    variants={transitions.scaleUp}  
                    transition={{delay: .25, duration: .1}}    
                >
                    <FontAwesomeIcon size={viewport !== 'desktop' ? 'sm' : 'lg'} icon={['fas', 'shopping-bag']}/>
                </motion.div>
                <motion.p style={{ display: 'inline-block' }} variants={transitions.stagger}>{item.label.split('').map((letter, idx) => (
                    <motion.span
                        variants={transitions.fadeIn} 
                        key={letter + idx}>
                        {letter}
                    </motion.span>
                ))}</motion.p>
                <div style={arrowStyles[item.arrowPos]} className={styles.arrow}/>
                <div style={closeIconLocation(item.arrowPos)} className={styles.closeIcon} onClick={handleClose}>
                    <FontAwesomeIcon icon={['fas', 'times-circle']} />
                </div>
            </motion.a>
            <motion.div 
                variants={transitions.infoButton} 
                onClick={() => setLinkOpen(true)} 
                className={styles.infoButton}
            >
                <FontAwesomeIcon size='sm' icon={['fas', 'info']}/>
            </motion.div>
        </motion.div>
    )
}
