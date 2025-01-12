import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import bgImage from "../../assets/bg-images/technology-bgimage-1.png";
import logo from "../../assets/logo/logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link, useNavigate} from "react-router";
import axios from "axios";

function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/auth/register', form);
            alert('Registration successful');
            navigate('/login');
        } catch (error) {
            alert('Registration failed');
        }
    };

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
                sx={{ width: '440px', margin: '0 auto', py: '64px', backgroundColor: "#F4F4F4", borderRadius: '16px', boxShadow: 3, position: 'relative' }}
            >
                <Box sx={{ width: '72px', position: 'absolute', top: 16, right: 12}}>
                    <Link to="/" style={{ color: '#2A6DBB', textDecoration: 'none', fontWeight: '600', textTransform: 'uppercase' }}>Home</Link>
                </Box>

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
                            Sign up to continue to TradeSense.
                        </Typography>
                    </Box>
                    {/* Form Fields */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='8px'
                    >
                        <TextField name="username" label="Username" onChange={handleChange} variant="outlined" sx={{ width: '100%' }} />
                        <TextField name="email" label="Email" onChange={handleChange} variant="outlined" sx={{ width: '100%' }} />
                        <TextField name="password" label="Password" onChange={handleChange} type="password" variant="outlined" sx={{ width: '100%' }} />
                    </Box>

                    {/* Submit BTN */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='16px'
                    >
                        <Button variant="contained" onClick={handleSubmit} sx={{ width: '100%'}}>
                            Continue
                        </Button>
                        <Typography variant="subtitle1">
                            Already have an account?
                            <Link to="/login">
                                <span style={{ color: '#2A6DBB', textDecoration: 'underline', position: 'relative', paddingLeft: 4 }}>
                                    Sign In
                                    <ArrowForwardIcon sx={{ color: '#2A6DBB', position: 'absolute', pl: 1/2 }} />
                                </span>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Register;