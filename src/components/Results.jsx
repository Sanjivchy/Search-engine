import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import  Loading  from './Loading';

import { useResultContext } from './contexts/ResultContextProvider';



const Results = () => {
const { Results, isLoading , getResults, searchTerm } =useResultContext();
 const location = useLocation();

 if(isLoading) return <Loading/>;

    return (
        <div>
            result
        </div>
    )
}

export default Results
