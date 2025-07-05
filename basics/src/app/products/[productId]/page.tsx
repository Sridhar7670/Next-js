

export default  function ProductDetails(
    {params}:
    // {params : Promise <{productId:string}>}){. we can use with or without promise it is upto us 
    {params :  {productId:string}}){
        const productId = ( params).productId;  //we can use await or even eithout await will also work sometimes
    return (
        <div>
            <h2>Details of products {productId}</h2>
        </div>
    )

}
