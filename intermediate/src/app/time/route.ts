// // export const dynamic = "force-static"
// export const revalidate= 2; //this will re-validate 
// // data every ten seconds if force-static or dynamic are removed ; or commented out 
// export async function GET(){
//     return Response.json({time: new Date().toLocaleTimeString()})
// }

export const dynamic = "force-static"
export const revalidate= 2; //this will re-validate 
// data every ten seconds if force-static or dynamic are removed ; or commented out 
export async function GET(){
    return Response.json({time: new Date().toLocaleTimeString()})
}