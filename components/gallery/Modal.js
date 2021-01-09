import styles from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { modalTransitions } from '../../page_transitions/gallery';
import useGetSwipeDirection from './../../custom_hooks/useGetSwipeDirection';

export default function Modal({ modalImgIdx, imgList, setModalImg, viewport }){
    if (!imgList[modalImgIdx]) return null;
    const [orientation, setOrientation] = useState(imgList[modalImgIdx].img.dimensions.height > imgList[modalImgIdx].img.dimensions.width ? 'portrait' : 'landscape');

    useEffect(() => {
        const handleKeypress = (evt) => (evt.keyCode === '27' || evt.key === 'Escape') ? setModalImg(null) : null;
        window.addEventListener('keyup', handleKeypress)
        return () => {
            window.removeEventListener('keyup', handleKeypress)
        }
    }, [])

    useEffect(() => {
        setOrientation(imgList[modalImgIdx].img.dimensions.height > imgList[modalImgIdx].img.dimensions.width ? 'portrait' : 'landscape')
    }, [modalImgIdx])

    const handleNextImg = () => imgList.length - 1 > modalImgIdx ? setModalImg(curr => curr + 1) : setModalImg(0);
    const handlePrevImg = () => modalImgIdx > 0 ? setModalImg(curr => curr - 1) : setModalImg(imgList.length - 1);
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
                        key={imgList[modalImgIdx].img.url} 
                        src={imgList[modalImgIdx].img.url} 
                        alt={imgList[modalImgIdx].img.alt}
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
                <p>{`${modalImgIdx + 1} / ${imgList.length}`}</p>
            </div>
            <div id={styles.RIGHT} className={styles.chevronContainer} onClick={handleNextImg} >
                <div className={styles.chevron}/>
                <p>{`${modalImgIdx + 1} / ${imgList.length}`}</p>
            </div>
            <div className={styles.closeIcon} onClick={() => setModalImg(null)}>
                <p>+</p>
            </div>
            {/* end absolute elements */}
        </motion.div>
    )
}