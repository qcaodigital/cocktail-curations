import Person from './Person';
import styles from './Personnel.module.scss';

export default function Personnel(){
    return (
        <section className={styles.personnel}>
            <Person
                name={{first: 'Nicole', last: 'Hassoun'}}
                img={{src: "/imgs/stock/about_page/NicoleHassoun.jpg", alt: "Nicole Hassoun Founder of Cocktail Curations"}}
                text={[
                    'In 2011, Nicole began crafting creative cocktails at a small bar called Gin Joint. She uniquely transformed her skills in engineering into pairing flavored tonics with an endless supply of gins to showcase different characteristics. In 2013, Nicole started Sinchona LLC, a bespoke tonic water company, where she designed and created delicious homemade tonic syrups branded as Chronic Tonic. In that same year, she taught classes all around the DC Metropolitan area on cocktail-making, tonic-making, and the history of gin. In the following year, Nicole was awarded Best Bartender in DC by the Washington Post Express. She then made the move from creating cocktails to distilling spirits and worked her way up to become Master Distiller of Gin and Vodka at Jos. A. Magnus & Co. Distillery in Washington DC. In 2018, she won Best Navy Strength Gin in the World by Gin Magazine, as well as multiple other awards for her line of gins', 
                    'Currently, Nicole owns and operates two companies in the food & beverage industry: Cocktail Curations produces beautifully crafted cocktails and Botanical Waters for every type of event, and Sinchona LLC specializes in distillery and beverage industry advising.'
                ]}
                quote='I always say that I create out of hunger. We approach beverages as if we are cooking: finding fresh ingredients and outstanding spirits to create something delicious.'
            />
            <div className={styles.spacer}>
                <div className={styles.bg}/>
                <p>&</p>
            </div>
            <Person
                reverse
                name={{first: 'Thy', last: 'Parra'}}
                img={{src: "/imgs/stock/about_page/ThyParra.jpg", alt: "Thy Parra Founder of Cocktail Curations"}}
                text={[
                    'A professionally trained chef, Thy’s career is a 20+ year repertoire of coveted Washington DC hospitality jobs. After attending, the University of Maryland and L’academie de Cuisine, Thy began her career working as a chef for renowned restaurateurs Jeff Buben of Bistro Bis and Cathal Armstrong of Restaurant Eve. She expanded her hospitality expertise as Senior Account Executive for a boutique catering company, as Director of Social Catering at the 5-star Mandarin Oriental Hotel, as well as luxury Event Planner at EVOKE Design and Creative. Thy then led the Events and Marketing department for the award-winning Jos. A. Magnus & Co. Distillery. With her multitude of experience in the hospitality, food and beverage industry, it was inevitable that she integrates her passions to co-found Cocktail Curations with distiller Nicole Hassoun.', 
                    'Thy has received accolades for her work in the event industry including 2012 Top 30 Under 40 Rising Young Event Professionals by Special Events Magazine, as well as, Washington DC’s 2018 Top 12 Dynamic Women by national publication Modern Luxury.'
                ]}
                quote='My friends call me ‘fancy’ when I make them a cocktail at home. It’s truly not anything complicated, but I like to take the extra step.'
            />
        </section>
    )
}