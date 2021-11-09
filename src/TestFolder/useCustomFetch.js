
import {useEffect, useState} from 'react'
//The custome hooks shouldstart with "use" keyword. Andif we want to return any thing we can do it at the end
const useCustomFetch = (info) => {
 const [data, setData] = useState(null)   

 //Suppose we are featchingfrom the endpoint and returning it 
useEffect(()=>{
    console.log("Inside CustomeHook")
    setData(info)
},[info])


 return [data]

}

export default useCustomFetch


