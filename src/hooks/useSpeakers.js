import { useEffect, useState } from "react/cjs/react.production.min"

export function useSpeakers() {
    const [loading, setLoading] = useState(false);
    const [speakers, setSpeakers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

    }, [])

    return { loading, speakers, error }
}