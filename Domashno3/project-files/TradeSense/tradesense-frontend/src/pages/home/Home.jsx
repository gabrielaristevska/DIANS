import React from 'react';
import NavigationBar from "../../components/NavigationBar";
import {Box, Button, Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PsychologyIcon from '@mui/icons-material/Psychology';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {Link} from "react-router";
import previewImage from '../../assets/home-previewbox-images/MSEP Box.png'
import bgImage from '../../assets/bg-images/technology-bgimage-2.png'

function Home() {
    return (
        // Main Container
        <Box
            sx={{
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                pb: '80px'
            }}
        >
            {/* Navigation */}
            <NavigationBar />

            {/* Landing Content */}
            <Box sx={{ width: '980px', margin: '80px auto 0' }}>
                <Typography variant="h1" sx={{fontSize: '72px', color: '#272727', mb: '16px' }}>Predict the best time to invest with <span style={{ color: '#2A6DBB' }}>TradeSense</span></Typography>
                <Typography variant="subtitle1" sx={{fontSize: '22px', color: '#929292', mb: '24px' }}>Use our AI model to predict the best time to buy/sell any stock item <br/> in the Macedonian stock exchange market</Typography>
                <Button
                    variant="contained"
                    sx={{
                        width: '580px',
                        borderRadius: '32px',
                        py: '16px',
                        fontSize: '20px',
                    }}
                >
                    Predict Now
                    <ArrowForwardIcon sx={{ ml: '12px' }}/>
                </Button>
            </Box>

            {/* Main Content*/}
            <Box
                sx={{
                    width: '1180px',
                    margin: '80px auto 0'
                }}
            >
                {/* Preview Cards */}
                <Box
                    display="flex"
                    gap="20px"
                    sx={{
                        width: '780px',
                        margin: '0 auto'
                    }}
                >
                    {/* Selected Card */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='12px'
                        sx={{
                            width: '180px',
                            height: '238px',
                            backgroundColor: '#272727',
                            border: '1px solid #33DCFD',
                            borderRadius: '8px',
                            p: '16px',
                            boxShadow: 2,
                        }}
                    >
                        {/* Icon */}
                        <Box>
                            <PsychologyIcon sx={{ color: '#33DCFD', fontSize: '42px' }}/>
                        </Box>

                        {/* Text */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '24px', color: '#F4F4F4', textAlign: 'left', mb: '8px' }}>Predict Stock</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: '12px', color: "#929292", textAlign: 'left' }}>Easiest way to predict any stock on the Macedonian market</Typography>
                        </Box>

                        {/* Button*/}
                        <Box
                            sx={{
                                position: 'relative'
                            }}
                        >
                            <Link
                                to="/predict"
                                style={{
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    color: '#33DCFD'
                                }}
                            >
                                Try Now
                                <ArrowForwardIcon
                                    sx={{ position: 'absolute' }}
                                />
                            </Link>
                        </Box>
                    </Box>

                    {/* Card */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='12px'
                        sx={{
                            width: '180px',
                            height: '238px',
                            backgroundColor: '#3A3A3A',
                            borderRadius: '8px',
                            p: '16px'
                        }}
                    >
                        {/* Icon */}
                        <Box>
                            <InsertChartIcon sx={{ color: '#F4F4F4', fontSize: '42px' }}/>
                        </Box>

                        {/* Text */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '24px', color: '#F4F4F4', textAlign: 'left', mb: '8px' }}>Stock Stats</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: '12px', color: "#929292", textAlign: 'left' }}>Easiest way to predict any stock on the Macedonian market</Typography>
                        </Box>
                    </Box>

                    {/* Card */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='12px'
                        sx={{
                            width: '180px',
                            height: '238px',
                            backgroundColor: '#3A3A3A',
                            borderRadius: '8px',
                            p: '16px'
                        }}
                    >
                        {/* Icon */}
                        <Box>
                            <TrendingDownIcon sx={{ color: '#F4F4F4', fontSize: '42px' }}/>
                        </Box>

                        {/* Text */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '24px', color: '#F4F4F4', textAlign: 'left', mb: '8px' }}>When to Buy</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: '12px', color: "#929292", textAlign: 'left' }}>Easiest way to predict any stock on the Macedonian market</Typography>
                        </Box>
                    </Box>

                    {/* Card */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        gap='12px'
                        sx={{
                            width: '180px',
                            height: '238px',
                            backgroundColor: '#3A3A3A',
                            borderRadius: '8px',
                            p: '16px'
                        }}
                    >
                        {/* Icon */}
                        <Box>
                            <TrendingUpIcon sx={{ color: '#F4F4F4', fontSize: '42px' }}/>
                        </Box>

                        {/* Text */}
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '24px', color: '#F4F4F4', textAlign: 'left', mb: '8px' }}>When to Sell</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: '12px', color: "#929292", textAlign: 'left' }}>Easiest way to predict any stock on the Macedonian market</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Preview Box */}
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width: '100%',
                        position: 'relative',
                        height: '512px',
                        border: '2px solid #8E8E8E',
                        borderRadius: '12px',
                        backgroundColor: "#F4F4F4",
                        mt: '32px'
                    }}
                >
                    <p
                        style={{
                            position: 'absolute',
                            right: 0, top: -25,
                            color: '#5B5B5B',
                            fontSize: '16px',
                            fontWeight: '500',
                        }}
                    >
                        Preview
                    </p>

                    <img src={previewImage} alt="Preview Predict Page"/>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;