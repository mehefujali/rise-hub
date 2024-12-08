

const ContuctUs = () => {
      return (
            <div>
                  <div className=" flex flex-col md:flex-row w-11/12  justify-between shadow-md shadow-gray-300 dark:shadow-gray-700 items-center border md:w-fit mx-auto md:gap-24 mb-20 mt-10 p-3   md:p-8 rounded-xl">
                        
                        <div>
                              <img className=" w-60 mx-auto" src="https://i.ibb.co/J5F0j7G/image.png" alt="" />
                        </div>
                        <div>
                              <div>
                                    <form onSubmit={(e)=>{e.preventDefault()}} action="" className=" flex flex-col  rounded-lg p-2 md:p-6 gap-4 w-full">
                                          <input placeholder="Your name" className=" input input-sm md:input-md  focus:outline-none border-black dark:border-white" type="text" name="" id="" />
                                          <input placeholder="Your email" className=" input input-sm md:input-md focus:outline-none border-black dark:border-white" type="text" name="" id="" />
                                          <textarea placeholder="Message" className=" border border-black dark:border-white textarea focus:outline-none resize-none" name="" id=""></textarea>
                                          <input className=" btn btn-sm md:btn-md bg-info text-black dark:text-white" type="submit" name="" id="" />
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ContuctUs;