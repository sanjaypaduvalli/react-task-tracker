import React, { useEffect } from 'react'

 const TestRoutes1 = () => {

useEffect(()=>{
    setTimeout(()=>{
        fetch("https://reqres.in/api/products/")
        .then(res=>{res.json()})
    },1000)
    console.log("Test route useEffect")
});

    return (
        <div>
            <h2>This is the TestRoute second</h2>
        </div>
    )
}

export default TestRoutes1
