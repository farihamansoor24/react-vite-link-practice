import {NavLink} from 'react-router-dom'
 import React from 'react'
 
 const Header = () => {
   return (
     <div>
         <nav>
             <ul>
                 <li><NavLink to="/" className="active">Home</NavLink></li>
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 <li><NavLink to="/services">Services</NavLink></li>
                 <li><NavLink to="/blog">Blog</NavLink></li>
                 <li><NavLink to="/products">Products</NavLink></li>
             </ul>
         </nav>
     </div>
   )
 }
 
 export default Header