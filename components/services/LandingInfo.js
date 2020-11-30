import styles from './LandingInfo.module.scss';

export default function LandingInfo(){
    return (
        <div className={styles.infoBlock}>
            <h3>We offer a variety of services to share our love and passion for mixology.</h3>
            <h4>From specialized private event bars to in-person or virtual cocktail classes, we've got you covered.</h4>
            <p><em>We provide:</em></p>
            <ul>
                <li>
                    Experience-based, <strong>speciality bars</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bars.current.offsetTop - navHeight / 2, 2000)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Interactive <strong>cocktail classes</strong>. 
                    <span 
                        onClick={() => smoothscroll(refs.classes.current.offsetTop - navHeight / 2, 2000)}
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Custom-curated <strong>cocktail bases</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bases.current.offsetTop - navHeight / 2, 2000)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>... and more!</li>
            </ul>
        </div>
    )
}