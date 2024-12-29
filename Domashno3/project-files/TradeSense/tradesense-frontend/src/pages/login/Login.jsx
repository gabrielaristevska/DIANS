import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import logo from '../../assets/logo/logo.png'
import bgImage from '../../assets/bg-images/technology-bgimage-1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";
import {useAuth} from "../../context/AuthContext";


function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = useAuth();

    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:9090/auth/login", form);
            login(res.data.jwtToken, res.data.username);
        } catch (error) {
            alert("Login failed!");
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: '440px', margin: '0 auto', py: '64px', backgroundColor: "#F4F4F4", borderRadius: '16px', boxShadow: 3 }}
            >
                {/* LOGO BOX */}
                <Box sx={{ width: '288px', mb: '16px' }}>
                    <img src={logo} alt="logo" style={{ margin: '0 auto' }}/>
                </Box>

                {/* CONTENT BOX */}
                <Box
                    display="flex"
                    flexDirection="column"
                    gap='24px'
                    sx={{ width: '288px' }}
                >
                    {/* Title & Subtitle */}
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: '24px',
                                fontWeight: '600',
                            }}
                        >
                            Welcome
                        </Typography>
                        <Typography variant="subtitle1">
                            Log in to continue to TradeSense.
                        </Typography>
                    </Box>
                    {/* Form Fields */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='8px'
                    >
                        <TextField
                            name="username"
                            onChange={e => handleChange(e)}
                            // value={form.username}
                            label="Username"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            name="password"
                            onChange={e => handleChange(e)}
                            type="password"
                            // value={form.password}
                            label="Password"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />
                        <Typography variant="subtitle2" sx={{mt: '4px', fontWeight: '600', color: '#2A6DBB'}}>
                            Forgot Password?
                        </Typography>
                    </Box>

                    {/* Submit BTN */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='16px'
                    >
                        <Button onClick={handleSubmit} variant="contained" sx={{ width: '100%'}}>
                            Continue
                        </Button>
                        <Typography variant="subtitle1">
                            Don't have an account?
                            <span style={{ color: '#2A6DBB', textDecoration: 'underline', position: 'relative', paddingLeft: 4 }}>
                            Sign Up
                            <ArrowForwardIcon sx={{ color: '#2A6DBB', position: 'absolute', pl: 1/2 }} />
                        </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;