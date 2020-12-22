import React, { useState, useEffect } from 'react';
import styles from './contact.module.scss';
import  Head  from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import TypeSelection from './../components/contact/TypeSelection';
import Dropdowns from './../components/contact/Dropdowns';
import AdditionalInfo from './../components/contact/AdditionalInfo';
import Personal from './../components/contact/Personal';
import Summary from './../components/contact/Summary';
import FadeOnUnmount from './../components/HOC/FadeOnUnmount';
import axios from 'axios';


export default function Contact({ NAV_SPACER, state: { viewport } }){
    const progressMarkers = ['Start', 'Basic Info', 'Details', 'About You', 'Complete'];
    const [currentProgress, setCurrentProgress] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        basicInfo: {},
        additionalInfo: {},
        personalInfo: {}
    });
    const initialForm = {
        component: <TypeSelection/>,
        key: 'TypeSelection',
        header: 'How can we help?'
    };
    const [currentForm, setCurrentForm] = useState(initialForm);
    
    //Clear current form if back button is clicked. Will clear moving forward, but already empty so doesn't matter
    useEffect(() => {
        if(currentProgress === 1){
            setFormData({ ...formData, basicInfo: {} })
        } else if(currentProgress === 2){
            setFormData({ ...formData, additionalInfo: {} })
        } else if(currentProgress === 3){
            setFormData({ ...formData, personalInfo: {}})
        }

        setIsValidated(false)
    }, [currentProgress])

    //Handler for changing form page
    useEffect(() => {
        switch(currentProgress){
            case 1: setCurrentForm(initialForm); break;
            case 2: setCurrentForm({
                component: <Dropdowns dataProp='basicInfo'/>,
                key: 'Dropdowns',
                header: formData.type === 'events' 
                    ? 'Tell us about your event.'
                    : formData.type === 'products'
                        ? 'What would you like to know about our products?'
                        : 'How can we help?'
            }); break;
            case 3: setCurrentForm({
                component: <AdditionalInfo dataProp='additionalInfo'/>,
                key: 'TextInputs',
                header: formData.type === 'events' 
                    ? 'Tell us more about your event'
                    : formData.type === 'products'
                        ? 'What would you like to know about our products?'
                        : 'How can we help?'
            }); break;
            case 4: setCurrentForm({
                component: <Personal dataProp='personalInfo'/>,
                key: 'Personal',
                header: 'Tell us a little bit about yourself.'
            }); break;
            case 5: setCurrentForm({
                component: <Summary/>,
                key: 'Summary',
                header: 'Thanks for reaching out to us.'
            }); break;
            case 6: setCurrentProgress(1); break;
        }
    }, [currentProgress, formData])

    //Determine whether or not user should be able to access the next form
    const [isValidated, setIsValidated] = useState(false);

    //Input handler for forms
    function handleChange(evt, dataProp){
        setFormData({
            ...formData,
            [dataProp]: {
                ...formData[dataProp],
                [evt.target.name]: evt.target.value
            }
        })
    }

    //Reset form to all blank strings on form load
    function handleLoad({ dataProp, eventProps, productProps, otherProps, onlyCommonProps }){
        if(onlyCommonProps){
            setFormData({
                ...formData,
                [dataProp]: Object.keys(onlyCommonProps).reduce((acc, key) => ({ ...acc, [key]: ''}), {})
            })
        } else {
            setFormData({
                ...formData,
                [dataProp]: formData.type === 'events'
                    ? Object.keys(eventProps).reduce((acc, key) => ({ ...acc, [key]: key === 'guestcount' ? 0 : '' }), {})
                    : formData.type === 'products'
                        ? Object.keys(productProps).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
                        : Object.keys(otherProps).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
            })
        }
    }

    //Form validator - is called when an input is changed
    function validateForm(dataProp){
        const dataArr = Object.keys(formData[dataProp]);
        //Custom validation for personalInfo
        if(dataProp === 'personalInfo'){
            //Remove key from validation before validating
            if(dataArr.filter(key => key !== 'company').some(key => formData[dataProp][key] === '')){
                setIsValidated(false)
            } else {
                setIsValidated(true)
            }
        //Normal validation - just checks if inputs are all filled
        } else if(dataArr.some(key => formData[dataProp][key] === '')){
            setIsValidated(false);
        } else {
            setIsValidated(true)
        }
    }

    //ESC + ENTER functionality on back/next
    useEffect(() => {
        function handleKeyPress(evt){
            if(evt.keyCode === '13' || evt.key === "Enter"){
                isValidated ? setCurrentProgress(curr => curr + 1) : null;
            } else if(evt.keyCode === '27' || evt.key === 'Escape'){
                //Current progress in form is not the very first form (buttons) or last form (summary page)
                currentProgress !== 1 && currentProgress < 5 ? setCurrentProgress(curr => curr - 1) : null;
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [isValidated, currentProgress])

    return <>
        <Head>
            <title>Contact Us | Cocktail Curations</title>
        </Head>
        <motion.section exit={{ opacity: 0 }} id={styles.Contact}>
            <section className={styles.landing}>
                {NAV_SPACER}
                <header className={styles.landingHeader}>
                    <h1>Reach out and one of us will <span style={{ display: 'block' }}>get back to you <span className={styles.emph}>personally.</span></span></h1>
                </header>
                <div id={currentForm.key} className={styles.formContainer}>
                    <AnimatePresence exitBeforeEnter>
                        <motion.h2 
                            key={currentForm.header}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .35 }}
                        >{currentForm.header}
                        </motion.h2>
                    </AnimatePresence>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div 
                            key={currentForm && currentForm.key} 
                            exit={{ y: '-50px', opacity: 0 }}
                            initial={{ y: '50px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: .75 }}
                            style={{ width: '100%' }}
                        >
                            {currentForm && React.cloneElement(currentForm.component, {
                                viewport,
                                formData,
                                setFormData,
                                setCurrentProgress,
                                handleChange,
                                validateForm,
                                handleLoad
                            })}
                        </motion.div>
                    </AnimatePresence>
                    <div className={styles.progressBar}>
                        {progressMarkers.map((step, idx) => (
                            <div key={step} id={styles[step]} 
                                className={`
                                    ${styles.mark}
                                    ${currentProgress === idx + 1 ? styles.current : ''}
                                    ${currentProgress > idx + 1 ? styles.complete : ''}
                                `}
                            >
                                <p className={styles.label} onClick={() => {
                                        if(currentProgress > idx){ //ADD && currentProgress !== 5 in production 
                                            setCurrentProgress(idx + 1)}
                                        }
                                    }
                                >{step}
                                </p>
                            </div>
                        ))}
                    </div>
                    {currentProgress > 1 && currentProgress !== 5 &&
                        <FadeOnUnmount>
                            <motion.div className={styles.backButton}>
                                <button onClick={() => setCurrentProgress(curr => curr - 1)}>
                                    <FontAwesomeIcon size='xs' icon={['fas', 'chevron-left']}/>
                                    <span>Back</span>
                                </button>
                            </motion.div>
                        </FadeOnUnmount>
                    }
                    {currentProgress !== 1 && currentProgress !== 5 &&
                        <FadeOnUnmount>
                            <motion.div className={`${styles.nextButton} ${isValidated ? styles.enabled : styles.disabled}`}>
                                <motion.button onClick={() => isValidated ? setCurrentProgress(curr => curr + 1) : null}>
                                    <span>Next</span>
                                    <FontAwesomeIcon size='xs' icon={['fas', 'chevron-right']}/>
                                </motion.button>
                            </motion.div>
                        </FadeOnUnmount>
                    }
                </div>
            </section>
        </motion.section>  
    </>
}