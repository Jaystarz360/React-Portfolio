import '../css/contact.css';

import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
    const [ email, setEmail ]  = useState('');
    const [ username, setUsername ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const hadleImputChange = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'email') {
            setEmail(inputValue)
        } else if (inputName === 'username') {
            setUsername(inputValue)
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!username || !message) {
            setErrorMessage('Please complete all fields')
            return
        }

        setEmail('')
        setUsername('')
        setMessage('')
        console.log(`${username} from ${email} says ${message}`)
    };

    return (
        <div>
            <div className="container text-center">
                <h1>Message Me</h1>
                <form className='form' onSubmit={handleFormSubmit}>
                    
                    <input 
                        value={email}
                        name='email'
                        onChange={hadleImputChange}
                        type="email"
                        placeholder="email"
                        className="form-control"
                    />
                    
                    <input 
                        value={username}
                        name='username'
                        onChange={hadleImputChange}
                        type="text"
                        placeholder="username"
                        className="form-control"
                    />
                    <textarea
                        value={message}
                        name='message'
                        onChange={hadleImputChange}
                        type="text"
                        placeholder="message"
                        className="form-control"
                    ></textarea>
                    <button className="btn fw-semibold fs-5" type="submit">
                    Submit
                    </button> 
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;