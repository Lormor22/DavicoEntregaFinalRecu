import { useEffect, useState } from "react"

export const useFetch = (url , category) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true
    })
    const getData = async () => {
        const resp = await fetch(url);
        const respData = await resp.json();
        setState ({
            data: respData,
            isLoading: false
        })
    }
    useEffect( () => { 
        getData()
    }, [url] )
    
    useEffect( () => { 
        getData()
    }, [category] )
    

        return{
            data: state.data,
            isLoading: state.isLoading
        }

}