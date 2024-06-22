import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, token: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('/auth/me')
                .then((res) => {
                    setAuth({ user: res.data, token });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, []);

    const login = async (username, password) => {
        const response = await axios.post('/users/login', { username, password });
        setAuth({ user: response.data.user, token: response.data.token });
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    };

    const register = async (username, password) => {
        await axios.post('/users/register', { username, password });
        login(username, password);
    };

    const logout = () => {
        setAuth({ user: null, token: null });
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ auth, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;