import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
      const {user} = useContext(authContext)
      if (user) {
            return children
      }
      return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes ={
      children:PropTypes.object.isRequired
}
export default PrivateRoute;