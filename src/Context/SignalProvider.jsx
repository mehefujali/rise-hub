import { createContext, useState } from "react";
import PropTypes from "prop-types";
 export const signalContext = createContext()
const SignalProvider = ({children}) => {
      const [signal , setSignal] = useState(null)
      return (
            <signalContext.Provider value={{signal,setSignal}}>
                  {children}
            </signalContext.Provider>
      );
};
SignalProvider.propTypes ={
      children:PropTypes.object.isRequired
}
export default SignalProvider;