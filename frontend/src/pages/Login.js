import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import '../styles/Login.css'; // Tu peux mettre ton CSS ici

function Login({ setIsAuthenticated }) {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `http://localhost:5000/api/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { message, token, error } = result;
    
            if (token) {
                localStorage.setItem('token', token);
                setIsAuthenticated(true);
                navigate('/home');
            } else {
                const details = error?.details[0].message || message;
                handleError(details);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={loginInfo.email}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={loginInfo.password}
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <p className="signup-link">
                        Don't have an account? <Link to="/signup">Sigup</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;