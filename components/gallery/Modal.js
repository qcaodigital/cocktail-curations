import styles from './Modal.module.scss';
import { useEffect } from 'react';

export default function Modal({ img, setModalImg }){
    if (!img) return null;
    const orientation = img.dimensions.height > img.dimensions.width ? 'portrait' : 'landscape';

    useEffect(() => {
        function handleKeypress(evt){
            if(evt.keyCode === '27' || evt.key === 'Escape'){
                setModalImg(null)
            }
        }

        window.addEventListener('keyup', handleKeypress)
    }, [])

    return (
        <div id={styles.Modal}>
            <div className={`${styles.imgContainer} ${styles[orientation]}`} keepModalOpen='true'>
                <img src={img.url} alt={img.alt}/>
            </div>
        </div>
    )
}