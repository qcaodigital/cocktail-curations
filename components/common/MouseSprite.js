import styles from './MouseSprite.module.scss';

export default function MouseSprite({ clickCB }){
    return (
        <div onClick={clickCB} className={styles.mouseSprite}>
            <div className={styles.mouseAnimation}/>
        </div>
    )
}