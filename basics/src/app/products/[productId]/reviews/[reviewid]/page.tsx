import { notFound, redirect } from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}
export default async function ProductDetailsReview(
    {params}:{
    //    params:Promise <{productId :string,reviewid: string}> 
    params :{productId:string,reviewid:string}
    }

){
    // const {productId,reviewid}= params
    const {productId,reviewid}=await params //can use with or without await it is upto us 
    const random=getRandomInt(2)
    if (random==1){
        throw new Error ("error is loading")
    }
    console.log(reviewid,typeof(reviewid))
        if(parseInt(reviewid)>10){  
            // notFound();
            redirect("/")
        }
    return(
        <>
        <h1>hello</h1>
        <div>
            <p>the product named, {productId}</p>
            <p>the review od that particular product is like this {reviewid}</p>
        </div>
        </>
    )
}