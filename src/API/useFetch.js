import { useState, useEffect } from "react";
import { transformToArray } from "../firebase-utils";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const callUrl = url;

    async function getData(callUrl) {
            
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

    // Funktion til at genkøre seneste fetch kald som sørger for at sætte data på ny. 
    // Når data state bliver sat trigger det en rerender af komponenterne så bookingen visuelt fjernes. 
    function retriggerGetData(){
        getData(callUrl);
    }

    useEffect(()=> {
        setLoading(true);
        
        getData(url);
   }, [url]);
   return {data, loading, error, retriggerGetData};
}
export default useFetch;
/*useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
                setError(err);
            }).finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };*/