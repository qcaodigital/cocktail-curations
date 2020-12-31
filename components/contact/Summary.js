import styles from './Summary.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useEffect } from 'react';

export default function Summary({ formData }){
    const formSections = Object.keys(formData).map(key => formData[key]);
    const [subject, ...sections] = formSections;
    const router = useRouter();

    useEffect(() => {
        async function sendEmail(){
            try {
                const resp = await axios.post('/api/sendContactEmail', formData, { 'content-type': 'application/json'});
                console.log(resp.data)
            } catch(err) {
                console.log(err)
            }
        }
        sendEmail()
    }, [])

    return (
        <section id={styles.Summary}>
            <header>
                {subject === 'other' 
                    ? <p>Your message:</p>
                    : <p>Your message about our {subject}:</p>
                }
            </header>
            <div className={styles.contentContainer}>
                {sections.map((section, idx) => (
                    <React.Fragment key={idx}>
                        {Object.keys(section).map(input => {
                            let label;
                            switch(input){
                                case 'date': label = 'Event Date'; break;
                                case 'eventType': label = 'Event Type'; break;
                                case 'serviceType': label = 'Service Type'; break;
                                case 'guestcount': label = 'Guest Count'; break;
                                case 'location': label = 'Event Location'; break;
                                case 'textArea': label = 'Message'; break;
                                case 'firstName': label = 'First Name'; break;
                                case 'lastName': label = 'Last Name'; break;
                                case 'email': label = 'Email Address'; break;
                                case 'phone': label = 'Phone Number'; break;
                                case 'company': label = 'Company'; break;
                                case 'hearAbout': label = 'How you heard about us'; break;
                                case 'product': label = 'Product'; break;
                                case 'topic': label = 'Topic'; break;
                            }

                            return section[input] 
                                ? <p key={label} id={styles[input]} className={idx === 0 ? styles.basic : idx === 1 ? styles.details : styles.personal}>
                                    <span className={styles.label}>{`${label ? label : input}:`}</span> 
                                    <span className={styles.value}>{`${section[input]}`}</span>
                                </p> 
                                : null;
                        })}
                    </React.Fragment>
                ))}
            </div>
            <button className='STYLED_BTN' onClick={() => router.back()}>Back</button>
        </section>
    )
}