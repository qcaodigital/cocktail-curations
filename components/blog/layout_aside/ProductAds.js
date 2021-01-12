import styles from './ProductAds.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ProductAds.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    parentStyles: PropTypes.object.isRequired,
    numProducts: PropTypes.number.isRequired
}

export default function ProductAds({ products: productsArr, parentStyles, numProducts }){
    const [products, setProducts] = useState(productsArr)

    useEffect(() => {
        function randomizeArr(arr){
            const tempArr = [...arr];
            for(let i = 0; i < tempArr.length; i++){
                const tempVal = tempArr[i];
                const randomIndex = Math.floor(Math.random() * tempArr.length);
                tempArr[i] = tempArr[randomIndex];
                tempArr[randomIndex] = tempVal;
            }
            return tempArr;
        }

        setProducts(curr => randomizeArr(curr));
    }, [])

    return (
        <section className={styles.ProductAd}>
            <p className={parentStyles.banner}>Items From Our Shop</p>
            <div className={styles.productList}>
                {products.map((p, idx) => idx < numProducts && (
                    <div key={p.product_name[0].text} className={styles.product}>
                        <a target='_blank' href={p.shopify_link[0].text} className={styles.imgContainer}>
                            <img src={p.product_image.url} alt={p.product_image.alt}/>
                        </a>
                        <div className={styles.info}>
                            <a target='_blank' href={p.shopify_link[0].text}><h6 className={styles.name}>{p.product_name[0].text}</h6></a>
                            <h6 className={styles.price}>{p.product_price[0].text}</h6>
                            <a target='_blank' href={p.shopify_link[0].text}><p>see in shop</p></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}