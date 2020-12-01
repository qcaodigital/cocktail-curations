import styles from './Sustainability.module.scss';
import { motion } from 'framer-motion';
import FadeInViewContainer from './../HOC/FadeInViewContainer';

export default function Sustainability(){
    return(
        <section id={styles.Sustainability}>
            <section id={styles.primary}>
                <div className={styles.contentContainer}>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/team_page/Gin_Reception Cocktail_Curations-sq.jpg" alt="Cocktail Curations Gin Reception"/>
                    </div>
                    <div className={styles.info}>
                        <header>
                            <FadeInViewContainer>
                                <motion.h3>We believe in applied sustainability</motion.h3>
                            </FadeInViewContainer>
                            <p>Cocktail Curations strives to be a sustainable zero-waste company.</p>
                        </header>
                        <div className={styles.text}>
                            <div>
                                <h4>50%</h4>
                                <p>of all produce is simply thrown away in the United States and so much more is wasted from partially used produce.</p>
                            </div>
                            <div>
                                <h4>65%</h4>
                                <p>of plastic used in the hospitality sector is either single-use or unneccessarily wasted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={styles.secondary}>
                <div className={styles.contentContainer}>
                    <div className={styles.imgContainer}>
                        <img src="/imgs/stock/team_page/sustainability-1-sq.jpg" alt="Cocktail Curations Garnish"/>
                    </div>
                    <div className={styles.info}>
                        <header>
                            <h3>taking care of the earth should be ingrained in everything a company does.</h3>
                            <p>We suscribe to the idea of working toward keeping our home beautiful for future generations to come. So what are we doing about it?</p>
                        </header>
                        <div className={styles.text}>
                            <div>
                                <h4>We use fruits and vegetables <span style={{ display: 'inline-block'}}>pith to peel</span></h4>
                                <p>From juicing fresh fruits to create our mixes, using the pith to make our bitters, and utilizing the peel to create our beautiful Botanical Waters, no produce goes to waste in our kitchen.</p>
                            </div>
                            <div>
                                <h4>Unused products from our events have a second life</h4>
                                <p>We create other amazing products like our tonics and botanical waters largely from "leftover" produce. Additionally, we avoid using single-use plastics in our events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}