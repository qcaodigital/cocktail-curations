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
import useScrollThreshold from './../../custom_hooks/main_state/useScrollThreshold';

export default function Body({ children }){
    const router = useRouter();
    const viewport = useViewport();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useIsHamburgerMenuOpen(viewport);
    const navList = useNavList(navListData, router)
    const scrollThreshold = useScrollThreshold(120, { team: 100, services: 100 }, router)
    const [loadComplete, setLoadComplete] = useState(true);
    const [navHeight, setNavHeight] = useState(null);

    return (
        <>
        <HamburgerMenu 
            isHamburgerMenuOpen={isHamburgerMenuOpen}
            navList={navList} 
            toggleHBM={() => setIsHamburgerMenuOpen(curr => !curr)}
        />
        <main className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}>
            {/* <Loadingscreen turnOffLoading={() => setLoadComplete(true)}/> */}
            <Nav
                render={viewport !== null && loadComplete} 
                navList={navList} 
                viewport={viewport}
                navHeight={navHeight}
                navHeightCB={height => setNavHeight(height)} 
                isHamburgerOpen={isHamburgerMenuOpen} 
                hamburgerCB={() => setIsHamburgerMenuOpen(curr => !curr)}
                currentPath={router.pathname}
                scrollThreshold={scrollThreshold}
            />
            <AnimatePresence exitBeforeEnter>
                {loadComplete && React.cloneElement(children, { 
                    state: { 
                        loadComplete: loadComplete,
                        viewport: viewport,
                        isHamburgerMenuOpen: isHamburgerMenuOpen,
                        navList: navList,
                        navHeight: navHeight,
                        scrollThreshold: scrollThreshold 
                    },
                    NAV_SPACER: <div id='NAV_SPACER' style={{ height: navHeight}}/>,
                })}
            </AnimatePresence>
            {loadComplete && <Footer navList={navList}/>}
        </main>
        </>
    )
}