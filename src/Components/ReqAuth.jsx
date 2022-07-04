
import { useSelector } from "react-redux";
import { Navigate ,useLocation} from "react-router-dom";
//Create the HOC for protected Routes


const ReqAuth = ({children}) => {
const data=useSelector(state=>state.authReducer.data.isAuth)
const location=useLocation()

if(!data){
    return<Navigate state={{location}} to={"/login"} replace/>
}
else{
    return children
}

 
    
    
  
};

export default ReqAuth;
