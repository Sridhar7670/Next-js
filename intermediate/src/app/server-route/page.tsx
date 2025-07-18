import ImageSlider from "../client-route/page";
import { clientSideFunction } from "../utils/client-utils";
import ServeroutePage from "../utils/server-utis"

export default function ServerRoutePAge(){
    const resolve=ServeroutePage();
    const clientResult=clientSideFunction();
    return <>
    <h1>Server route : {resolve} {clientResult}</h1>
    <ImageSlider/>
    </>
}