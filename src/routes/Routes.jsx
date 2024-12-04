import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                      path: '/',
                      element : <Navigate to={'/home'} replace ></Navigate>
                  },
                  {
                        path: 'home',
                        element: <Home></Home>
                  }
            ]
      }
])

export default Routes;