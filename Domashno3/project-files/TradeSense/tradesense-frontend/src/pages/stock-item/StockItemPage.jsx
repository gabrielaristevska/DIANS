import React from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";
import NavigationBar from "../../components/NavigationBar";
import {useParams} from "react-router";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import graph1 from '../../assets/stock-item-graphs/g1.png'
import graph2 from '../../assets/stock-item-graphs/g2.png'
import graph3 from '../../assets/stock-item-graphs/g3.png'
import graph4 from '../../assets/stock-item-graphs/g4.png'
import useSignals from "../../hooks/useSignals";
import {
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart, ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import useSentiment from "../../hooks/useSentiment";

function StockItemPage() {
    const { id } = useParams();
    const { signals, loading: signalsLoading, error: signalsError } = useSignals(id);
    const { sentiment, loading: sentimentLoading, error: sentimentError } = useSentiment(id);

    if (signalsLoading || sentimentLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (signalsError || sentimentError) {
        return (
            <Box>
                <NavigationBar />
                <Typography variant="h2" color="error">
                    Error: {signalsError || sentimentError}
                </Typography>
            </Box>
        );
    }

    // Process data
    const processedData = signals.map(({ date, signal, lastPrice }) => ({
        date: new Date(date).toLocaleDateString(),
        signal,
        lastPrice,
        buySignal: signal === "Buy" ? lastPrice : null,
        sellSignal: signal === "Sell" ? lastPrice : null,
    }));

    const pieData = [
        { name: "Buy", value: signals.filter(({ signal }) => signal === "Buy").length },
        { name: "Sell", value: signals.filter(({ signal }) => signal === "Sell").length },
        { name: "Hold", value: signals.filter(({ signal }) => signal === "Hold").length },
    ];

    const COLORS = ["#00C49F", "#FF8042", "#FFBB28"];

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
            <Box sx={{ width: '980px', margin: '80px auto 64px' }}>
                <Typography variant="h1" sx={{fontSize: '72px', color: '#272727', mb: '16px' }}>Prediction Results for: <span style={{ color: '#2A6DBB' }}>{id}</span></Typography>
            </Box>


            {/* Main Content */}
            <Box>
                {/* LineChart */}
                <Box sx={{ mb: '48px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <Typography variant="h2" sx={{ fontSize: '24px', mb: '16px' }}>
                        Stock Price and Signals Over Time
                    </Typography>
                    <LineChart width={900} height={400} data={processedData}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="lastPrice" stroke="blue" name="Last Price" />
                        <Scatter dataKey="buySignal" fill="green" name="Buy Signal" />
                        <Scatter dataKey="sellSignal" fill="red" name="Sell Signal" />
                    </LineChart>
                </Box>

                {/* PieChart */}
                <Box sx={{ mb: '32px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <Typography variant="h2" sx={{ fontSize: '24px' }}>
                        Signal Distribution
                    </Typography>
                    <PieChart width={400} height={400}>
                        <Pie data={pieData} cx={200} cy={200} outerRadius={150} fill="#8884d8" dataKey="value" label>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </Box>

                {/* Fundamental analysis */}
                <Box sx={{ mb: '32px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    {sentiment && (
                        <Typography variant="h2" sx={{ fontSize: '24px' }}>
                            Based on our fundamental analysis of {id}, derived from historical news, we recommend that you{' '}
                            <span style={{ color: "#2A6DBB", fontWeight: "600" }}>
                                {sentiment.sentiment === 'positive' ? 'consider buying this stock.' : 'consider selling your stocks.'}
                            </span>
                        </Typography>
                    )}
                    {!sentiment && <Typography variant="h2" sx={{fontSize: '24px'}}>
                        {`Our fundamental analysis of ${id} indicates that we couldn’t find sufficient historical news data to support our analysis.`}
                    </Typography>}
                </Box>
            </Box>
        </Box>
    );
}

export default StockItemPage;