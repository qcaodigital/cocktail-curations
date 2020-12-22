import Head from 'next/head';
import { useRef } from 'react';
import Landing from '../components/services/Landing';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes'
import Bars from '../components/services/Bars';
import Bases from '../components/services/Bases';
import { motion } from 'framer-motion';

export default function Services({ state: { viewport, navHeight, isNavAniComplete }, NAV_SPACER }){
    const copyRef = useRef();
    const classesRef = useRef();
    const barsRef = useRef();
    const basesRef = useRef();

    const pageVariant = {
        load_initial: { opacity: 0 },
        load_exit: { opacity: 0 },
        load_animate: { 
            opacity: 1,
            transition: {
                duration: 1,
                when: 'beforeChildren'
            }
        }
    }

    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <motion.main 
            initial='load_initial'
            animate='load_animate' 
            exit='load_exit'
            variants={pageVariant}
        >
            <Landing 
                viewport={viewport} 
                navHeight={navHeight}
                NAV_SPACER={NAV_SPACER}
                refs={{
                    copy: copyRef,
                    classes: classesRef,
                    bars: barsRef,
                    bases: basesRef
                }}
            />
            <Copy ref={copyRef} viewport={viewport}/>
            <Bars ref={barsRef}/>
            <Classes ref={classesRef}/>
            <Bases ref={basesRef}/>
        </motion.main>
        </>
    )
}