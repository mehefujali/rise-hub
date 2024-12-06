import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllCampign = () => {
      const [campaigns, setCampaigns] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/campaigns')
                  .then(res => res.json())
                  .then(data => {
                        setCampaigns(data)
                  })
      }, [])
      
      return (
            <div className=" container mx-auto my-20 text-black dark:text-white  ">
                  <div className="overflow-x-auto ">
                        <table className="table">
                              {/* head */}
                              <thead className=" md:text-lg">
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
                                                                              alt="Avatar Tailwind CSS Component" />
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