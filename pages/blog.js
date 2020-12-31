import styles from './blog.module.scss';
import { Client, assignResultTo } from '../prismic-configuration';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import convertPrismicDate from '../helpers/convertDate';
import BlogList from '../components/blog/BlogList';

export default function Blog({ prismicResults, NAV_SPACER, state: { viewport } }){
    const blogs = assignResultTo('blog', prismicResults);
    const latestBlog = blogs[blogs.length - 1].data;
    console.log(blogs)
    return (
        <>
        <Head>
            <title>Blog | Cocktail Curations</title>
        </Head>
        <motion.section id={styles.Blog} exit={{ opacity: 0 }}>
            <section 
                className={styles.landing}
                style={{ '--img': latestBlog.main_img.url }}
            >
                {NAV_SPACER}
                <div className={styles.latest}>
                    <header>
                        <h2>Whats New</h2>
                        <h1>On Our Blog</h1>
                        <div className={styles.divider}/>
                    </header>
                    <div className={styles.blogImg}>
                        <div className={styles.imgContainer}>
                            <img src={latestBlog.main_img.url}/>
                        </div>
                    </div>
                    <div className={styles.blogInfo}>
                        <p className={styles.title}>{latestBlog.title[0].text}</p>
                        <div className={styles.author}>
                            <span>{`by ${latestBlog.author[0].text}`}</span> 
                            <span className={styles.date}>{`${convertPrismicDate(latestBlog.date_published)}`}</span>
                        </div>
                        <p className={styles.subheaderPreview}>
                            {latestBlog.subheader[0].text.split(" ")
                                .filter((word, idx) => viewport === 'desktop' ? idx < Infinity : idx < 30).join(" ")
                            }
                        </p>
                        <button className='STYLED_BTN'>
                            <Link href='/'><a>Read more</a></Link>
                        </button>
                    </div>
                </div>
            </section>
            <BlogList blogs={blogs}/>
        </motion.section>
        </>
    )
}

export async function getStaticProps(){
    const prismicResults = await Client().query('')
    return {
        props: {
            prismicResults: prismicResults || null
        }
    }
}