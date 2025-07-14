import { data } from "../data";

export async function GET(
    _request:Request,
    {params}:
    {params:{id:string}}
){
    const {id}=await params;
    const specificData=data.find((Sp)=>Sp.id === parseInt(id));
    return Response.json(specificData)
}

export async function PATCH(
 request:Request,
 {params}:
 {params:{id:string}}   
){
    const {id}=await params;
    const body=await request.json();
    const {text}= body

    const index=data.findIndex((data)=>data.id === parseInt(id));
    data[index].text=text
    return Response.json({
        updatedData:data[index],
        message:"the data is updated"}
    )
}

export async function DELETE(
    _request:Request,
    {params}:{params:{id:string}}
){
    const {id}= await params;
    const index=data.findIndex((data)=>data.id ===parseInt(id));
    if(index ===-1){
        return new Response(JSON.stringify({message:"item not found"}),{status:404})
    }
    const deletedValue=data[index];
    data.splice(index,1);

    return new Response (JSON.stringify({message:"data deleted sucessfully",deletedvalue:deletedValue}),{
        status:200,
        headers:{"Content-Type":"application/json"}
    })
}