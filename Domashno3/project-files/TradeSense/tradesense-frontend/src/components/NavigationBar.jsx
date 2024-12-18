import React from 'react';
import logo from '../assets/logo/nav-logo.png'
import {Box} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {NavLink} from "react-router";

function NavigationBar() {
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
                        style={{
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            color: '#2A6DBB',
                            border: '2px solid #2A6DBB',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 12px'
                        }}
                        to='/predict'
                    >
                        Predict
                    </NavLink>
                </Box>

                {/* Account Icon Box */}
                <Box>
                    <AccountCircleIcon sx={{ fontSize: '48px', color: '#F4F4F4' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default NavigationBar;