import ServeroutePage from "../utils/server-utis"

export default function ServerRoutePAge(){
    const resolve=ServeroutePage();
    return <>
    <h1>Server route : {resolve}</h1></>
}