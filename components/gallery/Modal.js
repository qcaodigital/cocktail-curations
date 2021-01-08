import styles from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { modalTransitions } from '../../page_transitions/gallery';
import useGetSwipeDirection from './../../custom_hooks/useGetSwipeDirection';

export default function Modal({ img, setModalImg, imgs, viewport }){
    if (!imgs[img]) return null;
    const [orientation, setOrientation] = useState(imgs[img].dimensions.height > imgs[img].dimensions.width ? 'portrait' : 'landscape');

    useEffect(() => {
        setOrientation(imgs[img].dimensions.height > imgs[img].dimensions.width ? 'portrait' : 'landscape')
    }, [img])

    useEffect(() => {
        const handleKeypress = (evt) => (evt.keyCode === '27' || evt.key === 'Escape') ? setModalImg(null) : null;
        window.addEventListener('keyup', handleKeypress)
        return () => {
            window.removeEventListener('keyup', handleKeypress)
        }
    }, [])

    const handleNextImg = () => imgs.length - 1 > img ? setModalImg(curr => curr + 1) : setModalImg(0);
    const handlePrevImg = () => img > 0 ? setModalImg(curr => curr - 1) : setModalImg(imgs.length - 1);

    const [downHandler, upHandler, swipeDirection] = useGetSwipeDirection();
    useEffect(() => {
        if(swipeDirection.dir === 'left'){
            handleNextImg();
        } else if(swipeDirection.dir === 'right'){
            handlePrevImg()
        }
    }, [swipeDirection])

    return (
        <motion.div id={styles.Modal}
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            exit={{ opacity: 0 }} 
        >
            <div className={`${styles.imgContainer} ${styles[orientation]}`}>
                <AnimatePresence>
                    <motion.img
                        draggable='false'
                        exit='exit'
                        initial='initial'
                        animate='animate'
                        variants={modalTransitions.img}
                        key={img} 
                        src={imgs[img].url} 
                        alt={imgs[img].alt}
                        onMouseDown={downHandler}
                        onTouchStart={downHandler}
                        onMouseUp={upHandler}
                        onTouchEnd={upHandler}
                    />
                </AnimatePresence>
            </div>
            {/* absolute elements below */}
            <div id={styles.LEFT} className={styles.chevronContainer} onClick={handlePrevImg} >
                <div className={styles.chevron}/>
                <p>{`${img + 1} / ${imgs.length}`}</p>
            </div>
            <div id={styles.RIGHT} className={styles.chevronContainer} onClick={handleNextImg} >
                <div className={styles.chevron}/>
                <p>{`${img + 1} / ${imgs.length}`}</p>
            </div>
            <div className={styles.closeIcon} onClick={() => setModalImg(null)}>
                <p>+</p>
            </div>
            {/* end absolute elements */}
        </motion.div>
    )
}