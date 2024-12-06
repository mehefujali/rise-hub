import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";



const AllCampign = () => {
      const [campaigns, setCampaigns] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/campaigns')
                  .then(res => res.json())
                  .then(data => {
                        setCampaigns(data)
                  })
      }, [])
      const handleSort = () => {
            const sortedCampaigns = [...campaigns].sort((a, b) => b.minimumAmount - a.minimumAmount);
            setCampaigns(sortedCampaigns);
      }


      return (
            <div className=" container mx-auto my-12 text-black dark:text-white  ">
                  <Tooltip anchorSelect=".sort-campaign" place="top">Sort by minimum amount</Tooltip>
                  <div>

                        <h1 className=" text-xl font-bold md:text-3xl xl:text-4xl text-center text-black dark:text-white">
                              Discover All Campaigns
                        </h1>
                        <p className=" text-black dark:text-white text-center mt-3 font-light md:text-lg">Explore all the campaigns hosted on our platform, from personal causes to creative ideas. Find a project that inspires you and make a difference.</p>
                  </div>
                  <div className=" divider">

                  </div>
                  <div className=" flex justify-end w-11/12 mx-auto md:w-full">
                        <button onClick={handleSort} className=" btn btn-sm md:btn-md bg-info text-black dark:text-white sort-campaign">Sort</button>
                  </div>
                  <div className="overflow-x-auto mt-11 ">
                        <table className="table">
                              {/* head */}
                              <thead className=" md:text-lg text-black dark:text-white">
                                    <tr>

                                          <th>Title</th>
                                          <th>Min donation</th>
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
                                                                              alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <h1 className=" text-xs md:text-lg">{campaign.title}</h1>
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>
                                                      <h1 className=" text-xs md:text-sm lg:text-lg">${campaign.minimumAmount}</h1>
                                                </td>
                                                <td ><h1 className="text-xs md:text-sm lg:text-lg hidden md:flex">{campaign.deadline}</h1></td>
                                                <th>
                                                      <Link to={`/campaigns/${campaign._id}`} className="btn btn-xs md:btn-md bg-info text-black dark:text-white">details</Link>
                                                </th>
                                          </tr>)
                                    }

                              </tbody>

                        </table>
                  </div>
            </div>
      );
};

export default AllCampign;