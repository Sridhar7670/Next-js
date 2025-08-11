import { Suspense } from "react"
import Page from "../blog/page"
import LoadingButtons from "@/Loading"

export default function Posts(){
    return (
    
    // <Suspense fallback={<p>HI THERE TEXT IS LOADING </p>}>
    <Suspense fallback={<LoadingButtons/>}>
    <Page />
    </Suspense>
    )
    
}