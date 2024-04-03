import React, { useEffect, useState } from 'react'

// Define the interface for the data returned by the API
interface ApiResponse {
    // Define the properties based on your API response structure
  }

const UseApi = (url:string) => {

    // state to hold the fetched data 
    const [data,setData] = useState<ApiResponse | null>(null);

    // state to track looading state 
    const [loading,setLoading] = useState<boolean>(true);

    //state to track error state
    const [error,setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }
                const result:ApiResponse = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[url]); // Dependency array to ensure the effect runs when URL changes
  return  {data,loading,error}
}

export default UseApi