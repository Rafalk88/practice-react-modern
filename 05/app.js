import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';

const App = () => {
    const fieldsList = [
        { name: 'firstName', type: 'text', defaultValue: '', placeholder: 'Podaj imię...' },
        { name: 'lastNameName', type: 'text', defaultValue: '', placeholder: 'Podaj nazwisko...' },
        { name: 'email', type: 'email', defaultValue: '', placeholder: 'Podaj adres e-mail...' },
        {
            name: 'phoneNumber',
            type: 'text',
            defaultValue: '',
            placeholder: 'Podaj numer telefonu...',
        },
        { name: 'topic', type: 'text', defaultValue: '', placeholder: 'Podaj tytuł...' },
        {
            name: 'message',
            type: 'textarea',
            defaultValue: '',
            cols: 30,
            rows: 10,
            placeholder: 'Podaj wiadomość...',
        },
    ];
    return <ContactForm fieldsList={fieldsList} />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
