import styles from './Modal.module.scss';

export default function Modal({ img }){
    const orientation = img.dimensions.height > img.dimensions.width ? 'portrait' : 'landscape';

    return (
        <div id={styles.Modal}>
            <div className={`${styles.imgContainer} ${styles[orientation]}`}>
                <img src={img.url} alt={img.alt}/>
            </div>
        </div>
    )
}