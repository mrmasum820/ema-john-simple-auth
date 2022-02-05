import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create account</h2>
                <form>
                    <input type="text" placeholder='your email' />
                    <br />
                    <input type="password" placeholder='your password' />
                    <br />
                    <input type="password" placeholder='Re-enter password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account <Link to="/login">Log In</Link></p>
                <div>-------- or -------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;