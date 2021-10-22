import { createContext, useState,useContext  } from "react";
import React from "react";
import { Children } from "react";

const ResultContext = createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1';

const ResultContextProvider = () => {
    const [results , setResults ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm ,setSearchTerm] = useState('');


    // /video, /search , /images ,/ news

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers:{
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'c8c0d36261msh6eb6442808b30d9p195331jsnd741c225a80f'
              } 
        });
        const data = await response.json();
        setResults(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {Children}
        </ResultContext.Provider>
    )
}

export default ResultContextProvider
export const useResultContext = () => useContext(ResultContext);