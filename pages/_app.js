import React from 'react';
import Head from 'next/head';
import styles from '../styles/app.module.scss';
import '../styles/globals.css';
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
                <Component {...pageProps} key={router.route} router={router}/>
            </Body>
        </>
    )
}

export default MyApp
