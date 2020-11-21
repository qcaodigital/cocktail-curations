import styles from './Person.module.scss';

export default function Person({ name, img, text, quote, reverse, bgColor }){
    return(
        <div id={styles.Person} className={reverse && styles.reverse}>
            <div className={styles.nameContainer}>
                <h3>{name.first}</h3>
                <h3>{name.last}</h3>
            </div>
            <div className={styles.imgContainer}>
                <img src={img.src} alt={img.alt}/>
            </div>
            <div className={styles.text}>
                {text.map(textsection => (
                    <p key={textsection}>{textsection}</p>
                ))}
                <blockquote>{quote}</blockquote>
            </div>
        </div>
    )
}