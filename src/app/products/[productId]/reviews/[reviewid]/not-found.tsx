"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathname=usePathname();
    const productId=pathname.split("/")[2]
    const reviewid=pathname.split("/")[4]
    console.log(pathname,productId,reviewid)
    return (
        <>
            <h1 style={{backgroundColor:"red",color:"black"}}>
            page not found
            </h1>
            <h2>Review {reviewid} not found for product {productId}</h2>
        </>
    )
}