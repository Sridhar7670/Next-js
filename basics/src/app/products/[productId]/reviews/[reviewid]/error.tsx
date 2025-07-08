"use client"

export default function ErrorBoundary({error,reset}:{
    error:Error,
    reset:()=>void;
}){
    return (
    <>
    <div>Error in reviewId</div>
    <p>{error.message}</p>
    <button onClick={reset}>Try again</button>
    </>)
}