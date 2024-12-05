import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loding from "../Components/Loding/Loding";

const PrivateRoute = ({children}) => {
      const {pathname} = useLocation()
      console.log(location);
      
      const {user,isLoding} = useContext(authContext)
      if(isLoding){
            return <Loding></Loding>
      }
      if (user) {
            return children
      }
      return <Navigate state={pathname} to={'/login'}></Navigate>
};
PrivateRoute.propTypes ={
      children:PropTypes.object.isRequired
}
export default PrivateRoute;