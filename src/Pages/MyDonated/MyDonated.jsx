import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";

import { Tooltip } from "react-tooltip";
import Loding from "../../Components/Loding/Loding";
// import PrivateRoute from "../../Private/PrivateRoute";
import CampaignCard from "../../Components/CampaignCard/CampaignCard";

const MyDonated = () => {
      const [loding, setLoding] = useState(false)
      const { user } = useContext(authContext)
      const [donated, setDonated] = useState([])

      useEffect(() => {
            setLoding(true)
            fetch(`https://rise-hub-server.vercel.app/donated/${user.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setDonated(data)
                        setLoding(false)
                  })
      }, [user.email])

      return (

            <div>
                  <div className=" container mx-auto my-12 text-black dark:text-white  ">
                        <Tooltip anchorSelect=".sort-campaign" place="top">Sort by minimum amount</Tooltip>
                        <div>

                              <h1 className=" text-xl font-bold md:text-3xl xl:text-4xl text-center text-black dark:text-white">
                                    My Donations
                              </h1>
                              <p className=" text-black dark:text-white text-center mt-3 font-light md:text-lg">{`Track the impact of your contributions in one place. This section showcases all the campaigns you've supported, along with donation details. Thank you for making a difference!`}</p>
                        </div>
                        <div className=" divider">

                        </div>

                        {
                              loding ? <Loding></Loding> : <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 2xl:w-full w-11/12 mx-auto">
                                    {
                                          donated.map(campaign => <CampaignCard campaign={campaign} key={campaign._id} linkId={campaign.campaignId}></CampaignCard>)
                                    }
                              </div>
                        }
                  </div>
            </div>

      );
};

export default MyDonated;