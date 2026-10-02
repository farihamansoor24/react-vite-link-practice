export const getProducts=async()=>{
    const res= await  fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

export const getProductDetails=async({params})=>{
    // console.log("Params in getProductDetails:", params);
    const res= await  fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await res.json();
    return data;
}