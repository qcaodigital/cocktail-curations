import Head from 'next/head';
import styles from './about.module.scss';
import Person from '../components/about/Person';
import Story from '../components/about/Story';
import Personnel from '../components/about/Personnel';
import Sustainability from '../components/about/Sustainability';
import Landing from './../components/about/Landing';
import DuoInfo from './../components/about/DuoInfo';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

About.propTypes = {
	state: PropTypes.shape({
		viewport: PropTypes.string,
		isNavAniComplete: PropTypes.bool.isRequired,
		navHeight: PropTypes.number.isRequired,
	}),
	NAV_SPACER: PropTypes.object,
};

export default function About({ state: { viewport, isNavAniComplete, navHeight }, NAV_SPACER }) {
	const pageVariant = {
		load_initial: { opacity: 0 },
		load_exit: {
			opacity: 0,
			transition: {
				duration: 0.35,
			},
		},
		load_animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const storyRef = useRef();
	const onAniStart = useOnAniStartOnlyEntry();
	return (
		<>
			<Head>
				<title>Our About | Cocktail Curations</title>
			</Head>
			<motion.main
				id={styles.About}
				initial='load_initial'
				animate='load_animate'
				exit='load_exit'
				variants={pageVariant}
				onAnimationStart={onAniStart}
			>
				<Landing
					isNavAniComplete={isNavAniComplete}
					NAV_SPACER={NAV_SPACER}
					navHeight={navHeight}
					viewport={viewport}
					storyRef={storyRef}
				/>
				<Story ref={storyRef} viewport={viewport} />
				<DuoInfo viewport={viewport} />
				<Personnel />
				<Sustainability viewport={viewport} />
			</motion.main>
		</>
	);
}
