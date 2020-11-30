import styles from './LandingInfo.module.scss';
import smoothscroll from 'smoothscroll';

export default function LandingInfo({refs, navHeight, viewport}){
    const scrollAnchorDesktopAdjustment = viewport === 'mobile' ? 0 : navHeight / 2;
    const scrollAnchorDuration = 2000;

    return (
        <div className={styles.infoBlock}>
            <h3>We offer a variety of services to share our love and passion for mixology.</h3>
            <h4>From specialized private event bars to in-person or virtual cocktail classes, we've got you covered.</h4>
            <p><em>We provide:</em></p>
            <ul>
                <li>
                    Experience-based, <strong>speciality bars</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bars.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Interactive <strong>cocktail classes</strong>. 
                    <span 
                        onClick={() => smoothscroll(refs.classes.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)}
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>
                    Custom-curated <strong>cocktail bases</strong>. 
                    <span
                        onClick={() => smoothscroll(refs.bases.current.offsetTop - scrollAnchorDesktopAdjustment, scrollAnchorDuration)} 
                        className={styles.scrollAnchor}
                    >Learn more.
                    </span>
                </li>
                <li>... and more!</li>
            </ul>
        </div>
    )
}