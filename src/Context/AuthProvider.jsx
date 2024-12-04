import { createContext } from "react";
import PropTypes from "prop-types";
export const authContext = createContext()
const AuthProvider = ({ children }) => {

      const auth ={
         name : 'kiron'
      }

      return (
            <authContext.Provider value={auth}>
                  {children}
            </authContext.Provider>
      );
};

export default AuthProvider;

AuthProvider.propTypes ={
      children: PropTypes.object.isRequired
}