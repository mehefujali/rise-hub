import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
      const {state} = useLocation()
      const [isSowPass, setSowPass] = useState(false)
      const {googleLogin,setUser,user,loginUser} = useContext(authContext)
      const handleGoogleLogin = () => {
            googleLogin()
            .then(res => {setUser(res.user)
                  toast.success('Login successfully')
            }
            )

      }
      const handleLogin = (e) => {
            e.preventDefault()
            const form = e.target 
            const email = form.email.value 
            const password = form.password.value 
            loginUser(email,password)
            .then(user => {setUser(user.user)
                  toast.success('Login successfully')
            })
            .catch(()=> {
                  toast.error('Incorrect username or password! Please try again.')
                  
                  
            })

      }
      
      
      if (user) {
          return  <Navigate to={state||'/'} replace></Navigate>
      }
      return (
            <div>
                  <div className=" h-[90vh] flex justify-center items-center">
                        <div className=" w-fit h-fit border-2 border-info  rounded-xl p-6 shadow-md">
                              <h1 className=" text-3xl font-bold text-center mb-7 dark:text-white ">Login for <span className="text-xl md:text-3xl font-bold text-info">
                                    RISE<span className="font-normal">hub</span>
                              </span></h1>
                              <form onSubmit={handleLogin} action="" className=" relative flex flex-col gap-3 w-60 md:w-96 mx-auto  h-fit  ">
                                    
                                    <input name="email" className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Your email" type="text" />
                                    
                                    <label htmlFor="" className=" relative w-full">
                                          <input name="password" className=" w-full input input-sm md:input-md focus:outline-none border-black dark:border-white" placeholder="Password" type={`${isSowPass ? 'text' : 'password'}`} />
                                          <div onClick={() => setSowPass(!isSowPass)} className=" absolute right-4  bottom-[7px] md:bottom-[14px] text-lg md:text-2xl cursor-pointer">
                                                {
                                                      isSowPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                }
                                          </div>
                                    </label>
                                    <input className=" btn btn-sm md:btn-md bg-info text-white" type="submit" name="" id="" value={'Login'} />

                              </form>
                              <div className=" divider">OR</div>
                              <button onClick={handleGoogleLogin} className="btn btn-sm md:btn-md w-full md:text-lg dark:text-white"><FaGoogle></FaGoogle>Login with google</button>
                              <p className=" text-center mt-3 dark:text-white">Dont have an account? <Link state={state} className=" text-info  underline" to={'/register'}>Register</Link></p>
                        </div>
                  </div>
            </div>
      );
};

export default Login;