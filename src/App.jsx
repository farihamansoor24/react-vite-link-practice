import MainLayout from './components/MainLayout'
import AdminLayout from './components/Admin/AdminLayout'
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import {getProductDetails, getProducts} from './productServices';
import './App.css'

function App() {
  // Method 1: Using createBrowserRouter to define routes and layouts
// const router= createBrowserRouter([
//   // Set Main Layout for user pages
//   {path:'/', element:<MainLayout />,
//    children:[
//     {index:true, element:<h1>Home</h1>}, // This is the default route for the main layout. When index is true, it means that this route will be rendered when the parent route (in this case, '/') is matched exactly. There is no need to specify a path for this route because it will be rendered at the root path of the parent route. 
//     {path:'/about', element:<h1>About</h1>},
//   {path:'/contact', element:<h1>Contact</h1>},
//   {path:'/services', element:<h1>Services</h1>},
//   {path:'/blog', element:<h1>Blog</h1>,
//      children:[{path:'/blog/:id', element:<h1>Blog Details</h1>}]
//   },
//   {path:'/products', element:<h1>Products</h1>,
//      children:[{path:'/products/:id', element:<h1>Product Details</h1>}]
//   }
//   ]},
//   // Set Admin Layout for admin pages
//   {path:'/admin', element:<AdminLayout />,
//   children:[
//     {index:true, element:<h1>Admin Home</h1>},
//   ]},
//   {path:'*', element:<h1>404 Not Found</h1>}

  

// ])

// Method 2: Using createRoutesFromElements, createBrowserRouter to define routes and layouts 
const routes = createRoutesFromElements(
  <>
  {/* Main Layout for user pages */}
    <Route path='/' element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/services' element={<h1>Services</h1>} />
          <Route path='/blog' element={<h1>Blog</h1>}>
            <Route path='/blog/:id' element={<h1>Blog Details</h1>} />
          </Route>
          <Route
            loader = {getProducts}
            errorElement={<h1>Error in getting data ....</h1>} 
            path='/products'
            HydrateFallback={() => <h1>Loading Products.....</h1>}
            element={<Products />} />
            
          
          <Route loader={getProductDetails} errorElement={<h1>Data Not Found</h1>} path='/products/:id'   HydrateFallback={() => <h1>Loading Product Details.....</h1>} element={<ProductDetails/>} />
    </Route>
    {/* Admin Layout for admin pages */}
    <Route path='/admin' element={<AdminLayout />}>
      <Route index element={<h1>Admin Home</h1>} />
    </Route>
    {/* If page not found  */}
    <Route path='*' element={<h1>404 Not Found</h1>} />

  </>
  )
const router = createBrowserRouter(routes)
  return (
    <>
      <RouterProvider  router={router} /> 
      {/* This component is responsible for rendering the appropriate route based on the current URL. It takes the router object created by createBrowserRouter and uses it to determine which route to render. The RouterProvider component should be placed at the top level of your application, so that it can provide routing functionality to all child components.  */}
    </>
  )
}

export default App
