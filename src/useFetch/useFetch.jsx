import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const useFetch = (url) => {
    const [data , setDate] = useState(null)
    
    useEffect(() => {
        axios.get(url).then((data) => setDate(data.data))
    }, [url])


  return {data}
}

