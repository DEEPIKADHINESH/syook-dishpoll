import React from 'react';
const SelectedDishes=({cart,setCart})=>{
const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id!==id)
    setCart(arr)
}
    return(
       <section className='py-4 container'>
        <div className='row '>
            <div className='col-9'>
                <h5>Items selected by you</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {cart.map((item)=>(
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} style={{height:"6rem"}}></img>
                            </td>
                            <td>{item.dishName}</td>
                            <td>{item.description}</td>
                             <td><button className="btn btn-warning" onClick={()=>handleRemove(item.id)}>Remove Item</button></td>
                        </tr>
                    ))}
                 </tbody>
                
                </table>
            </div>

        </div>
       </section>
    
    
   
    )
}
export default SelectedDishes