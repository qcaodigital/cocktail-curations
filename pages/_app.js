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
import { fixTimeoutTransition } from './../utils/fixTimeoutTransitions.ts';
library.add(fas, fab)

fixTimeoutTransition(1000);

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
            </Head>
            <Body router={router}>
                <Component {...pageProps} key={router.route} router={router}/>
            </Body>
        </>
)
}

export default MyApp
