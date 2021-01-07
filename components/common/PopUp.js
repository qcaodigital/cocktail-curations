import styles from './PopUp.module.scss';
import { useEffect } from 'react';

export default function PopUp({ text='Popup message goes here', setIsPopUpOpen }){
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }, [])

    return (
        <div id={styles.PopUp}>
            <div className={styles.window}>
                <div onClick={() => setIsPopUpOpen(false)} className={styles.closeIcon}>
                    <div/>
                    <div/>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}