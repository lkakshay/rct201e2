//Create ActionCreator functions here

import * as types from './actionTypes'
import axios from 'axios'


export  const  getLogin=(payload)=>(dispatch)=>{
   
     dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",payload)
    .then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:types.LOGIN_FAILURE}))
}
