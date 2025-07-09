import { notFound } from "next/navigation"

export default async function ProductsReview(
    {params}:
    {params:
        {productId :string ,reviewid:string}
    })
    {
        const {productId,reviewid}=await params
        
        return (
            <>
            <h2>Product {productId}</h2>
            <h1>..</h1>
            <h4 style={{background:"red",padding:"10px"}}>Review {reviewid}</h4>
            </>
        )
    }