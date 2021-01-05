import React, { useEffect } from 'react';
import Router from 'next/router'
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/common_styles.scss';
import '../styles/ivy_mode.css';
import '../styles/saol_display.css';
import '../styles/aktiv_grotesk.css';
import Body from '../components/common/Body';

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

function MyApp({ Component, pageProps, router }) {
    const routeChange = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions. Keep an eye on this
      // issue and remove this code when resolved:
      // https://github.com/vercel/next.js/issues/17464

        const tempFix = () => {
            const allStyleElems = document.querySelectorAll('style[media="x"]');
            allStyleElems.forEach((elem) => {
                elem.removeAttribute("media");
            });
        };
        tempFix();
    };

    Router.events.on("routeChangeComplete", routeChange );
    Router.events.on("routeChangeStart", routeChange );
    return (
        <>
            <Head>
                <link rel="shortcut icon" href='/favicons/favicon-32x32.png' type='image/png'/>
                <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <Body router={router}>
                <Component {...pageProps} key={router.route} router={router}/>
            </Body>
        </>
)
}

export default MyApp
