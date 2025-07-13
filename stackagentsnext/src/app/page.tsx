import Main from "./components/Main/main"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
export const metadata ={
  title:"Stack-Agents",
  description:"A baisc Landing Page Generator based on Prompts"
};

export default function Page(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}