import React from "react";
import { useNavigate } from 'react-router-dom'

const ShoeCard = ({data}) => {
  let shoeId = data.id;
  const navigate=useNavigate()

  const goto=()=>{
    navigate(`/shoes/${shoeId}`)
  }

  return (
    <div onClick={()=>goto()} data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={data?.image}alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{data?.name}</div>
        <div data-cy="shoe-category">{data?.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
