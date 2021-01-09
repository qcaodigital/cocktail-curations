import styles from './GallerySort.module.scss';

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