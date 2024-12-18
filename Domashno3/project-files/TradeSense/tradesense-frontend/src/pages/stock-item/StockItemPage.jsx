import React from 'react';
import {Box, Typography} from "@mui/material";
import NavigationBar from "../../components/NavigationBar";
import {useParams} from "react-router";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import graph1 from '../../assets/stock-item-graphs/g1.png'
import graph2 from '../../assets/stock-item-graphs/g2.png'
import graph3 from '../../assets/stock-item-graphs/g3.png'
import graph4 from '../../assets/stock-item-graphs/g4.png'

function StockItemPage() {
    const { id } = useParams();

    return (
        // Main container
        <Box
            sx={{
                width: '100%',
                pb: '80px'
            }}
        >
            <NavigationBar/>
            {/* Landing Content */}
            <Box sx={{ width: '980px', margin: '80px auto 0' }}>
                <Typography variant="h1" sx={{fontSize: '72px', color: '#272727', mb: '16px' }}>Prediction Results for: <span style={{ color: '#2A6DBB' }}>{id}</span></Typography>
            </Box>

            {/* Main Content */}
            <Box>
                {/* First Part */}
                <Box
                    display="flex"
                    justifyContent="center"
                    gap="24px"
                    sx={{
                        width: '1180px',
                        margin: '64px auto 0'
                    }}
                >
                    <Box
                        sx={{
                            width: '256px',
                            backgroundColor: '#272727',
                            p: '16px',
                            borderRadius: '12px',
                            textAlign: 'left'
                        }}
                    >
                        <InsertChartIcon sx={{ fontSize: '42px', color: '#F4F4F4', mb: '12px'}} />
                        <Typography variant="h2" sx={{ fontSize: '24px', color: '#F4F4F4', mb: '12px' }} >Last week average</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '16px', color: '#F4F4F4' }} >24,969.00</Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '256px',
                            backgroundColor: '#272727',
                            p: '16px',
                            borderRadius: '12px',
                            textAlign: 'left'
                        }}
                    >
                        <InsertChartIcon sx={{ fontSize: '42px', color: '#F4F4F4', mb: '12px'}} />
                        <Typography variant="h2" sx={{ fontSize: '24px', color: '#F4F4F4', mb: '12px' }} >Last month average</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '16px', color: '#F4F4F4' }} >24,969.00</Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '256px',
                            backgroundColor: '#272727',
                            p: '16px',
                            borderRadius: '12px',
                            textAlign: 'left'
                        }}
                    >
                        <InsertChartIcon sx={{ fontSize: '42px', color: '#F4F4F4', mb: '12px'}} />
                        <Typography variant="h2" sx={{ fontSize: '24px', color: '#F4F4F4', mb: '12px' }} >Last year average</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '16px', color: '#F4F4F4' }} >24,969.00</Typography>
                    </Box>
                </Box>

                {/* Second Part */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="32px"
                >
                    <img src={graph1} alt="graph 1" style={{ width: '50%' }} />
                    <img src={graph2} alt="graph 2" style={{ width: '50%' }} />
                </Box>

                {/* Third Part */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="32px"
                    sx={{mt: '32px'}}
                >
                    <Box
                        display="flex"
                        gap="16px"
                    >
                        <Box
                            sx={{
                                width: '180px',
                                backgroundColor: '#272727',
                                p: '16px',
                                borderRadius: '12px',
                                textAlign: 'left'
                            }}
                        >
                            <TrendingUpIcon sx={{ fontSize: '42px', color: '#F4F4F4', mb: '12px'}} />
                            <Typography variant="h2" sx={{ fontSize: '24px', color: '#F4F4F4', mb: '12px' }} >When to sell</Typography>
                        </Box>
                        <img src={graph3} alt="up chart"/>
                    </Box>

                    <Box
                        display="flex"
                        gap="16px"
                    >
                        <Box
                            sx={{
                                width: '180px',
                                backgroundColor: '#272727',
                                p: '16px',
                                borderRadius: '12px',
                                textAlign: 'left'
                            }}
                        >
                            <TrendingDownIcon sx={{ fontSize: '42px', color: '#F4F4F4', mb: '12px'}} />
                            <Typography variant="h2" sx={{ fontSize: '24px', color: '#F4F4F4', mb: '12px' }} >When to buy</Typography>
                        </Box>
                        <img src={graph4} alt="down chart"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default StockItemPage;