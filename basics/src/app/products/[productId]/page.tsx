import { Metadata } from "next";
type Props ={params :{productId:string}}
export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
    const productId=params.productId
    console.log(productId,"prod id")
    // console.log(await params,"params")
    return {
        title:`title:${productId}`,
        description:`product :${productId}`
    }
}

export default async function ProductDetails({params}:{params :{productId:string}}) {
    const productId=params.productId
    return (
        <div>
            <h2>Details of products {productId}...</h2>
        </div>
    )
    
}











// export default  function ProductDetails(
//     {params}:
//     // {params : Promise <{productId:string}>}){. we can use with or without promise it is upto us 
//     {params :  {productId:string}}){
//         const productId = ( params).productId;  //we can use await or even eithout await will also work sometimes
//     return (
//         <div>
//             <h2>Details of products {productId}</h2>
//         </div>
//     )

// }
