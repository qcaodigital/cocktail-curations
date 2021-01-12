import styles from './GallerySort.module.scss';
import PropTypes from 'prop-types';

GallerySort.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    setFilterBy: PropTypes.func.isRequired,
    filterBy: PropTypes.string.isRequired
}

export default function GallerySort({ tags, setFilterBy, filterBy }){
    return (
        <div className={styles.GallerySort}>
            <ul className={styles.tagList}>
                {tags.map(tag => (
                    <li className={styles.tag}
                        key={tag}
                        onClick={() => setFilterBy(tag)}
                        data-active={filterBy === tag}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}