import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useSelector ,useDispatch} from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import { useSearchParams } from "react-router-dom";

const Shoes = () => {

  const  [searchParams,setSearchParams] = useSearchParams()
  console.log(searchParams.getAll('category'))
  
  const dispatch=useDispatch()
  const shoes=useSelector(state=>state.AppReducer.shoes)

  useEffect(()=>{
    dispatch(getShoes({params:{category:searchParams.getAll('category')}}))
  },[searchParams])
  return (
    <div>
      <Filter />
      <div>
        {shoes?.map((e)=>(
          <ShoeCard key={e.id}  data={e}/>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
