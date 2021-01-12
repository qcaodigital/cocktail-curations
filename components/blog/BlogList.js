import styles from './BlogList.module.scss';
import convertPrismicDate from './../../helpers/convertDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import PropTypes from 'prop-types';

BlogList.propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
    setPopup: PropTypes.func.isRequired
}

export default function BlogList({ blogs, setPopup }){
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
                            <Link scroll={false} hrefll={false} href={`/blog/${blog.uid}`}><a>
                                <p className={styles.title}>{blog.data.title[0].text}</p>
                            </a></Link>
                            <p className={styles.author}>{`by ${blog.data.author[0].text}`}</p> 
                            <Link scroll={false} href={`/blog/${blog.uid}`}><a>
                                <div className={styles.img}>
                                    <img src={blog.data.thumbnail.url} alt={blog.data.thumbnail.alt}/> 
                                </div>
                            </a></Link>
                            <div className={styles.tags}>
                                <FontAwesomeIcon icon={['fas', 'tag']}/>
                                {blog.tags.map(tag => (
                                    <span 
                                        key={tag}
                                        onClick={() => setPopup({ isOpen: true, content: 'error'})} 
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                    </div>
                ))}
            </ul>
        </section>
    )
}