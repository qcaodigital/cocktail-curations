import React, { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Loadingscreen from './Loadingscreen';
import HamburgerMenu from './HamburgerMenu';
import PopUp from './PopUp';
import styles from './Body.module.scss';
import { AnimatePresence } from 'framer-motion';
import navListData from '../../data/navList';
import useViewport from '../../custom_hooks/main_state/useViewport';
import useIsHamburgerMenuOpen from '../../custom_hooks/main_state/useIsHamburgerMenuOpen';
import useNavList from './../../custom_hooks/main_state/useNavList';

export default function Body({ children }){
    const router = useRouter();
    const viewport = useViewport();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useIsHamburgerMenuOpen(viewport);
    const navList = useNavList(navListData, router)
    const [loadComplete, setLoadComplete] = useState(true);
    const [navHeight, setNavHeight] = useState(120);
    const [isNavAniComplete, setIsNavAniComplete] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>
        <AnimatePresence>
            {isHamburgerMenuOpen && viewport === 'mobile' &&  
                <HamburgerMenu 
                    navList={navList} 
                    toggleHBM={() => setIsHamburgerMenuOpen(curr => !curr)}
                    navHeight={navHeight}
                />
            }
        </AnimatePresence>
        <main 
            className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}
            style={{ '--navHeight': `${navHeight}px` }}
        >
            {/* <Loadingscreen turnOffLoading={() => setLoadComplete(true)}/> */}
            {isPopUpOpen && <PopUp setIsPopUpOpen={setIsPopUpOpen} />}
            <Nav
                render={viewport !== null && loadComplete} 
                navList={navList} 
                viewport={viewport}
                navHeight={navHeight}
                navHeightCB={height => setNavHeight(height)} 
                isHamburgerOpen={isHamburgerMenuOpen} 
                hamburgerCB={() => setIsHamburgerMenuOpen(curr => !curr)}
                router={router}
                navAniCompletionCB={() => setIsNavAniComplete(true)}
            />
            <AnimatePresence exitBeforeEnter>
                {loadComplete && React.cloneElement(children, { 
                    state: { 
                        loadComplete: loadComplete,
                        viewport: viewport,
                        isHamburgerMenuOpen: isHamburgerMenuOpen,
                        navList: navList,
                        navHeight: navHeight,
                        isNavAniComplete: isNavAniComplete,
                        setIsPopUpOpen: setIsPopUpOpen
                    },
                    NAV_SPACER: <div id='NAV_SPACER' style={{ height: navHeight }}/>,
                })}
            </AnimatePresence>
            {loadComplete && router.pathname !== '/' && <Footer navList={navList}/>}
        </main>
        </>
    )
}