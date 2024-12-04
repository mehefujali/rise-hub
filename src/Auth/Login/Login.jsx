import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
      const [isSowPass, setSowPass] = useState(false)
      return (
            <div>
                  <div className=" h-[90vh] flex justify-center items-center">
                        <div className=" w-fit h-fit border-2 border-info  rounded-xl p-6 shadow-md">
                              <h1 className=" text-3xl font-bold text-center mb-7 dark:text-white ">Login for <span className="text-xl md:text-3xl font-bold text-info">
                                    RISE<span className="font-normal">hub</span>
                              </span></h1>
                              <form action="" className=" relative flex flex-col gap-3 w-60 md:w-96 mx-auto  h-fit  ">
                                    
                                    <input className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Your email" type="text" />
                                    
                                    <label htmlFor="" className=" relative w-full">
                                          <input className=" w-full input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Password" type={`${isSowPass ? 'text' : 'password'}`} />
                                          <div onClick={() => setSowPass(!isSowPass)} className=" absolute right-4  bottom-[7px] md:bottom-[14px] text-lg md:text-2xl cursor-pointer">
                                                {
                                                      isSowPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                }
                                          </div>
                                    </label>
                                    <input className=" btn btn-sm md:btn-md bg-info text-white" type="submit" name="" id="" value={'Login'} />

                              </form>
                              <div className=" divider">OR</div>
                              <button className="btn btn-sm md:btn-md w-full md:text-lg dark:text-white"><FaGoogle></FaGoogle>Login with google</button>
                              <p className=" text-center mt-3 dark:text-white">Dont have an account? <Link className=" text-info  underline" to={'/regiser'}>Register</Link></p>
                        </div>
                  </div>
            </div>
      );
};

export default Login;