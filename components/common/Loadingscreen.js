import React from 'react';
import styles from './Loadingscreen.module.scss';
import PropTypes from 'prop-types';

Loadingscreen.propTypes = {
    turnOffLoading: PropTypes.func.isRequired
}


export default function Loadingscreen({ turnOffLoading }){
    setTimeout(() => {
        turnOffLoading();
    }, 2000);
    return (
        <div className={styles.Loadingscreen}>
            <img className={styles.Loadingscreen__icon} src='/imgs/stock/logos/cc-icon-logo-color.png' alt='Cocktail Curations Logo Favicon Icon'/>
        </div>
    )
}