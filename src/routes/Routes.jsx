import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AllCampign from "../Pages/AllCampign/AllCampign";
import AddNewCampign from "../Pages/AddNewCampign/AddNewCampign";
import CampaignDetails from "../Pages/CampaignDetails/CampaignDetails";
import MyCampign from "../Pages/MyCampign/MyCampign";


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
                        path : 'allCampaigns',
                        element: <AllCampign></AllCampign>
                  },
                  {
                        path: 'addCampaign',
                        element: <AddNewCampign></AddNewCampign>
                  },
                  {
                        path : 'campaigns/:id',
                        element: <CampaignDetails></CampaignDetails>
                  },
                  {
                        path : 'myCampaign',
                        element: <MyCampign></MyCampign>
                  }
            ]
      }
])

export default Routes;