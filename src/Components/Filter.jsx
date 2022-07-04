import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

 const  [searchParams,setSearchParams] = useSearchParams()
 const  [data,setdata]=useState([])
console.log(searchParams);

 const handlechange=(e)=>{

   const newdata=[...data]
   if(newdata.includes(e.target.value)){
    console.log("lk")
    newdata.splice(newdata.indexOf(e.target.value),1)
   }
   else{
    newdata.push(e.target.value)
   }
  
  setdata(newdata)
}

useEffect(()=>{
 setSearchParams({category:data})
},[data,setSearchParams])
 
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input onChange={(e)=>handlechange(e)} type="checkbox" value="Sneakers" />
          <label>Sneakers</label>
        </div>
        <div>
          <input onChange={(e)=>handlechange(e)} type="checkbox" value="Loafers" />
          <label>Loafers</label>
        </div>
        <div>
          <input  onChange={(e)=>handlechange(e)}type="checkbox" value="Canvas" />
          <label>Canvas</label>
        </div>
        <div>
          <input onChange={(e)=>handlechange(e)} type="checkbox" value="Boots" />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
