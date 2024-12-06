
import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
                  <div className=" w-fit h-fit  flex justify-center flex-col gap-4 text-black dark:text-white">
                        <h1 className=" text-center text-9xl font-bold">404</h1>
                        <h2 className=" text-center font-light text-2xl">Page Not Found</h2>
                        <Link  className=" btn bg-info text-black dark:text-white" to={'/'}>Back to home</Link>
                  </div>
            </div>
      );
};

export default Error;