import axios from "axios";
import React,{useEffect,useState}from "react";
const Dishes=({handleClick})=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        const url="https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        const fetchData=async()=>{
            try{
                await axios.get(url)
               .then(response=>{
                   setData(response.data)
                })
               
            }
            catch(error)
            {console.log(error)}
        }
fetchData()
    },[])
    return(
<div>
      <div className="py-4 container">
                    <div className="col-md-12 ">
                        <div className="row ">
                            {data.map((datas) => (
                                <div className="col-md-4 mb-4 " key={datas.id}>
                                    <div className="card h-100" >
                                        <img src={datas.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{datas.dishName}</h5>
                                            <p className="card-text">{datas.description}</p>
                                           <button onClick={()=>handleClick(datas)}>Click to Add</button> 
                                          </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    </div>
                    
</div>
    )
}
export default Dishes;
