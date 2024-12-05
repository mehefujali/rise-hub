import { useContext } from 'react';
import './addcampign.css'
import { authContext } from '../../Context/AuthProvider';
import PrivateRoute from '../../Private/PrivateRoute';
import toast from 'react-hot-toast';

const AddNewCampign = () => {
      const { user } = useContext(authContext)
      const handleAddcampaign = (e) => {
            e.preventDefault()
            const form = e.target
            const thumbnail = form.photo.value
            const title = form.title.value
            const campaignType = form.campaigntype.value
            const description = form.description.value
            const deadline = form.deadline.value

            const newCampign = {
                  thumbnail,
                  title,
                  campaignType,
                  description,
                  deadline,
                  userEmail: user.email,
                  userName: user.displayName
            }
            fetch('http://localhost:5000/campaigns', {
                  method: "POST",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCampign)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if(data.insertedId){
                              toast.success("Campaign added successfully!")
                              form.reset()
                        }

                  })

      }
      return (
            <PrivateRoute>
                  <div className=" container mx-auto">
                        <div className=" mt-12">
                              <div>
                                    <h1 className=" text-xl font-bold md:text-3xl xl:text-4xl text-center text-black dark:text-white">Share Your Vision with the World</h1>
                                    <p className=" text-black dark:text-white text-center mt-3 font-light md:text-lg">Whether it’s a personal need, a startup, or a creative idea, share your story and gather support.</p>
                              </div>
                              <div className=" my-12 w-1/2  mx-auto " id='form-bg'>
                                    <div>
                                          <form onSubmit={handleAddcampaign} action="" className=" grid grid-cols-12 gap-6 text-black dark:text-white p-7 pt-96  border-2 rounded-lg ">
                                                <label htmlFor="" className=" col-span-6  ">
                                                      <p>Thumbnail</p>
                                                      <input type="text" placeholder="Image URL" name="photo" className=" input  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>Campaign title</p>
                                                      <input type="text" placeholder="Enter Campaign title" name="title" className=" input  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>Campaigntype</p>
                                                      <select name="campaigntype" className="input select w-full border-black dark:border-white focus:outline-none">
                                                            <option value="personal-issue">Personal Issue</option>
                                                            <option value="startup">Startup</option>
                                                            <option value="business">Business</option>
                                                            <option value="creative-ideas">Creative Ideas</option>
                                                      </select>
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>description</p>
                                                      <input type="text" placeholder="Enter description" name="description" className=" input  w-full   border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>Minimum donation amount</p>
                                                      <input type="number" placeholder="Enter amount" name="minamount" className=" input appearance-none  w-full  border-black dark:border-white focus:outline-none" id="numberinput" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>Deadline</p>
                                                      <input type="date" placeholder="Image URL" name="deadline" className=" input  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>User Email</p>
                                                      <input value={user?.email} disabled={true} type="text" placeholder="Image URL" name="" className=" input  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <label htmlFor="" className=" col-span-6 ">
                                                      <p>User Name</p>
                                                      <input value={user?.displayName} disabled={true} type="text" placeholder="Image URL" name="" className=" input  w-full  border-black dark:border-white focus:outline-none" id="" />
                                                </label>
                                                <button className=" text-white btn bg-info col-span-12">Add campaign</button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </PrivateRoute>
      );
};

export default AddNewCampign;