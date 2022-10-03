import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';

const App = () => {
    const fieldsList = [
        {
            name: 'firstName',
            type: 'text',
            defaultValue: '',
            placeholder: 'Podaj imię...',
            validation: { isReq: true },
        },
        {
            name: 'lastName',
            type: 'text',
            defaultValue: '',
            placeholder: 'Podaj nazwisko...',
            validation: { isReq: true },
        },
        {
            name: 'email',
            type: 'email',
            defaultValue: '',
            placeholder: 'Podaj adres e-mail...',
            validation: { isReq: true, regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ },
        },
        {
            name: 'phoneNumber',
            type: 'text',
            defaultValue: '',
            placeholder: 'Podaj numer telefonu...',
            validation: { isReq: true, regex: /^[0-9]+$/ },
        },
        {
            name: 'topic',
            type: 'text',
            defaultValue: '',
            placeholder: 'Podaj tytuł...',
            validation: { isReq: true },
        },
        {
            name: 'message',
            type: 'textarea',
            defaultValue: '',
            cols: 30,
            rows: 10,
            placeholder: 'Podaj wiadomość...',
            validation: { isReq: true },
        },
    ];
    return <ContactForm fieldsList={fieldsList} />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
