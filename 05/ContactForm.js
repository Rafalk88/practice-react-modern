/* eslint-disable no-console */
import React, { useReducer } from 'react';
import PropsTypes from 'prop-types';

import account from './account';

const ContactForm = (props) => {
    console.log(account);
    const { fieldsList } = props;

    const init = {};
    fieldsList.forEach(({ name, defaultValue }) => {
        init[name] = defaultValue;
    });

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);

    const renderFieldList = () => {
        return fieldsList.map(({ name, type, cols, rows, placeholder }) => {
            if (type === 'textarea') {
                return (
                    <>
                        <textarea
                            key={name}
                            name={name}
                            value={state[name]}
                            cols={cols}
                            rows={rows}
                            placeholder={placeholder}
                            onChange={(e) => {
                                return dispatch(e.target);
                            }}
                        />
                        <br />
                    </>
                );
            }
            return (
                <>
                    <input
                        key={name}
                        value={state[name]}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={(e) => {
                            return dispatch(e.target);
                        }}
                    />
                    <br />
                </>
            );
        });
    };

    return (
        <div className="container">
            <form>
                {renderFieldList()}
                <input type="submit" value="Wyślij" />
            </form>
        </div>
    );
};

ContactForm.propTypes = {
    fieldsList: PropsTypes.arrayOf(
        PropsTypes.shape({
            name: PropsTypes.string.isRequired,
            type: PropsTypes.string.isRequired,
            defaultValue: PropsTypes.string.isRequired,
            cols: PropsTypes.number,
            rows: PropsTypes.number,
            placeholder: PropsTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ContactForm;
