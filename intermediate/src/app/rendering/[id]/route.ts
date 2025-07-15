// import { NextRequest, NextResponse } from 'next/server';
// import { data } from '../data';

// // export async function GET(
// //   request: NextRequest,
// //   context: { params: { id: string } }
// // ) {
// //   const { id } = context.params;
// //   const specificData = data.find((Sp) => Sp.id === parseInt(id));

// //   if (!specificData) {
// //     return NextResponse.json({ error: 'Data not found' }, { status: 404 });
// //   }

// //   return NextResponse.json(specificData);
// // }


// export async function PATCH(
//  request:Request,
//  {params}:
//  {params:{id:string}}   
// ){
//     const {id}= params;
//     const body=await request.json();
//     const {text}= body

//     const index=data.findIndex((data)=>data.id === parseInt(id));
//     data[index].text=text
//     return Response.json({
//         updatedData:data[index],
//         message:"the data is updated"}
//     )
// }

// export async function DELETE(
//     _request:Request,
//     {params}:{params:{id:string}}
// ){
//     const {id}=  params;
//     const index=data.findIndex((data)=>data.id ===parseInt(id));
//     if(index ===-1){
//         return new Response(JSON.stringify({message:"item not found"}),{status:404})
//     }
//     const deletedValue=data[index];
//     data.splice(index,1);

//     return new Response (JSON.stringify({message:"data deleted sucessfully",deletedvalue:deletedValue}),{
//         status:200,
//         headers:{"Content-Type":"application/json"}
//     })
// }


// import { NextRequest, NextResponse } from 'next/server';
// import { data } from '../data';

// export async function GET(
//   request: NextRequest,
//   context: { params: { id: string } }  // ✅ inline type
// ) {
//   const { id } = context.params;
//   const specificData = data.find((item) => item.id === parseInt(id));

//   if (!specificData) {
//     return NextResponse.json({ error: 'Data not found' }, { status: 404 });
//   }

//   return NextResponse.json(specificData);
// }

// export async function PATCH(
//   request: NextRequest,
//   context: { params: { id: string } }  // ✅ inline type again
// ) {
//   const { id } = context.params;
//   const body = await request.json();
//   const { text } = body;

//   const index = data.findIndex((item) => item.id === parseInt(id));
//   if (index === -1) {
//     return NextResponse.json({ message: 'Item not found' }, { status: 404 });
//   }

//   data[index].text = text;

//   return NextResponse.json({
//     updatedData: data[index],
//     message: 'The data is updated',
//   });
// }

// export async function DELETE(
//   _request: NextRequest,
//   context: { params: { id: string } }  
// ) {
//   const { id } = context.params;
//   const index = data.findIndex((item) => item.id === parseInt(id));

//   if (index === -1) {
//     return NextResponse.json({ message: 'Item not found' }, { status: 404 });
//   }

//   const deletedValue = data[index];
//   data.splice(index, 1);

//   return NextResponse.json({
//     message: 'Data deleted successfully',
//     deletedValue,
//   });
// }



import { data } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const datas = data.find((data) => data.id === parseInt(id));
  return Response.json(datas);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = data.findIndex((data) => data.id === parseInt(id));
  data[index].text = text;
  return Response.json(data[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = data.findIndex((data) => data.id === parseInt(id));
  const deleteddata = data[index];
  data.splice(index, 1);
  return Response.json(deleteddata);
}