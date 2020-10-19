import styles from './Gallery.module.scss';

export default function Gallery({ imgs, reverse }){
    return (
        <div className={`${styles.Gallery} ${reverse ? styles.reverse : null}`}>
            {imgs.map(img => (
                <div key={img.href} className={`${styles.Gallery__imgContainer} ${img.card ? styles.hasCard : null}`}>
                    {img.card && (
                    <caption>
                        <p>{img.card.subheader}</p>
                        <a href={img.card.href}>
                            <h3>{img.card.header}</h3>
                        </a>
                    </caption>
                    )}
                    <img src={img.url} alt={img.alt}/>
                </div>
            ))}
            <div className={styles.Gallery__spacerBG}/>
        </div>
    )
}