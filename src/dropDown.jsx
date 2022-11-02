import React,{useState}from "react";
import Select from "react-select";
import "./dropDown.css"
function Dropdown(){
    var dropdownlist=[
        {
            id:1,            
            value:30,
            label:"Rank 1"
        },
        {
            id:2,
            value:20,
            label:"Rank 2"
        },
        { 
            id:3,
            value:10,
            label:"Rank 3"
        }
    ]
    
    const[result,ddlValue]=useState(dropdownlist.value)
    const ddlHandler=e=>{
        ddlValue(e.value)
    }
   
   
    return(
        <div >
            <Select  options={dropdownlist} onChange={ddlHandler} className="scroll" />
            <h1>{result}</h1>
            </div>
    )
}
export default Dropdown