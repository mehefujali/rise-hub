import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AllCampign from "../Pages/AllCampign/AllCampign";
import AddNewCampign from "../Pages/AddNewCampign/AddNewCampign";
import CampaignDetails from "../Pages/CampaignDetails/CampaignDetails";
import MyCampign from "../Pages/MyCampign/MyCampign";
import UpdateCampaign from "../Pages/UpdateCampaign/UpdateCampaign";
import Error from "../Pages/Error/Error";
import MyDonated from "../Pages/MyDonated/MyDonated";
import PrivateRoute from "../Private/PrivateRoute";


const Routes = createBrowserRouter([
      {
            errorElement: <Error></Error>,
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Navigate to={'/home'} replace ></Navigate>
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
                        path: 'register',
                        element: <Register></Register>
                  },
                  {
                        path: 'allCampaigns',
                        element: <AllCampign></AllCampign>
                  },
                  {
                        path: 'addCampaign',
                        element: <AddNewCampign></AddNewCampign>
                  },
                  {
                        path: 'campaigns/:id',
                        element: <CampaignDetails></CampaignDetails>
                  },
                  {
                        path: 'myCampaign',
                        element: <MyCampign></MyCampign>
                  },
                  {
                        path: 'updateCampaign/:id',
                        loader: ({ params }) => fetch(`https://rise-hub-server.vercel.app/campaigns/${params.id}`),
                        element: <UpdateCampaign></UpdateCampaign>
                  },
                  {
                        path : 'mydonations',
                        element: <PrivateRoute><MyDonated></MyDonated></PrivateRoute>
                  }
            ]
      }
])

export default Routes;