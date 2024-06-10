import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then(res => res.json());

const useAPI = (string, params) => {
    let key;
    if (params) {
        key = ["/api/" + string, params];
    } else {
        key ="/api/" + string;
    }
    const { data, error, isLoading } = useSWR(key, fetcher);
    return { data, error, isLoading };
    
 
};

export default useAPI;