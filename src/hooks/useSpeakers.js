import { useEffect, useState } from "react";

export function useSpeakers() {
    const [loading, setLoading] = useState(false);
    const [speakers, setSpeakers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://randomuser.me/api/?results=12")
            .then(response => response.json())
            .then(data => setSpeakers(data.results))
            .catch(err => setError(err))
            .finally(() => setLoading(false));

    }, [])

    return { loading, speakers, error }
}