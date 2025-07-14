import { NextRequest } from "next/server";
import { data } from "./data"
export async function GET(request:NextRequest){
    return Response.json(data)
}
export async function POST(request:Request){
    const dynamicData=await request.json();
    const newdata={
        // id:Math.random()*100,
        id:data.length+1,
        text:dynamicData.text
    }
    data.push(newdata)
    return new Response(JSON.stringify(newdata),{
        headers:{"Content-Type":"application/json"},
        status:201,
    })
}

