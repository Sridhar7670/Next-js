"use client"
import { useState } from "react"

export default function Dashboard(){
    console.log("i am client comp ")
    const [state,setState]=useState("")
    return (
        <>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} style={{backgroundColor:"white"}}/>
        <div>{state}</div>
        </>
    )
}