import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { ScrollRestoration, useParams } from "react-router-dom";
import PrivateRoute from "../../Private/PrivateRoute";

const CampaignDetails = () => {
      const { id } = useParams()


      const [campaign, setCampaign] = useState({})
      const { thumbnail, title, campaignType, description, deadline, userEmail, userName } = campaign
      useEffect(() => {
            fetch(`http://localhost:5000/campaigns/${id}`)
                  .then(res => res.json())
                  .then(data => {
                        setCampaign(data)

                  })
      }, [id])
      return (
            <PrivateRoute>
                  <div className=" container mx-auto my-14 text-black dark:text-white">
                        <ScrollRestoration></ScrollRestoration>
                        <div className=" w-11/12 md:w-9/12 lg:w-2/4  mx-auto">
                              <div className=" w-fit rounded-xl overflow-hidden shadow-md shadow-gray-300 dark:shadow-gray-700 ">
                                    <div>
                                          <img className=" object-cover w-full" src={thumbnail} alt="" />
                                    </div>
                                    <div className=" mt-6 p-8 space-y-2">
                                          <h1 className=" text-xl font-bold md:text-2xl lg:text-3xl ">{title}</h1>
                                          <div className=" flex justify-between">
                                                <p className=" badge border-info">{campaignType}</p>
                                                <p className=" flex items-center gap-1"><CiCalendarDate className=" text-xl"></CiCalendarDate>{deadline}</p>
                                          </div>
                                          <p>{description}</p>
                                          <p>{userName}</p>
                                          <p>{userEmail}</p>
                                          <button className=" btn w-full bg-info text-black dark:text-white">Donate</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </PrivateRoute>
      );
};

export default CampaignDetails;