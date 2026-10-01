import MainLayout from './components/MainLayout'
import AdminLayout from './components/Admin/AdminLayout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

function App() {
const router= createBrowserRouter([
  // Set Main Layout for user pages
  {path:'/', element:<MainLayout />,
   children:[
    {index:true, element:<h1>Home</h1>}, // This is the default route for the main layout. When index is true, it means that this route will be rendered when the parent route (in this case, '/') is matched exactly. There is no need to specify a path for this route because it will be rendered at the root path of the parent route. 
    {path:'/about', element:<h1>About</h1>},
  {path:'/contact', element:<h1>Contact</h1>},
  {path:'/services', element:<h1>Services</h1>},
  {path:'/blog', element:<h1>Blog</h1>,
     children:[{path:'/blog/:id', element:<h1>Blog Details</h1>}]
  },
  {path:'/products', element:<h1>Products</h1>,
     children:[{path:'/products/:id', element:<h1>Product Details</h1>}]
  }
  ]},
  // Set Admin Layout for admin pages
  {path:'/admin', element:<AdminLayout />,
  children:[
    {index:true, element:<h1>Admin Home</h1>},
  ]},
  {path:'*', element:<h1>404 Not Found</h1>}

  

])

  return (
    <>
      <RouterProvider router={router} /> 
      {/* This component is responsible for rendering the appropriate route based on the current URL. It takes the router object created by createBrowserRouter and uses it to determine which route to render. The RouterProvider component should be placed at the top level of your application, so that it can provide routing functionality to all child components.  */}
    </>
  )
}

export default App
