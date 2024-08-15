import { useState } from "react"

const usePost =(post,onSuccess)=>{
    const [loading ,setLoading]=useState()
    const handelSubmit= (body)=>{
        post(body)
        .then((res)=>{
            console.log(res)
            if(onSuccess){
                onSuccess(res)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return[loading ,handelSubmit]
}
export default usePost