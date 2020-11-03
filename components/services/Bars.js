import React from 'react';
import styles from './Bars.module.scss';

const Bars = React.forwardRef((props, ref) => {
    return (
        <section id={styles.Bars} ref={ref}>
            {/* <div className={styles.background}/> */}
            <header>
                <h2>Peronalize and tailor your event with one of our <span className={styles.emph}>experiential bars</span></h2>
                <p>To curate is to design and select items from among a large number of possibilities. Our mixology bars offer customized  experiences for your special event. It's more than just a specialty cocktail. Our bartenders engage with guests and craft cocktails to their preference. From liquid, garnish, to displays, we curate your perfect cocktail bar and guest experience.</p>
            </header>
        </section>
    )
})

export default Bars;