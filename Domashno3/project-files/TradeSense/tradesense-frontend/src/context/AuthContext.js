import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Provide Auth Context to the App
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);

    // Login by saving jwt token inside local storage
    const login = (token, username) => {
        setAuthToken(token);
        setUsername(username);
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username);
    };

    // Logout by removing the jwt token
    const logout = () => {
        setAuthToken(null);
        setUsername(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
    };

    // Check if user is authenticated
    const isAuthenticated = () => !!authToken;

    return (
        <AuthContext.Provider value={{ authToken, username, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to Use Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};