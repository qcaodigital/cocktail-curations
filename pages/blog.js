import styles from './blog.module.scss';
import { Client, queryPrismicResults } from '../prismic-configuration';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import convertPrismicDate from '../helpers/convertDate';
import BlogList from '../components/blog/BlogList';
import { useEffect, useRef } from 'react';
import constructRellax from './../helpers/constructRellax';
import ArrowDivider from './../components/common/ArrowDivider';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

Blog.propTypes = {
	state: PropTypes.shape({
		viewport: PropTypes.string,
		setPopup: PropTypes.func.isRequired,
	}),
	blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
	NAV_SPACER: PropTypes.object,
};

export default function Blog({ blogs, NAV_SPACER, state: { viewport, setPopup } }) {
	const latestBlog = blogs[blogs.length - 1];

	const bannerRef = useRef();
	useEffect(() => constructRellax(bannerRef, { speed: -2 }), []);

	const onAniStart = useOnAniStartOnlyEntry();

	return (
		<>
			<Head>
				<title>Blog | Cocktail Curations</title>
			</Head>
			<motion.section
				id={styles.Blog}
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				onAnimationStart={onAniStart}
			>
				<section className={styles.landing}>
					<div ref={bannerRef} className={styles.banner}>
						{NAV_SPACER}
						<header>
							<h3>
								Cocktails, Recipes,{' '}
								<span style={{ display: 'inline-block' }}>& More</span>
							</h3>
							<p className={styles.subheader}>Let's talk about it.</p>
							{/* <Link scroll={false} href='/blog'><a><p className={styles.CTA}>Our Most Popular Blogs</p></a></Link> TEMP FUNCTION BELOW*/}
							<p
								onClick={() => setPopup({ isOpen: true, content: 'error' })}
								className={styles.CTA}
							>
								Our Most Popular Blogs
							</p>
						</header>
					</div>
					<div className={styles.latest}>
						<ArrowDivider
							size={{ value: 1.5, measurement: 'rem' }}
							BGcolor='var(--secondary-color)'
						/>
						<header>
							<h2>Whats New</h2>
							<h1>On Our Blog</h1>
							<div className={styles.divider} />
						</header>
						<div className={styles.blogImg}>
							<div className={styles.imgContainer}>
								<img src={latestBlog.data.thumbnail.url} />
							</div>
						</div>
						<div className={styles.blogInfo}>
							<Link scroll={false} href={`/blog/${latestBlog.uid}`}>
								<a>
									<p className={styles.title}>{latestBlog.data.title[0].text}</p>
								</a>
							</Link>
							<div className={styles.author}>
								<span>{`by ${latestBlog.data.author[0].text}`}</span>
								<span className={styles.date}>{`${convertPrismicDate(
									latestBlog.data.date_published
								)}`}</span>
							</div>
							<p className={styles.subheaderPreview}>
								{latestBlog.data.subheader[0].text
									.split(' ')
									.filter((word, idx) =>
										viewport === 'desktop' ? idx < Infinity : idx < 30
									)
									.join(' ')}
							</p>
							<Link scroll={false} href={`/blog/${latestBlog.uid}`}>
								<a>
									<motion.button
										className='STYLED_BTN'
										whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
									>
										Read more
									</motion.button>
								</a>
							</Link>
						</div>
					</div>
				</section>
				<BlogList blogs={blogs} setPopup={setPopup} />
			</motion.section>
		</>
	);
}

export async function getStaticProps() {
	const prismicResults = await Client().query('');
	const blogs = queryPrismicResults('type', 'blog', prismicResults);
	return {
		props: {
			blogs: blogs,
		},
	};
}
