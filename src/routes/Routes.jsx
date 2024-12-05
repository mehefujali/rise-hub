import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AllCampign from "../Pages/AllCampign/AllCampign";


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
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path:'register',
                        element: <Register></Register>
                  },
                  {
                        path : 'allCampaign',
                        element: <AllCampign></AllCampign>
                  }
            ]
      }
])

export default Routes;