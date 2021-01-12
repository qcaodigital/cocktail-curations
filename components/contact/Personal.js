import styles from './contact_form.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Personal.propTypes = {
    dataProp: PropTypes.string.isRequired
}

export default function Personal({ formData, dataProp, handleChange, validateForm, handleLoad }){
    const commonProps = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: 'phone',
        company: 'company',
        hearAbout: 'hearAbout'
    }

    useEffect(() => validateForm(dataProp), [formData])
    useEffect(() => handleLoad({ dataProp, onlyCommonProps: commonProps}), [])

    return(
        <section id={styles.Personal} className={styles.form}>
            <form>
                <div id={styles.firstname}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type='text' 
                        placeholder='ie: Jane'
                        name={commonProps.firstName} 
                        id={commonProps.firstName}
                        value={formData[dataProp][commonProps.firstName]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.lastname}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type='text'
                        placeholder='ie: Doe' 
                        name={commonProps.lastName} 
                        id={commonProps.lastName}
                        value={formData[dataProp][commonProps.lastName]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.email}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type='text'
                        placeholder='ie: jdoe@gmail.com' 
                        name={commonProps.email} 
                        id={commonProps.email}
                        value={formData[dataProp][commonProps.email]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.phone}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type='text'
                        placeholder='ie: 123-456-7890' 
                        name={commonProps.phone} 
                        id={commonProps.phone}
                        value={formData[dataProp][commonProps.phone]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.company}>
                    <label htmlFor="company">Company Name</label>
                    <input
                        type='text'
                        placeholder='ie: Your company name here (if applicable)' 
                        name={commonProps.company} 
                        id={commonProps.company}
                        value={formData[dataProp][commonProps.company]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
                <div id={styles.hearAbout}>
                    <label htmlFor={commonProps.hearAbout} className={styles.noColon}>How did you hear about us?</label>
                    <select 
                        name={commonProps.hearAbout} 
                        id={commonProps.hearAbout} 
                        value={formData[dataProp][commonProps.hearAbout]}
                        onChange={evt => handleChange(evt, dataProp)}
                    >
                        <option disabled value="">Select One</option>
                        <option value="internet">Internet</option>
                        <option value="online">News Broadcast</option>
                        <option value="reference">Reference</option>
                        <option value="friend/family">Friend/Family</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </form>
        </section>
    )
}