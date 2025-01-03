import React from 'react';
import logo from '../assets/logo/nav-logo.png'
import {Box, Button, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {NavLink, useNavigate} from "react-router";
import {useAuth} from "../context/AuthContext";

function NavigationBar() {
    const { logout, isAuthenticated, username } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        // Main container
        <Box
            display='flex'
            justifyContent="center"
            alignItems='center'
            sx={{ width: '100%', height: '108px', backgroundColor: "#272727"}}
        >
            {/* Content Container */}
            <Box
                display='flex'
                justifyContent="space-between"
                alignItems='center'
                sx={{
                    width: '980px',
                    margin: '0 auto'
                }}
            >
                {/* Logo Box */}
                <Box>
                    <img src={logo} alt="Logo"/>
                </Box>

                {/* Nav Items Box */}
                <Box
                    display="flex"
                    gap='8px'
                >
                    <NavLink
                        to='/'
                        style={{
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            color: '#F4F4F4',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 12px'
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        style={{
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            color: '#F4F4F4',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 12px'
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/predict"
                        style={{ textDecoration: 'none' }}
                    >
                        {({ isActive }) => (
                            <Box
                                sx={{
                                    textTransform: 'uppercase',
                                    color: isActive ? '#F4F4F4' : '#2A6DBB',
                                    border: '2px solid #2A6DBB',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    padding: '8px 12px',
                                    backgroundColor: isActive ? '#2A6DBB' : 'transparent',
                                    transition: 'background-color 150ms ease-in, color 150ms ease-in',
                                    '&:hover': {
                                        backgroundColor: '#2A6DBB',
                                        color: '#F4F4F4',
                                    },
                                }}
                            >
                                Predict
                            </Box>
                        )}
                    </NavLink>
                </Box>

                {/* Account Icon Box */}
                <Box display="flex" alignItems="center" gap="12px">
                    {isAuthenticated() ? (
                        <>
                            <Button
                                onClick={handleLogout}
                                variant="contained"
                                sx={{
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                    backgroundColor: '#2A6DBB',
                                    '&:hover': { backgroundColor: '#1E5A9A' }
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            style={{
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                color: '#F4F4F4',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}
                        >
                            Sign In
                        </NavLink>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default NavigationBar;