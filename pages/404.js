import styles from './404.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function FourOhFour({ NAV_SPACER, pageAniCompleteCB }){
    return (
        <>
        <Head>
            <title>Cocktail Curations</title>
        </Head>
        <motion.section 
            exit={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            initial={{ opacity: 0 }} 
            transition={{ duration: .5 }}
            id={styles['_404']}
            onAnimationStart={pageAniCompleteCB}
        >
            {NAV_SPACER}
            <header>
                <h1><span>We hate broken glasses.</span><span>And broken links are <span style={{ display: 'inline-block'}}>just as bad.</span></span></h1>
                <h2>If you're certain the URL you've typed is valid, something is probably wrong on our end. Please contact <a href='mailto:webmaster@cocktailcurations.com'>webmaster@cocktailcurations.com</a> if it's urgent, or check again in a little. In the meantime, enjoy a drink and hang tight!</h2>
            </header>
            <div className={styles.imgContainer}>
                <img src="/imgs/stock/imgs/broken_glass.png" alt="broken wine glass red"/>
            </div>
            <div className={styles.buttonContainer}>
                <button className='STYLED_BTN'>
                    <Link scroll={false} href='/'><a>Back Home</a></Link>
                </button>
                <button className='STYLED_BTN'>
                    <Link scroll={false} href='/contact'><a>Contact Us</a></Link>
                </button>
            </div>
        </motion.section>
        </>
    )
}