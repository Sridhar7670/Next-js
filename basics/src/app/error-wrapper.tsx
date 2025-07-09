"use client"
import { ReactNode, useState } from "react";
import "./global.css"
interface Wrapperprops{
    children:ReactNode
}
const ErrorSimulator =({
    message="An Error occued here andi"
}:{
    message?:string;
})=>{
    const[error,setError]=useState(false);
    if(error) throw new Error(message);
    return (
        <button title="simulate an error"
        className="btn" onClick={()=>setError(true)}>
            Simulate Error
        </button>
    )
}
export const ErrorWrapper =({children}:Wrapperprops)=>{
    return (
        <div className="some">
            <div className="absolute ">
                <ErrorSimulator message="Simulated error in root layout"/>
            </div>
            {children}
        </div>
    )
}