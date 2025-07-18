import { cookies } from "next/headers"
import CurrentTime from "../components/CurrentTime";

export default async function About(){

    const cookieStore= await  cookies();
    const theme= cookieStore.get("theme");
    console.log(theme);

    console.log("About server component ")
    return <h2>i  about<CurrentTime/></h2>
}