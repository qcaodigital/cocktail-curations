import parsePrismicSlice from './../../helpers/parsePrismicSlice';
import styles from './SliceZone.module.scss';

export default function SliceZone({ document }){
    return (
        <section className={styles.SliceZone}>
            {parsePrismicSlice(document, styles)}
        </section>
    )
}