import parsePrismicSlice from './../../helpers/parsePrismicSlice';
import styles from './SliceZone.module.scss';
import PropTypes from 'prop-types';

SliceZone.propTypes = {
    blog: PropTypes.object.isRequired
}

export default function SliceZone({ blog }){
    return (
        <section className={styles.SliceZone}>
            {parsePrismicSlice(blog, styles)}
        </section>
    )
}