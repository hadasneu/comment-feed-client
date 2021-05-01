import React, { useState } from 'react';
import './Form.css';

const Form = ({ addComment }) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
        setMessage('');
        addComment(email, message);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="field"
                type="text"
                value={email}
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
            />
            <textarea
                className="field textarea"
                value={message}
                placeholder="Message"
                onChange={event => setMessage(event.target.value)}
            />
            <input className="btn" type="submit" value="SUBMIT"/>
        </form>
    );
};

export default Form;
