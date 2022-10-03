/* eslint-disable no-console */
import React from 'react';
import PropsTypes from 'prop-types';

// import account from './account';

const ContactForm = (props) => {
    // console.log(account);
    const { fieldsList } = props;

    const init = {};
    fieldsList.forEach(({ name, defaultValue }) => {
        init[name] = defaultValue;
    });

    const validate = (fields, values) => {
        const errors = [];

        fields.forEach(({ name, validation }) => {
            const value = values[name];

            if (validation.isReq && value === '') {
                errors.push(`Pole ${name} jest wymagane!`);
            }

            if (validation.regex && !validation.regex.test(value)) {
                errors.push(`Pole ${name} ma niepoprawny format!`);
            }
        });
        return errors;
    };

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = React.useReducer(reducer, init);
    const [errors, setErrors] = React.useState([]);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(fieldsList, state));
    };

    const renderErrors = () => {
        return errors.length > 0 ? (
            <ul>
                {errors.map((error) => {
                    return <li>{error}</li>;
                })}
            </ul>
        ) : null;
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {renderFieldList()}
                <input type="submit" value="Wyślij" />
                {renderErrors()}
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
