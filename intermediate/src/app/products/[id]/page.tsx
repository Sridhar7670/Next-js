import CurrentTime from "@/app/components/CurrentTime";

export const dynamicParams=false;
export async function generateStaticParams(){
    return [{id :"1"},{id:"2"},{id:"3"}]
}
export default async function ProductsPage({params}:{
    params :Promise <{id:string}>
}){
    const {id}= await params;
    return <>
        product {id} details are rendered at <CurrentTime/>
    </>
}