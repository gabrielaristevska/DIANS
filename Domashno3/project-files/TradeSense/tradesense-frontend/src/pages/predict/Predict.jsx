import React, {useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import bgImage from "../../assets/bg-images/technology-bgimage-2.png";
import NavigationBar from "../../components/NavigationBar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router";

function Predict() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClick = (event) => {
        navigate(`stock-item/${selectedValue}`);
    }

    return (
        // Main Container
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                pb: '80px',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <NavigationBar />

            {/* Landing Content */}
            <Box sx={{ width: '980px', margin: '80px auto 0' }}>
                <Typography variant="h1" sx={{fontSize: '72px', color: '#272727', mb: '16px' }}>Macedonian Stock Exchange Predictor</Typography>
            </Box>

            {/* Main Content */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: '980px',
                    margin: '80px auto 0'
                }}
            >
                {/* Stock Item Selector */}
                <Box
                    sx={{
                        width: '320px',
                        backgroundColor: '#272727',
                        p: '32px 20px',
                        borderRadius: '12px'
                    }}
                >
                    <Typography variant="h3" sx={{ fontSize: '24px', color: "#F4F4F4", textAlign: 'left', mb: '16px' }}>Select a stock item</Typography>
                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{ color: '#2A6DBB' }} // Label color
                        >
                            Selected
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedValue} // Tied to the state
                            onChange={handleChange} // Update state on selection
                            label="Selected"
                            sx={{
                                color: '#2A6DBB', // Text color
                                '& .MuiOutlinedInput-notchedOutline': { // Border color
                                    borderColor: '#2A6DBB',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': { // Hover state
                                    borderColor: '#2A6DBB',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // Focused state
                                    borderColor: '#2A6DBB',
                                },
                            }}
                        >
                            <MenuItem value="KMB">KMB</MenuItem>
                            <MenuItem value="STB">STB</MenuItem>
                            <MenuItem value="SKB">SKB</MenuItem>
                            <MenuItem value="NLB">NLB</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Selected Item Confirmation */}
                <Box
                    sx={{
                        width: '480px',
                        backgroundColor: '#272727',
                        p: '32px',
                        borderRadius: '12px'
                    }}
                >
                    <Typography variant="h2" sx={{ fontSize: '24px', color: "#F4F4F4", textAlign: 'left', mb: '24px' }}>You selected the stock item: <span style={{ color: "#2A6DBB" }}>{selectedValue}</span></Typography>
                    <Typography variant="subtitle2" sx={{ fontSize: '16px', textAlign: 'left', color: '#F4F4F4', mb: '24px' }}>You will get statistical info for the selected stock. The model will use patterns in historical data to predict when is the best time to buy and sell this specific item.</Typography>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{
                            width: '100%',
                            borderRadius: '32px',
                            py: '16px',
                        }}
                    >
                        Start Prediction
                        <ArrowForwardIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Predict;