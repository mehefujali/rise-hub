import { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
      const [runninnCampaign, setRunningCampaign] = useState([])
      useEffect(() => {
            fetch("http://localhost:5000/campaigns")
                  .then(res => res.json())
                  .then(data => setRunningCampaign(data))
      }, [])

      return (
            <div className=" mt-12">
                  <Slider></Slider>
                  <div className=" container mx-auto">
                        <h1 className=" divider flex  items-center gap-1 text-xl md:text-3xl lg:text-4xl font-bold text-center my-12 text-black dark:text-white">  <div className=" w-7 h-7 rounded-full bg-info "></div>Running Campaign</h1>

                  </div>
            </div>
      );
};

export default Home;