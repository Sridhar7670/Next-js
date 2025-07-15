export const dynamic = "force-static"
export const revalidate= 10; //this will re-validate 
// data every ten seconds after dynamic if the dynamic is "force-dynamic"
export async function GET(){
    return Response.json({time: new Date().toLocaleTimeString()})
}