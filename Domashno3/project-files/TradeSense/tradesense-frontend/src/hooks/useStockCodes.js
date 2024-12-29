import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../context/AuthContext";

export default function useStockCodes() {
    const [stockCodes, setStockCodes] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authToken } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const fetchStockCodes = async () => {
            try {
                // Fetch stock code data from API endpoint
                const response = await axios.get('http://localhost:9090/api/stock-items/codes', {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Add the JWT token
                    },
                });

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