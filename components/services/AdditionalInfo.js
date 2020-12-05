import styles from './AdditionalInfo.module.scss';
import Link from 'next/link';
import FadeInViewContainer from './../HOC/FadeInViewContainer';

export default function AdditionalInfo({ textBlocks, cta }){
    return (
        <div className={styles.AdditionalInfo}>
            <div className={styles.textContainer}>
                {textBlocks.map(block => (
                    <div key={block.header} className={styles.textBlock}>
                        <FadeInViewContainer noFade duration={.75}>
                            <h4>{block.header}</h4>
                        </FadeInViewContainer>
                        <FadeInViewContainer noTranslate duration={1.5}>
                            <p>{block.text}</p>
                        </FadeInViewContainer>
                    </div>
                ))}
            </div>
            <div className={styles.CTA}>
                <Link href={cta.href}>
                    <a className='STYLED_BTN'>{cta.text}</a>
                </Link>
            </div>
        </div>
    )
}