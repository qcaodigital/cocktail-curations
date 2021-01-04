import styles from './RelatedBlogs.module.scss';
import Link from 'next/link';

export default function RelatedBlogs({ maxBlogs, currentBlog, blogs, parentStyles }){
    return (
        <section className={styles.RelatedBlogs}>
            <p className={parentStyles.banner}>Related Blogs</p>
            <div className={styles.blogPreviewContainer}>
                {blogs.map((b, idx) => 
                    // b.data.title[0].text !== currentBlog.data.title[0].text &&
                    idx < maxBlogs &&
                    b.category === currentBlog.category && (
                    <div key={b.data.title[0].text} className={styles.blogPreview}>
                        <Link href={`/blog/${b.uid}`}><a>
                            <img src={b.data.thumbnail.url} alt={b.data.thumbnail.alt}/>
                        </a></Link>
                        <Link href={`/blog/${b.uid}`}><a>
                            <h4>{b.data.title[0].text}</h4>
                        </a></Link>
                        <p>{b.data.subheader[0].text
                            .split(" ").filter((word, idx) => idx < 30).join(" ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>

    )
}