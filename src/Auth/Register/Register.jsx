import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
      const {state} = useLocation()

      const {user} = useContext(authContext)
      const { emailRegiser, setUser, updateUser } = useContext(authContext)
      const [isSowPass, setSowPass] = useState(false)
      const handleEmailRegister = (e) => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value
            const email = form.email.value
            const photo = form.photo.value
            const password = form.password.value
            emailRegiser(email, password)
                  .then((res) => {
                        setUser(res.user)
                        updateUser({ displayName: name, photoURL: photo })
                              .then(() => {
                                    toast.success('Account created')
                                    
                                    setUser({ displayName: name, photoURL: photo })

                              })
                        
                  })
      }
      if (user) {
            return <Navigate to={state || '/'} replace></Navigate>
      }
      return (
            <div>
                  <div>
                        <div className=" h-[90vh] flex justify-center items-center">
                              <div className=" w-fit h-fit border-2 border-info  rounded-xl p-6 shadow-md">
                                    <h1 className=" text-3xl font-bold text-center mb-7 dark:text-white ">Register for <span className="text-xl md:text-3xl font-bold text-info">
                                          RISE<span className="font-normal">hub</span>
                                    </span></h1>
                                    <form onSubmit={handleEmailRegister} className=" relative flex flex-col gap-3 w-60 md:w-96 mx-auto  h-fit  ">
                                          <input name="name" className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Your name" type="text" />
                                          <input name="email" className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Your email" type="text" />
                                          <input name="photo" className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Photo URL" type="text" />
                                          <label htmlFor="" className=" relative w-full">
                                                <input name="password" className=" w-full input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Password" type={`${isSowPass ? 'text' : 'password'}`} />
                                                <div onClick={() => setSowPass(!isSowPass)} className=" absolute right-4  bottom-[7px] md:bottom-[14px] text-lg md:text-2xl cursor-pointer">
                                                      {
                                                            isSowPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                      }
                                                </div>
                                          </label>
                                          <input className=" btn btn-sm md:btn-md bg-info text-white" type="submit" name="" id="" value={'Create account'} />

                                    </form>
                                    <div className=" divider">OR</div>
                                    <button className="btn btn-sm md:btn-md w-full md:text-lg dark:text-white"><FaGoogle></FaGoogle>Login with google</button>
                                    <p className=" text-center mt-3 dark:text-white">Already have an account? <Link className=" text-info  underline" to={'/login'}>Login</Link></p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;