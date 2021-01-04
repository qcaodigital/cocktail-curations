import styles from './BlogList.module.scss';
import convertPrismicDate from './../../helpers/convertDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function BlogList({ blogs }){
    return (
        <section id={styles.BlogList}>
            <h3>Articles</h3>
            <ul className={styles.list}>
                {blogs.map(blog => (
                    <div 
                        className={styles.blog}
                        key={blog.data.title[0].text} 
                    >
                            <p className={styles.date}>{`${convertPrismicDate(blog.data.date_published)}`}</p>
                            <Link href={`/blog/${blog.uid}`}><a>
                                <p className={styles.title}>{blog.data.title[0].text}</p>
                            </a></Link>
                            <p className={styles.author}>{`by ${blog.data.author[0].text}`}</p> 
                            <Link href={`/blog/${blog.uid}`}><a>
                                <div className={styles.img}>
                                    <img src={blog.data.thumbnail.url} alt=""/> 
                                </div>
                            </a></Link>
                            <div className={styles.tags}>
                                <FontAwesomeIcon icon={['fas', 'tag']}/>
                                {blog.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                    </div>
                ))}
            </ul>
        </section>
    )
}