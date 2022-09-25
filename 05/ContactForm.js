/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useReducer } from 'react';

import account from './account';

const ContactForm = () => {
    console.log(account);
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
    };

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, email, phoneNumber, topic, message } = state;
    return (
        <form>
            <input
                name="firstName"
                value={firstName}
                type="text"
                placeholder="Podaj imię..."
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
            <br />
            <input
                name="lastName"
                value={lastName}
                type="text"
                placeholder="Podaj nazwisko..."
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
            <br />
            <input
                name="email"
                value={email}
                type="email"
                placeholder="Podaj adres e-mail..."
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
            <br />
            <input
                name="phoneNumber"
                value={phoneNumber}
                type="text"
                placeholder="Podaj numer telefonu"
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
            <br />
            <input
                name="topic"
                value={topic}
                type="text"
                placeholder="Podaj temat..."
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
            <br />
            <textarea
                name="message"
                value={message}
                cols="30"
                rows="10"
                onChange={(e) => {
                    return dispatch(e.target);
                }}
            />
        </form>
    );
};

export default ContactForm;
