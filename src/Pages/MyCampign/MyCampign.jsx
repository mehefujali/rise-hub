
import PrivateRoute from "../../Private/PrivateRoute";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";


const MyCampign = () => {
      const { user } = useContext(authContext)
      const [campaigns, setCampaign] = useState([])
      useEffect(() => {
            fetch(`http://localhost:5000/mycampaigns/${user?.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setCampaign(data)
                  })
      }, [user?.email])
      return (
            <PrivateRoute>
                  <Tooltip anchorSelect=".update-campaign" place="left">
                        Update campaign
                  </Tooltip>
                  <Tooltip anchorSelect=".delete-campaign" place="left">
                        Delete campaign
                  </Tooltip>
                  <div>
                        <div className=" container mx-auto my-20 text-black dark:text-white  ">
                              <div className="overflow-x-auto ">
                                    <table className="table">
                                          {/* head */}
                                          <thead className=" md:text-lg text-black dark:text-white">
                                                <tr>

                                                      <th>Title</th>
                                                      <th>Campaign type</th>
                                                      <th className=" hidden md:flex">Expire date</th>
                                                      <th></th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {/* row 1 */}
                                                {
                                                      campaigns.map(campaign => <tr key={campaign._id} className=" items-center">

                                                            <td>
                                                                  <div className="flex items-center gap-3">
                                                                        <div className="avatar rounded">
                                                                              <div className="mask rounded  md:h-24 md:w-40 h-10 w-10 ">
                                                                                    <img
                                                                                          src={campaign.thumbnail}
                                                                                          alt={campaign.title} />
                                                                              </div>
                                                                        </div>
                                                                        <div>
                                                                              <h1 className=" text-xs md:text-lg">{campaign.title}</h1>
                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td>
                                                                  <h1 className=" text-xs md:text-sm lg:text-lg">{campaign.campaignType}</h1>
                                                            </td>
                                                            <td ><h1 className="text-xs md:text-sm lg:text-lg hidden md:flex">{campaign.deadline}</h1></td>
                                                            <th>
                                                                  <div className=" text-2xl flex flex-col h-full justify-between gap-4">
                                                                        <Link to={`/updateCampaign/${campaign._id}`} className="update-campaign btn btn-sm md:btn-md text-sm btn-circle md:text-lg text-black dark:text-white"><FaEdit></FaEdit></Link>
                                                                        <Link className=" text-red-500 btn btn-sm delete-campaign md:btn-md text-sm btn-circle md:text-xl"><MdDeleteOutline></MdDeleteOutline></Link>
                                                                  </div>
                                                            </th>
                                                      </tr>)
                                                }

                                          </tbody>

                                    </table>
                              </div>
                        </div>
                  </div>
            </PrivateRoute>
      );
};

export default MyCampign;