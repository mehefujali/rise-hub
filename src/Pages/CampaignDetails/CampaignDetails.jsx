import { useContext, useEffect, useState } from "react";
import { CiCalendarDate, CiDollar } from "react-icons/ci";
import { ScrollRestoration, useParams } from "react-router-dom";
import PrivateRoute from "../../Private/PrivateRoute";
import { authContext } from "../../Context/AuthProvider";

import swal from "sweetalert";
import Loding from "../../Components/Loding/Loding";
const CampaignDetails = () => {
      const { id } = useParams()
      const { user } = useContext(authContext)
      const [loding, setLoding] = useState(false)

      const [campaign, setCampaign] = useState({})
      const { thumbnail, title, campaignType, description, deadline, minimumAmount, _id } = campaign
      useEffect(() => {
            setLoding(true)
            fetch(`https://rise-hub-server.vercel.app/campaigns/${id}`)
                  .then(res => res.json())
                  .then(data => {
                        setCampaign(data)
                        setLoding(false)
                  })
      }, [id])

      const handleDonate = () => {
            const deadlineDate = new Date(deadline)
            const curentDate = new Date()
            if (curentDate > deadlineDate) {
                  swal({
                        title: "Deadline is over!",
                        text: "Thank you for showing interest",
                        icon: "error",
                        button: "Ok",
                  })
                  return;
            }
            const donateData = {
                  campaignId: _id,
                  thumbnail,
                  title,
                  campaignType,
                  deadline,
                  email: user.email,
                  userName: user.displayName


            }
            fetch("https://rise-hub-server.vercel.app/donated", {
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
            <div>
                  {
                        loding ? <Loding></Loding> : <PrivateRoute>
                              <div className=" container mx-auto my-14 text-black dark:text-white">
                                    <ScrollRestoration></ScrollRestoration>
                                    <div className=" w-11/12 md:w-9/12 lg:w-2/4  mx-auto">
                                          <div className=" w-full rounded-xl overflow-hidden shadow-md shadow-gray-300 dark:shadow-gray-700 ">
                                                <div className=" w-full">
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
                  }
            </div>
      );
};

export default CampaignDetails;