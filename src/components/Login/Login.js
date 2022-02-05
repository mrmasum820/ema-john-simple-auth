import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state.from || '/shop';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Log In</h2>
                <form>
                    <input type="text" placeholder='your email' />
                    <br />
                    <input type="password" placeholder='your password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema john <Link to="/register">create account</Link></p>
                <div>-------- or -------</div>
                <button onClick={handleGoogleSignIn} className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;