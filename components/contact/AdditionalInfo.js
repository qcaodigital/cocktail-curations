import styles from './contact_form.module.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

AdditionalInfo.propTypes = {
    dataProp: PropTypes.string.isRequired
}

export default function AdditionalInfo({ formData, dataProp, handleChange, validateForm, handleLoad }){
    const commonProps = {
        textArea: 'textArea'
    }

    const eventProps = {
        guestcount: 'guestcount',
        location: 'location',
        ...commonProps
    }

    const productProps = {
        ...commonProps
    }

    const otherProps = {
        ...commonProps
    }

    useEffect(() => handleLoad({ dataProp, eventProps, productProps, otherProps }), [])
    useEffect(() => validateForm(dataProp), [formData])

    return (
        <section id={styles.AdditionalInfo} className={styles.form}>
            <form>
                {formData.type === 'events' && <>
                    <div>
                        <label htmlFor={eventProps.guestcount}>Number of Guests</label>
                        <input 
                            type="number" 
                            id={eventProps.guestcount} 
                            name={eventProps.guestcount}
                            min='0'
                            max='10000'
                            value={formData[dataProp][eventProps.guestcount]}
                            onChange={evt => handleChange(evt, dataProp)}
                        />
                    </div>
                    <div>
                        <label htmlFor={eventProps.location}>Location of Event</label>
                        <input 
                            type="text" 
                            id={eventProps.location} 
                            name={eventProps.location}
                            value={formData[dataProp][eventProps.location]}
                            onChange={evt => handleChange(evt, dataProp)}
                            placeholder='ie: Washington, D.C'
                        />
                    </div>
                </>}
                <div className={styles.textArea}>
                    <label htmlFor={commonProps.textArea}>Additional Notes/Comments</label>
                    <textarea
                        placeholder='Please leave a brief message in regards to your inquiry. This field is required.' 
                        type="text" 
                        id={commonProps.textArea} 
                        name={commonProps.textArea}
                        value={formData[dataProp][commonProps.textArea]}
                        onChange={evt => handleChange(evt, dataProp)}
                    />
                </div>
            </form>
        </section>
    )
}