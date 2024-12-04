import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";

const Routes = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  
            ]
      }
])

export default Routes;