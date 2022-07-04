import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLogin } from "../Redux/AuthReducer/action";

const Login = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  console.log(location)
  const auth=useSelector(state=>state.authReducer.data)
  console.log(auth)
  const navigate=useNavigate()

  const[data,setdata]=useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
})
  const signin=(e)=>{
     e.preventDefault()
    dispatch(getLogin(data))
    .then((res)=>navigate(location.state.location))
   
    
  }


  
  useEffect(()=>{
 
  },[])
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={(e)=>signin(e)}>
        <div>
          <label>User Email</label>
          <br />
          <input value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})} data-cy="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} data-cy="login-password" />
        </div>
        <button   type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
