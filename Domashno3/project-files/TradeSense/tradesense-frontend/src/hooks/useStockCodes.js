import {useEffect, useState} from "react";
import axios from "axios";

export default function useStockCodes() {
    const [stockCodes, setStockCodes] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchStockCodes = async () => {
            try {
                // Fetch stock code data from API endpoint
                const response = await axios.get('/api/stock-prices/codes');

                if (isMounted) {
                    setStockCodes(response.data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setLoading(false);
                }
            }
        }

        fetchStockCodes();

        return () => {
            isMounted = false;
        };
    }, [])

    return { stockCodes, loading, error };
}