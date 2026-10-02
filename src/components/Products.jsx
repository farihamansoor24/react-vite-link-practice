import { Link, useLoaderData } from 'react-router-dom';


const Products = () => {
    const data = useLoaderData();
    // const {products} =useLoaderData();  // destructuring of products
    
    // console.log("Loader Data in Component:", data);

    if (!data) {
        return <h2>No data available! .</h2>;
    }

 

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products Listing</h1>
            <ul>
                {data.products.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.price}-{item.description}
                        <Link to={`/products/${item.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;