import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleShoe = () => {
  const shoes=useSelector(state=>state.AppReducer.shoes)
  const {id}=useParams()
  const[data,setdata]=useState({})
  
  

 useEffect(()=>{
 const temp= shoes.find(shoe=>shoe.id===Number(id))
 
 setdata(temp)

  },[id,shoes])
  return (
    <div>
      <h2>{data?.name}</h2>
      <div>
        <img src={data?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{data?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
