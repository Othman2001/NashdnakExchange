import {useState , useEffect} from 'react'
import axios from 'axios'

function useFetch(url){
    const[data ,setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error , setError] = useState(null)

    useEffect(()=>{
        setLoading ('lodding ----')
        setData(null);
        setError (null);

        axios.get(url).then(res=>{
            setLoading(false);
            res.data && setData(res.data);
        }).catch(err=>{
            setLoading(false)
        })
    } , [url])


    return {data , loading , error}
}

export default useFetch