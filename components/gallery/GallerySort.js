import styles from './GallerySort.module.scss';

export default function GallerySort({ tags, setSortBy, sortBy }){
    return (
        <div className={styles.GallerySort}>
            <ul className={styles.tagList}>
                {tags.map(tag => (
                    <li className={styles.tag}
                        key={tag}
                        onClick={() => setSortBy(tag)}
                        data-active={sortBy === tag}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}