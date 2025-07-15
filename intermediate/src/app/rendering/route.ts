import { NextRequest } from "next/server";
import { data } from "./data"
export async function GET(request:NextRequest){
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get("query")

    const filteredData=query ? data.filter((data)=>data.text.includes(query)): data;
    return Response.json(filteredData)
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

