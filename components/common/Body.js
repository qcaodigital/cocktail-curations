import React, { useContext, useState, useEffect, useReducer } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Loadingscreen from './Loadingscreen';
import HamburgerMenu from './HamburgerMenu';
import styles from './Body.module.scss';
import { CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

export const navList = [
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
        label: 'Gallery',
        href: '/gallery',
        active: false
    },
    {
        label: 'About',
        href: '/about',
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
export const StateContext = React.createContext({})

export default function Body({ router, children }){
    console.log('Body re-rendering.')
    const initialState = {
        loadComplete: children.type.name !== 'Home',
        // loadComplete: true, //disable loading
        viewport: null,
        isHamburgerMenuOpen: false,
        navHeight: null
    }

    function reducer(state, action){
        const { type, payload, evt } = action;
        switch(type) {
            case 'viewport':
                return { ...state, viewport: payload}
            case 'loadComplete':
                return { ...state, loadComplete: payload }
            case 'hamburgerMenu':
                return { ...state, isHamburgerMenuOpen: payload }
            case 'navheight': {
                return { ...state, navHeight: payload}
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { viewport, loadComplete, isHamburgerMenuOpen, navHeight } = state;

    function handleViewport() {
        if(viewport !== 'mobile' && window.innerWidth <= 749){
            dispatch({ type: 'viewport', payload: 'mobile'})
        } else if(viewport !== 'tablet' && 749 < window.innerWidth && window.innerWidth <= 989){
            dispatch({ type: 'viewport', payload: 'tablet'})
        } else if(viewport !== 'desktop' && window.innerWidth >= 990){
            dispatch({ type: 'viewport', payload: 'desktop'})
        } 
    }
    useEffect(() => handleViewport(), []); //SET VIEWPORT ONLOAD
    useEffect(() => { //VIEWPORT SIZE HANDLER
        window.addEventListener('resize', handleViewport)
        return () => {
            window.removeEventListener('resize', handleViewport)
        }
    }, [viewport])

    useEffect(() => { //HAMBURGER MENU TOGGLE HANDLER
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
    
    useEffect(() => {
        if(isHamburgerMenuOpen){
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style = '';
        }
    }, [isHamburgerMenuOpen])

    useEffect(() => {
        // window.scrollTo(0,0)
    }, [])

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
                route={router.route}
            />
            <StateContext.Provider value={state}>
                <AnimatePresence exitBeforeEnter>
                    {loadComplete && children}
                </AnimatePresence>
            </StateContext.Provider>
            {loadComplete && <Footer/>}
        </main>
        </>
    )
}

export const NAV_SPACER = ({ color }) => {
    const state = useContext(StateContext)
    return <div id='NAV_SPACER' style={{ height: state.navHeight, backgroundColor: color}}/>
}