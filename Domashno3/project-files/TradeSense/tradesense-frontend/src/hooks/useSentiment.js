import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../context/AuthContext";


const useSentiment = (stockCode) => {
    const [sentiment, setSentiment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { authToken } = useAuth();

    useEffect(() => {
        if (!stockCode) return;

        const fetchSentiment = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/api/predictions/sentiments/${stockCode}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setSentiment(response.data);
            } catch (err) {
                setError(err.message || "Failed to fetch sentiment.");
            } finally {
                setLoading(false);
            }
        };

        fetchSentiment();
    }, [stockCode]);

    return { sentiment, loading, error };
}

export default useSentiment;