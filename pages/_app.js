import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/common_styles.scss';
import '../styles/ivy_mode.css';
import '../styles/saol_display.css';
import '../styles/aktiv_grotesk.css';
import Body from '../components/common/Body';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href='/favicons/favicon.ico'/>
                <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <Body router={router}>
                <Component {...pageProps} key={router.route}/>
            </Body>
        </>
    )
}

export default MyApp
