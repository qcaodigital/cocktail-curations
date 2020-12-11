import Head from 'next/head';
import styles from './team.module.scss';
import Person from '../components/team/Person';
import Story from '../components/team/Story';
import Personnel from '../components/team/Personnel';
import Sustainability from '../components/team/Sustainability';
import Landing from './../components/team/Landing';
import DuoInfo from './../components/team/DuoInfo';
import { motion } from 'framer-motion';

export default function Team({ state: { viewport, isNavAniComplete, navHeight }, NAV_SPACER }){
    return (
        <>
        <Head>
            <title>Our Team | Cocktail Curations</title>
        </Head>
        <motion.main 
            id={styles.Team}
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: .75 }}
        >
            <Landing isNavAniComplete={isNavAniComplete} NAV_SPACER={NAV_SPACER}/>
            <Story viewport={viewport} />
            <DuoInfo viewport={viewport} />
            <Personnel/>
            <Sustainability viewport={viewport}/>
        </motion.main>
        </>
    )
}