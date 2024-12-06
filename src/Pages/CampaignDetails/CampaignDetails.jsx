import { useContext, useEffect, useState } from "react";
import { CiCalendarDate, CiDollar } from "react-icons/ci";
import { ScrollRestoration, useParams } from "react-router-dom";
import PrivateRoute from "../../Private/PrivateRoute";
import { authContext } from "../../Context/AuthProvider";

import swal from "sweetalert";
const CampaignDetails = () => {
      const { id } = useParams()
      const { user } = useContext(authContext)

      const [campaign, setCampaign] = useState({})
      const { thumbnail, title, campaignType, description, deadline, minimumAmount, _id } = campaign
      useEffect(() => {
            fetch(`http://localhost:5000/campaigns/${id}`)
                  .then(res => res.json())
                  .then(data => {
                        setCampaign(data)

                  })
      }, [id])

      const handleDonate = () => {
            const donateData = {
                  campaignId: _id,
                  email: user.email,
                  userName: user.displayName


            }
            fetch("http://localhost:5000/donated", {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(donateData)
            })     
                  .then(res => res.json())
                  .then(data => {
                       
                        if (data.insertedId) {
                              swal({
                                    title: "Good job!",
                                    text: "Donate success!",
                                    icon: "success",
                                    button: "Ok",
                                  });
                        }

                  })

      }
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
                                          <p className=" flex gap-1 items-center"><CiDollar className=" text-3xl"></CiDollar> {minimumAmount}</p>

                                          <button onClick={handleDonate} className=" btn w-full bg-info text-black dark:text-white">Donate</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </PrivateRoute>
      );
};

export default CampaignDetails;