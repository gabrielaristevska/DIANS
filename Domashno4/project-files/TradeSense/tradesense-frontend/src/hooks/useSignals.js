import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../context/AuthContext";

const useSignals = (stockCode) => {
    const [signals, setSignals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authToken } = useAuth();

    useEffect(() => {
        if (!stockCode) return;

        const fetchSignals = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/api/predictions/signals`, {
                    params: { stockCode },
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Add the JWT token
                    },
                });
                setSignals(response.data);
            } catch (err) {
                setError(err.message || "Failed to fetch signals.");
            } finally {
                setLoading(false);
            }
        };

        fetchSignals();
    }, [stockCode]);

    return { signals, loading, error };
};

export default useSignals;