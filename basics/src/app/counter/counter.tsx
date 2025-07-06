"use client"
import { useState } from "react"

// export const  metadata={
//     title:"counter",
//     description:"basic counter"
// }

export default function Counter(){
    const [count,setCount]=useState(0)
    return (
        <>
            <p>Count:{count}</p>
            <button onClick={()=>setCount((e)=>e+1)}>INC</button>
            <button onClick={()=>setCount((e)=>e-1)}>DEC</button>
        </>
    )
}