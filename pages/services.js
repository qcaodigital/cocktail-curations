import Head from 'next/head';
import { useRef } from 'react';
import Landing from '../components/services/Landing';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes';
import Bars from '../components/services/Bars';
import Bases from '../components/services/Bases';
import { motion } from 'framer-motion';
import styles from './services.module.scss';
import useOnAniStartOnlyEntry from './../custom_hooks/useOnAniStartOnlyEntry';
import PropTypes from 'prop-types';

Services.propTypes = {
	state: PropTypes.shape({
		viewport: PropTypes.string,
		navHeight: PropTypes.number.isRequired,
	}),
	NAV_SPACER: PropTypes.object,
};

export default function Services({ state: { viewport, navHeight }, NAV_SPACER }) {
	const copyRef = useRef();
	const classesRef = useRef();
	const barsRef = useRef();
	const basesRef = useRef();

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

	const onAniStart = useOnAniStartOnlyEntry();
	return (
		<>
			<Head>
				<title>Services | Cocktail Curations</title>
			</Head>
			<motion.main
				id={styles.services}
				initial='load_initial'
				animate='load_animate'
				exit='load_exit'
				variants={pageVariant}
				onAnimationStart={onAniStart}
			>
				<Landing
					viewport={viewport}
					navHeight={navHeight}
					NAV_SPACER={NAV_SPACER}
					refs={{
						copy: copyRef,
						classes: classesRef,
						bars: barsRef,
						bases: basesRef,
					}}
				/>
				<Copy ref={copyRef} viewport={viewport} />
				<Bars ref={barsRef} viewport={viewport} />
				<Classes ref={classesRef} viewport={viewport} />
				<Bases ref={basesRef} />
			</motion.main>
		</>
	);
}
