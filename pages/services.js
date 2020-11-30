import Head from 'next/head';
import { useRef } from 'react';
import Landing from '../components/services/Landing';
import Copy from '../components/services/Copy';
import Classes from '../components/services/Classes'
import Bars from '../components/services/Bars';
import Bases from '../components/services/Bases';
import { motion } from 'framer-motion';

export default function Services({ state: { viewport, navHeight }, NAV_SPACER }){
    const classesRef = useRef();
    const barsRef = useRef();
    const basesRef = useRef();

    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <motion.main 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <Landing 
                viewport={viewport} 
                navHeight={navHeight}
                NAV_SPACER={NAV_SPACER}
                refs={{
                    classes: classesRef,
                    bars: barsRef,
                    bases: basesRef
                }}
            />
            <Copy viewport={viewport}/>
            <Bars ref={barsRef}/>
            <Classes ref={classesRef}/>
            <Bases ref={basesRef}/>
        </motion.main>
        </>
    )
}