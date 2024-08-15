import { useEffect, useState } from "react"

const useGet =(get)=>{
    const [loading ,setLoading] =useState()
    const [data ,setData] =useState()
    useEffect(()=>{
        get
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

return[loading ,data]
}
export default useGet