import { useContext } from "react";
import swal from "sweetalert";
import { authContext } from "../../Context/AuthProvider";
import PrivateRoute from "../../Private/PrivateRoute";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const UpdateCampaign = () => {
      const { user } = useContext(authContext)
      const campaign = useLoaderData()


      const { thumbnail, title, campaignType, description, deadline, minimumAmount, _id } = campaign
      const handleUpdatecampaign = (e) => {
            e.preventDefault()
            const form = e.target
            const thumbnail = form.photo.value
            const title = form.title.value
            const minimumAmount = form.minamount.value
            const campaignType = form.campaigntype.value
            const description = form.description.value
            const deadline = form.deadline.value

            const newCampign = {
                  thumbnail,
                  title,
                  minimumAmount,
                  campaignType,
                  description,
                  deadline,
                  userEmail: user.email,
                  userName: user.displayName
            }
            console.log(newCampign);
            
            fetch(`https://rise-hub-server.vercel.app/campaigns/${_id}`, {
                  method: "PUT",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCampign)
            })
                  .then(res => res.json())
                  .then(data => {
                    
                    
                        if (data.modifiedCount) {
                              swal({
                                    title: "Good job!",
                                    text: "Campaign Update successfully!",
                                    icon: "success",
                                    button: "Ok",
                              });
                             
                        }

                  })

      }
      return (
            <div>
                  <PrivateRoute>
                        <ScrollRestoration></ScrollRestoration>
                        <div className=" container mx-auto">
                              <div className=" mt-12">
                                    <div>
                                          <h1 className=" text-xl font-bold md:text-3xl xl:text-4xl text-center text-black dark:text-white">
                                          <Typewriter
                                                            words={['Manage Your Campaign']}
                                                            loop={1}
                                                            cursor
                                                            cursorStyle='_'
                                                            typeSpeed={70}
                                                            deleteSpeed={50}
                                                            delaySpeed={1000}

                                                      />
                                                </h1>
                                          <p className=" text-black dark:text-white text-center mt-3 font-light md:text-lg">Take control of your campaign by editing and managing details with ease.</p>
                                    </div>
                                    <div className=" my-12 w-11/12 lg:w-8/12 xl:w-1/2  mx-auto " id='form-bg'>
                                          <div>
                                                <form onSubmit={handleUpdatecampaign} action="" className=" grid grid-cols-12 gap-3 md:gap-6 text-black dark:text-white p-7 pt-96  border-2 rounded-lg ">
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12 ">
                                                            <p>Thumbnail</p>
                                                            <input defaultValue={thumbnail} type="text" placeholder="Image URL" name="photo" className=" input  input-sm md:input-md w-full  border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>Campaign title</p>
                                                            <input defaultValue={title} type="text" placeholder="Enter Campaign title" name="title" className=" input  input-sm md:input-md w-full  border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>Campaigntype</p>
                                                            <select defaultValue={campaignType} name="campaigntype" className="input  input-sm md:input-md select w-full border-black dark:border-white focus:outline-none">
                                                                  <option value="personal-issue">Personal Issue</option>
                                                                  <option value="startup">Startup</option>
                                                                  <option value="business">Business</option>
                                                                  <option value="creative-ideas">Creative Ideas</option>
                                                            </select>
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>description</p>
                                                            <input defaultValue={description} type="text" placeholder="Enter description" name="description" className=" input input-sm md:input-md  w-full   border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>Minimum donation amount</p>
                                                            <input defaultValue={minimumAmount} type="number" placeholder="Enter amount" name="minamount" className=" input input-sm md:input-md appearance-none  w-full  border-black dark:border-white focus:outline-none" id="numberinput" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>Deadline</p>
                                                            <input defaultValue={deadline} type="date" placeholder="Image URL" name="deadline" className=" input input-sm md:input-md  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>User Email</p>
                                                            <input value={user?.email} disabled={true} type="text" placeholder="Image URL" name="" className=" input  input-sm md:input-md w-full  border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <label htmlFor="" className=" md:col-span-6  col-span-12">
                                                            <p>User Name</p>
                                                            <input value={user?.displayName} disabled={true} type="text" placeholder="Image URL" name="" className=" input  input-sm md:input-md w-full  border-black dark:border-white focus:outline-none" id="" />
                                                      </label>
                                                      <button className=" text-white btn bg-info col-span-12">Add campaign</button>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </PrivateRoute>
            </div>
      );
};

export default UpdateCampaign;