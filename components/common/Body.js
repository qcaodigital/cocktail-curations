import React, { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Loadingscreen from './Loadingscreen';
import HamburgerMenu from './HamburgerMenu';
import styles from './Body.module.scss';
import { AnimatePresence } from 'framer-motion';
import navListData from '../../data/navList';
import useViewport from '../../custom_hooks/main_state/useViewport'
import useIsHamburgerMenuOpen from '../../custom_hooks/main_state/useIsHamburgerMenuOpen'
import useNavList from '../../custom_hooks/main_state/useNavList'

export default function Body({ children }){
    const [loadComplete, setLoadComplete] = useState(false);
    const viewport = useViewport();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useIsHamburgerMenuOpen(viewport);
    const router = useRouter();
    const navList = useNavList(navListData, router)
    const [scrollThreshold, setScrollThreshold] = useState(120);
    useEffect(() => { //SET THE SCROLLTHRESHOLD BEFORE NAV MINIMIZES HERE
        switch(router.pathname){
            case '/team':
                setScrollThreshold(100);
                break;
            default:
                setScrollThreshold(120);
        }
    }, [router])

    return (
        <>
        <HamburgerMenu 
            isHamburgerMenuOpen={isHamburgerMenuOpen}
            navList={navList} 
            toggleHBM={() => setIsHamburgerMenuOpen(curr => !curr)}
        />
        <main className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}>
            {!loadComplete && <Loadingscreen turnOffLoading={() => setLoadComplete(true)}/>}
            <Nav
                render={viewport !== null && loadComplete} 
                navList={navList} 
                viewport={viewport}
                // navHeightCB={height => dispatch({ type: 'navheight', payload: height})} 
                isHamburgerOpen={isHamburgerMenuOpen} hamburgerCB={() => setIsHamburgerMenuOpen(curr => !curr)}
                currentPath={router.pathname}
                scrollThreshold={scrollThreshold}
            />
            <AnimatePresence exitBeforeEnter>
                {loadComplete && React.cloneElement(children, { state: { 
                    loadComplete: loadComplete,
                    viewport: viewport,
                    isHamburgerMenuOpen: isHamburgerMenuOpen,
                    navList: navList,
                    scrollThreshold: scrollThreshold 
                }})}
            </AnimatePresence>
            {loadComplete && <Footer navList={navList}/>}
        </main>
        </>
    )
}