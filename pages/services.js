import Head from 'next/head';
import styles from './Services.module.scss';

export default function Services(){
    return(
        <>
        <Head>
            <title>Services | Cocktail Curations</title>
        </Head>
        <main className={`${styles.Services}`}>
            <p>Services Page</p>
        </main>
        </>
    )
}