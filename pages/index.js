import Link from 'next/link';
import styles from './Home.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { landingTransitions, headerTransitions } from './../page_transitions/home';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

Home.propTypes = {
	state: PropTypes.shape({
		isNavAniComplete: PropTypes.bool.isRequired,
		viewport: PropTypes.string.isRequired,
		setPopup: PropTypes.func.isRequired,
		initialVisit: PropTypes.bool.isRequired,
		setInitialVisit: PropTypes.func.isRequired,
	}),
};

export default function Home({
	state: { isNavAniComplete, viewport, setPopup, initialVisit, setInitialVisit },
}) {
	const headerVariant = headerTransitions.fadeIn;
	const [animationComplete, setAnimationComplete] = useState(false);
	const router = useRouter();
	const onAniStart = useOnAniStartOnlyEntry();

	useEffect(() => {
		if (animationComplete && !initialVisit) {
			setPopup({
				isOpen: true,
				content: {
					heading: 'Hey there!',
					text:
						'Looks like you landed on our parking site for our new website! It\'s not live yet so if you meant to go to our live website "cocktailcurations.com", click the button below. Otherwise just close this window and feel free to check out our future website!',
					img: '/imgs/stock/popup/default_popup_img.jpg',
					ctaText: 'Switch Websites',
					ctaFunc: () => router.push('https://www.cocktailcurations.com'),
				},
			});
			setInitialVisit(true);
		}
	}, [animationComplete]);

	return (
		<>
			<Head>
				<title>Welcome To Cocktail Curations</title>
			</Head>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				id={styles.Home}
				onAnimationStart={onAniStart}
			>
				<section className={styles.landing}>
					<motion.section
						animate={isNavAniComplete ? 'animate' : 'initial'}
						initial='initial'
						variants={landingTransitions.staggerContent}
						id={styles.one}
						onAnimationComplete={() => setAnimationComplete(true)}
					>
						<div className={styles.bg} />
						<motion.div variants={landingTransitions.line} className={styles.line} />
						<motion.img
							src='/imgs/stock/logos/cc-icon-logo-color.png'
							alt='Cocktail Curations Logo'
							variants={landingTransitions.logo}
							className={styles.logo}
						/>
						<motion.header variants={headerTransitions.staggerHeader}>
							<div style={{ overflow: 'hidden' }}>
								<motion.p variants={headerVariant}>Beautifully crafted</motion.p>
							</div>
							<div style={{ overflow: 'hidden' }}>
								<motion.h1 variants={headerVariant}>Cocktail Bars</motion.h1>
							</div>
							<div style={{ overflow: 'hidden', display: 'inline-block' }}>
								<motion.h2 variants={headerVariant}>— for private</motion.h2>
							</div>
							<div style={{ overflow: 'hidden', display: 'inline-block' }}>
								<motion.h2 variants={headerVariant} style={{ marginLeft: '.5vw' }}>
									{' '}
									& corporate events
								</motion.h2>
							</div>
							<motion.div
								variants={headerTransitions.staggerHeader}
								className={styles.cta}
							>
								<motion.button
									variants={headerTransitions.fadeIn}
									whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
								>
									<Link scroll={false} href='/services'>
										<a className='STYLED_BTN'>What we do</a>
									</Link>
								</motion.button>
								<motion.button
									variants={headerTransitions.fadeIn}
									whileTap={{ scale: viewport !== 'desktop' ? 0.9 : 1 }}
								>
									<a
										className='STYLED_BTN'
										href='http://www.cocktailcurations-shop.com'
										target='_blank'
										rel='noopener referrer'
									>
										<span>Our Shop</span>
									</a>
								</motion.button>
							</motion.div>
						</motion.header>
					</motion.section>
				</section>
			</motion.section>
		</>
	);
}
