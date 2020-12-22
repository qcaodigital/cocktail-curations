import styles from './contact_form.module.scss';
import { useState, useEffect } from 'react';

export default function Dropdowns({ formData, dataProp, handleChange, validateForm, handleLoad }){
    const date = new Date();
    const eventProps = {
        date: 'date',
        eventType: 'eventType',
        serviceType: 'serviceType'
    }

    const productProps = {
        product: 'product',
        topic: 'topic'
    }

    const otherProps = {
        topic: 'topic'
    }

    useEffect(() => handleLoad({ dataProp, eventProps, productProps, otherProps }), [])
    useEffect(() => validateForm(dataProp), [formData])

    return (
        <section id={styles.Dropdowns} className={styles.form}>
            {formData.type === 'events' ? (
                <form>
                    <div id={styles.date}>
                        <label htmlFor={eventProps.date}>Date of Event</label>
                        <p className={styles.note}>leave blank if not yet determined</p>
                        <input 
                            type={eventProps.date} 
                            id={eventProps.date} 
                            name={eventProps.date} 
                            onChange={evt => handleChange(evt, dataProp)}
                            min={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
                            max={`${date.getFullYear() + 2}-${date.getMonth() + 1}-${date.getDate()}`}
                        />
                    </div>
                    <div>
                        <label htmlFor={eventProps.eventType}>Type of Event</label>
                        <select 
                            id={eventProps.eventType} 
                            name={eventProps.eventType} 
                            defaultValue='' 
                            onChange={evt => handleChange(evt, dataProp)}
                        >
                            <option disabled value=''>Select One</option>
                            <option value='social'>Social Event</option>
                            <option value='corporate'>Corporate Event</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={eventProps.serviceType}>Type of Service</label>
                        <select 
                            id={eventProps.serviceType} 
                            name={eventProps.serviceType} 
                            defaultValue='' 
                            onChange={evt => handleChange(evt, dataProp)}
                        >
                            <option disabled value=''>Select One</option>
                            <option value='speciality bar'>Speciality Bar</option>
                            <option value='signature beverage'>Signature Beverage</option>
                            <option value='mixology class'>Mixology Class</option>
                            <option value='dinner pairing'>Dinner Pairing</option>
                        </select>
                    </div>
                </form>
            ) : formData.type === 'products' ? (
                <form>
                    <div>
                        <label htmlFor={productProps.product}>Product</label>
                        <select 
                            id={productProps.product} 
                            name={productProps.product} 
                            defaultValue='' 
                            onChange={evt => handleChange(evt, dataProp)}
                        >
                            <option disabled value=''>Select One</option>
                            <option value='cocktail bases & kits'>Cocktail Bases & Kits</option>
                            <option value='tool kits'>Tool Kits</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={productProps.topic}>Topic</label>
                        <select 
                            id={productProps.topic} 
                            name={productProps.topic} 
                            defaultValue='' 
                            onChange={evt => handleChange(evt, dataProp)}
                        >
                            <option disabled value=''>Select One</option>
                            <option value='question'>General Question</option>
                            <option value='pricing'>Pricing</option>
                            <option value='shipping'>Shipping</option>
                            <option value='bulk purchasing'>Bulk Purchasing</option>
                            <option value='shopify'>Our Shopify Store</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </form>
            ) : (
                <form>
                    <div>
                        <label htmlFor={otherProps.topic}>Topic</label>
                        <select 
                            className={styles.long} 
                            d={otherProps.topic} 
                            name={otherProps.topic} 
                            defaultValue='' 
                            onChange={evt => handleChange(evt, dataProp)}
                        >
                            <option disabled value=''>Select One</option>
                            <option value='jobs'>Jobs</option>
                            <option value='partnerships'>Partnerships</option>
                            <option value='press'>Press</option>
                            <option value='existing orders'>Existing Orders</option>
                            <option value='past services'>Past services</option>
                            <option value='nutrition'>Nutrition & Ingredients</option>
                            <option value='general'>General Question/Comment</option>
                        </select>
                    </div>
                </form>
            )}
            
        </section>
    )
}