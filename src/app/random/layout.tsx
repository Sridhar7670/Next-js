import { ReactNode } from "react"

function childrenLayoutSpecialized({children,}:{
    children:ReactNode
}){
    return (
        <>
        {children}
        <h3>Some specialized layout has occured</h3>
        </>
    )

}
export default childrenLayoutSpecialized