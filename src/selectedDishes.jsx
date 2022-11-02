import React from 'react';
import Dropdown from './dropDown';
import {Link} from "react-router-dom";
const SelectedDishes=({cart,setCart})=>{
   const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id!==id)
    setCart(arr)
}
return(
    
       <section className=' container   '>
        <div className='row   '>
            <div className='col-12 h-100 '>
                <h5>Items selected by you</h5>
               <table className='table table-light table-hover mb-100   '>
                    {cart.map((item)=>(
                        <tbody>
                         <tr key={item.id}>
                            <td>
                            <img src={item.image} style={{height:"6rem"}}></img>
                            </td>
                            <td >{item.dishName}</td>
                            <td>{item.description}</td>
                            <td><button className="btn btn-warning" onClick={()=>handleRemove(item.id)}>Remove Item</button></td>
                            <td><Dropdown /></td>  
                            </tr>
                            </tbody>
                         ))}
                        </table>
                  </div>
               
        </div>
        <Link  className="btn btn-primary"to="/dishes">Select other dishes</Link> 
       </section>
           
           
    
   
    )
}
export default SelectedDishes