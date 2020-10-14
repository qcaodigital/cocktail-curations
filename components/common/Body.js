import React, { useState, useEffect, useContext } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Loadingscreen from './Loadingscreen';
import HamburgerMenu from './HamburgerMenu';
import styles from './Body.module.scss';
import { CSSTransition } from 'react-transition-group';

export default function Body({ children }){
    const [loadComplete, setLoadComplete] = useState(children.type.name !== 'Home');
    const [viewport, setViewport] = useState(null);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [navList, setNavList] = useState([
        {
            label: 'Home',
            href: '/',
            active: true
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
    ])

    useEffect(() => { //VIEWPORT SIZE HANDLER
        function handleViewportSize(){
            if(window.innerWidth < 750){
                setViewport('mobile');
            } else if(window.innerWidth < 990){
                setViewport('tablet');
            } else {
                setViewport('desktop');
            }
        }
        handleViewportSize()
        window.addEventListener('resize', handleViewportSize)
        return () => {
            window.addEventListener('resize', handleViewportSize)
        }
    }, [viewport])

    useEffect(() => { //HAMBURGER MENU TOGGLE HANDLER
        function handleHBM(evt){
            if(evt.type === 'resize' && isHamburgerMenuOpen && viewport === 'desktop'){
                setIsHamburgerMenuOpen(false)
            } else if(evt.type === 'keyup' && isHamburgerMenuOpen && evt.which === 27){
                setIsHamburgerMenuOpen(false)
            }
        }
        window.addEventListener('keyup', handleHBM);
        window.addEventListener('resize', handleHBM);
        return () => {
            window.addEventListener('keyup', handleHBM);
            window.addEventListener('resize', handleHBM);
        }
    }, [isHamburgerMenuOpen, viewport])

    return (
        <>
        <HamburgerMenu isHamburgerMenuOpen={isHamburgerMenuOpen} navList={navList} toggleHBM={() => setIsHamburgerMenuOpen(curr => !curr)}/>
        <main className={`${styles.Body} ${isHamburgerMenuOpen && styles.HBMopen}`}>
            {!loadComplete && <Loadingscreen turnOffLoading={() => setLoadComplete(true)}/>}
            <Nav
                render={viewport !== null && loadComplete} 
                navList={navList} 
                viewport={viewport} 
                isHamburgerOpen={isHamburgerMenuOpen} hamburgerCB={() => setIsHamburgerMenuOpen(curr => !curr)}
            />
                <CSSTransition 
                    in={loadComplete}
                    classNames={{ ...styles }}
                    timeout={1000}
                    unmountOnExit
                >{children}
                </CSSTransition>
            <Footer/>
        </main>
        </>
    )
}