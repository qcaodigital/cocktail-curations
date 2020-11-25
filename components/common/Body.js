import React, { useContext, useState, useEffect, useReducer, useRef } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Loadingscreen from './Loadingscreen';
import HamburgerMenu from './HamburgerMenu';
import styles from './Body.module.scss';
import { CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

const navList = [
    {
        label: 'Home',
        href: '/',
        active: false
    },
    {
        label: 'Shop',
        href: 'http://cocktailcurations-shop.com',
        active: false,
        external: true
    },
    {
        label: 'Services',
        href: '/services',
        active: false
    },
    {
        label: 'Our Team',
        href: '/team',
        active: false
    },
    {
        label: 'Gallery',
        href: '/gallery',
        active: false
    },
    {
        label: 'Blog',
        href: '/blog',
        active: false
    },
    {
        label: 'Contact',
        href: '/contact',
        active: false
    }
];

function reducer(state, action){
    const { type, payload, evt } = action;
    switch(type) {
        case 'viewport':
            return { ...state, viewport: payload}
        case 'loadComplete':
            return { ...state, loadComplete: payload }
        case 'hamburgerMenu':
            return { ...state, isHamburgerMenuOpen: payload }
        case 'navlist': {
            const updatedNav = navList.map(nav => {
                if(nav.href === payload){
                    nav.active = true;
                } else {
                    nav.active = false;
                }
            })
            return { ...state, navList: updatedNav }
        }
    }
}

export const StateContext = React.createContext({})

export default function Body({ children }){
    //INITIAL STATE NEEDS TO BE INSIDE COMPONENT TO ACCESS CHILDREN
    const initialState = { 
        loadComplete: children.type.name !== 'Home',
        // loadComplete: true, //disable loading
        viewport: null,
        isHamburgerMenuOpen: false,
        navList: { ...navList }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const { viewport, loadComplete, isHamburgerMenuOpen, navHeight } = state;

    //SET VIEWPORT ONLOAD
    function handleViewport() {
        if(viewport !== 'mobile' && window.innerWidth <= 749){
            dispatch({ type: 'viewport', payload: 'mobile'})
        } else if(viewport !== 'tablet' && 749 < window.innerWidth && window.innerWidth <= 989){
            dispatch({ type: 'viewport', payload: 'tablet'})
        } else if(viewport !== 'desktop' && window.innerWidth >= 990){
            dispatch({ type: 'viewport', payload: 'desktop'})
        } 
    }
    useEffect(() => handleViewport(), []); 

    //VIEWPORT SIZE HANDLER
    useEffect(() => { 
        window.addEventListener('resize', handleViewport)
        return () => {
            window.removeEventListener('resize', handleViewport)
        }
    }, [viewport])

    //HAMBURGER MENU TOGGLE HANDLER
    useEffect(() => {
        function handleHBM(evt){
            if(evt.type === 'resize' && isHamburgerMenuOpen && viewport === 'desktop'){
                dispatch({ type: 'hamburgerMenu', payload: !isHamburgerMenuOpen})
            } else if(evt.type === 'keyup' && isHamburgerMenuOpen && evt.which === 27){
                dispatch({ type: 'hamburgerMenu', payload: !isHamburgerMenuOpen})
            }
        }

        window.addEventListener('keyup', handleHBM);
        window.addEventListener('resize', handleHBM);
        return () => {
            window.removeEventListener('keyup', handleHBM);
            window.removeEventListener('resize', handleHBM);
        }
    }, [isHamburgerMenuOpen, viewport])
    
    //PREVENT SCROLL AND LOCK VIEWPORT ON HAMBURGER MENU OPEN
    useEffect(() => {
        if(isHamburgerMenuOpen){
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style = '';
        }
    }, [isHamburgerMenuOpen])

    //DISABLE LINKS IF PATH IS ACTIVE
    const router = useRouter();
    useEffect(() => {
        dispatch({ type: 'navlist', payload: router.pathname })
    }, [router])

    //SET SCROLL THRESHOLD TO HIDE NAV BASED ON CURRENT PATH
    const [scrollThreshold, setScrollThreshold] = useState(120);
    useEffect(() => {
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
            toggleHBM={() => dispatch({ type: 'hamburgerMenu', payload: !isHamburgerMenuOpen})}
        />
        <main className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}>
            {!loadComplete && <Loadingscreen turnOffLoading={() => dispatch({ type: 'loadComplete', payload: true})}/>}
            <Nav
                render={viewport !== null && loadComplete} 
                navList={navList} 
                viewport={viewport}
                navHeightCB={height => dispatch({ type: 'navheight', payload: height})} 
                isHamburgerOpen={isHamburgerMenuOpen} hamburgerCB={() => dispatch({ type: 'hamburgerMenu', payload: !isHamburgerMenuOpen})}
                currentPath={router.pathname}
                scrollThreshold={scrollThreshold}
            />
            <StateContext.Provider value={state}>
                <AnimatePresence exitBeforeEnter>
                    {loadComplete && children}
                </AnimatePresence>
            </StateContext.Provider>
            {loadComplete && <Footer navList={navList}/>}
        </main>
        </>
    )
}