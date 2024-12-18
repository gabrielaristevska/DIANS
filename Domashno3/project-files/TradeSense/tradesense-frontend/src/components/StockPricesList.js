import React, {useEffect, useState} from 'react';
import axios from "axios";

function StockPricesList(props) {
    const [stockPrices, setStockPrices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/stock-prices')
            .then(response => {
                setStockPrices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the stock prices!', error);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Stock Prices</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Stock Code</th>
                    <th>Date</th>
                    <th>Last Price</th>
                </tr>
                </thead>
                <tbody>
                <tr key={stockPrices[0].id}>
                    <td>{stockPrices[0].id}</td>
                    <td>{stockPrices[0].stockCode}</td>
                    <td>{stockPrices[0].date}</td>
                    <td>{stockPrices[0].lastPrice}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StockPricesList;