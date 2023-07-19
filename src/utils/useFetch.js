import axios from "axios"
import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [response , setResponse] = useState([])
    useEffect(()=>{
        getDataInApi()
    },[])
    const getDataInApi =()=>{
        axios.get(url)
        .then((res)=>{
            setResponse(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
    return response
}

export default useFetch;