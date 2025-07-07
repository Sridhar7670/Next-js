// import Link from "next/link";

// export default async function NewsArticle({params,
//     searchparams
// }:{
//     params :Promise <{articleId:string}>;
//     searchparams :Promise<{lang?:"en" | "es"|"fr"}>;
// }){
//     const {articleId}=await params;
//     const {lang="en"}=await searchparams;
//     return (
//         <>
//         <h1>news articles {articleId}</h1>
//         <p>Reading in languages {lang}</p>
        
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//         <br />
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//         <br />
//         <Link href={`/articles/${articleId}?lang=fr`}>Fresh</Link>
//         </>
//     )
// }
// "use client"
import Link from "next/link";
export default  function NewsArticle({params,
    searchParams
}:{
    params : {articleId:string};
    searchParams ?:{lang?:"en" | "es"|"fr"};
}){
    const {articleId}=  params;
    const {lang="en"}=  searchParams ?? {};
    return (
        <>
        <h1>news articles {articleId}</h1>
        <p>Reading in languages {lang}</p>
        
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>Fresh</Link>
        </>
    )
}