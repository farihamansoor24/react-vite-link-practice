export const getProducts=async()=>{
    const res= await  fetch('http://dummyjson.com/products');
    const data = await res.json();
    return data;
}

export const getProductDetails=async(params)=>{
    const res= await  fetch(`http://dummyjson.com/products/${params.id}`);
    const data = await res.json();
    return data;
}