import { useState, useEffect } from "react";
import { transformToArray } from "../firebase-utils";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        useEffect(()=> {
        setLoading(true);

        async function getData(url) {
            
            const response = await fetch(url);
            if (response.status === 200) {
                const body = await response.json();
                const asArray = transformToArray(body);
                setData(asArray);
            } else {
                setError(true);
            }
            setLoading(false);
        }
        getData(url);
   }, [url]);
   return {data, loading, error};
}
export default useFetch;