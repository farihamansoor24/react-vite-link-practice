import {  useLoaderData } from 'react-router-dom';
const ProductDetails = () => {
    const data = useLoaderData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  )
}

export default ProductDetails