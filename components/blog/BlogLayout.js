import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from './BlogLayout.module.scss';
import convertDate from '../../helpers/convertDate';
import SelectFirstSentence from '../HOC/selectFirstSentence';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SliceZone from './SliceZone';
import RelatedBlogs from './layout_aside/RelatedBlogs';
import ProductAds from './layout_aside/ProductAds';
import SocialShare from './SocialShare';
import PropTypes from 'prop-types';

BlogLayout.propTypes = {
    blog: PropTypes.object.isRequired,
    blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    NAV_SPACER: PropTypes.object.isRequired,
    state: PropTypes.shape({ 
        viewport: PropTypes.string,
        setPopup: PropTypes.func.isRequired, 
    }),
    router: PropTypes.object.isRequired,
}

export default function BlogLayout({ blog, blogs, products, NAV_SPACER, state: { viewport, setPopup }, router}){
    const { date_published, title, author, category, thumbnail, subheader } = blog.data;

    return (
        <>
            <Head>
                <title>{title[0].text} | Cocktail Curations</title>
                <meta property="og:url"           content={`http://localhost:3000${router.asPath}`} />
                <meta property="og:type"          content="website" />
                <meta property="og:title"         content="Your Website Title" />
                <meta property="og:description"   content="Your description" />
                <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />
            </Head>
            <motion.section 
                key={blog.uid}
                id={styles[title[0].text]} className={styles.Blog}
                exit={{ opacity: 0 }} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .5 }}
                onAnimationStart={() => window.scrollTo({ top: 0 })}
            >
                <main>
                    {NAV_SPACER}
                    <article>
                        <Link href='/blog'>
                            <a className={styles.banner}>
                                <FontAwesomeIcon icon={['fas', 'caret-left']}/>
                                <span>Back to all blogs</span>
                            </a>
                        </Link>
                        <header>
                            <div className={styles.breadcrumbs}>
                                <span><Link href='/blog'><a>Blogs</a></Link></span>
                                {/* <span><Link href='/blog'><a>{category[0].text}</a></Link></span> */}
                                <span style={{ cursor: 'pointer' }} onClick={() => setPopup({ isOpen: true, content: 'error' })}>{category[0].text}</span>
                                <span>{title[0].text}</span>
                            </div>
                            <h1>{title[0].text}</h1>
                            <div className={styles.authorDate}>
                                <span className={styles.author}>{author[0].text}</span>
                                <span>•</span>
                                <span>{convertDate(date_published)}</span>
                            </div>
                            <SocialShare url={`http://cocktailcurations.com${router.asPath}`} img={thumbnail.url}/>
                        </header>
                        <div className={styles.thumbnailContainer}>
                            <img src={thumbnail.url} alt={thumbnail.alt}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.subheader}>
                                <SelectFirstSentence style={{ fontWeight: '600', opacity: '1' }}>
                                    <h2>{subheader[0].text}</h2>
                                </SelectFirstSentence>
                            </div>
                            <SliceZone blog={blog}/>
                        </div>
                        <Link href='/blog'><a>
                            <motion.button 
                                className='STYLED_BTN'
                                whileTap={{ scale: viewport !== 'desktop' ? .9 : 1 }}
                            >
                                Back To All Blogs
                            </motion.button>
                        </a></Link>
                    </article>
                    <aside>
                        <RelatedBlogs maxBlogs={3} currentBlog={blog} blogs={blogs} parentStyles={styles}/>
                        <ProductAds numProducts={4} products={products} parentStyles={styles}/>
                    </aside>
                </main>
            </motion.section>
        </>
    )
}