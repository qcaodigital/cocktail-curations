import React from 'react';
import styles from './Loadingscreen.module.scss';
import PropTypes from 'prop-types';

Loadingscreen.propTypes = {
    turnOffLoading: PropTypes.func.isRequired
}


export default function Loadingscreen({ turnOffLoading }){
    setTimeout(() => {
        // turnOffLoading();
    }, 2000);
    return (
        <div className={styles.Loadingscreen}>
            <div className={styles.textContainer}>
                <h2>Welcome To</h2>
                <h2>Cocktail Curations</h2>
            </div>
        </div>
    )
}