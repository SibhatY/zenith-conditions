import React, {useState} from 'react';

function Login({onLoginSuccess}) {

    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {

        event.preventDefault();
        const correctCode = process.env.REACT_APP_ACCESS_CODE;

        if (accessCode === correctCode) {
            onLoginSuccess();
        }
        else {
            setError('Incorrect code, try again.');
        }
    };

    return (

        <div className='loginContainer'>
            <form onSubmit={handleLogin}>
                <label htmlFor='accessCode'>Enter Access Code: </label>
                <input
                type='text'
                id='accessCode'
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                required />
                <button type='submit'>Login</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
}
export default Login;