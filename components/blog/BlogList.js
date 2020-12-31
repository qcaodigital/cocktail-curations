import styles from './BlogList.module.scss';
import convertPrismicDate from './../../helpers/convertDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BlogList({ blogs }){
    console.log(blogs)
    return (
        <section id={styles.BlogList}>
            <h3>Blog Articles</h3>
            <ul className={styles.list}>
                {blogs.map(blog => (
                    <div className={styles.blog}>
                        <p className={styles.date}>{`${convertPrismicDate(blog.data.date_published)}`}</p>
                        <p className={styles.title}>{blog.data.title[0].text}</p>
                        <p className={styles.author}>{`by ${blog.data.author[0].text}`}</p> 
                        <img src={blog.data.main_img.url} alt=""/> 
                        <div className={styles.tags}>
                            <FontAwesomeIcon icon={['fas', 'tag']}/>
                            {blog.tags.map(tag => (
                                <span>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </ul>
        </section>
    )
}