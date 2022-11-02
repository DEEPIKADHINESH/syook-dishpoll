import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
     <nav className="navbar navbar-light bg-warning " >
        <NavLink className="navbar-brand" to="/dishes">All Dishes</NavLink>
        <NavLink className="navbar-brand"  to="/selecteddishes" >Selected Dishes</NavLink>
        <NavLink className="navbar-brand"  to="/login">Selected Dishes</NavLink>
        
  </nav>
    )
     
   
}
export default Navbar
