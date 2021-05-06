import { useEffect, useState } from "react/cjs/react.production.min"

export function useTalks() {
    const [loading, setLoading] = useState(false);
    const [talks, setTalks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

    }, [])

    return { loading, talks, error }
}