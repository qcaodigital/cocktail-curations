import styles from './Story.module.scss';
import ArrowDivider from '../common/ArrowDivider';
import FadeUpInViewContainer from '../HOC/FadeUpInViewContainer';

export default function Story({ viewport }){

    return (
        <section id={styles.Story}>
            <ArrowDivider 
                size={{ value: viewport === 'mobile' ? 1 : 2, measurement: 'rem'}} 
                BGcolor='var(--secondary-color)' 
                border={{size: 1, color: 'rgba(175 ,175, 175)'}}
            />  
            <header>
                <img src="/imgs/stock/logos/cc-icon-logo-color.png" alt="Cocktail Curations logo"/>
                <FadeUpInViewContainer>
                    <h2>Our Story</h2>
                </FadeUpInViewContainer>
                <FadeUpInViewContainer>
                    <h3>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit."</h3>
                </FadeUpInViewContainer>
                <div className={styles.divider}/>
            </header>
            <div className={styles.contentContainer}>
                <div className={styles.block}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</p>
                </div>
                {/* <div className={styles.test}><img src='/imgs/stock/team_page/cocktailcurations-cocktail-sq.jpg'/></div> */}
                <div className={styles.block}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit veritatis eveniet exercitationem vitae soluta delectus error impedit totam perferendis aliquid quo quia, tempora, modi consequatur non officiis expedita, voluptate libero nisi ducimus beatae distinctio! Magnam dolor, quam consequatur a id reiciendis delectus. Cum magnam commodi magni accusantium quam sit?</p>
                </div>
            </div>
        </section>
    )
}