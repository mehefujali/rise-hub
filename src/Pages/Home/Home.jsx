import { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import CampaignCard from "../../Components/CampaignCard/CampaignCard";
import FAQ from "../../Components/FAQ/FAQ";

const Home = () => {
      const [runninnCampaigns, setRunningCampaign] = useState([])
      useEffect(() => {
            fetch("http://localhost:5000/campaigns/runningCampaign")
                  .then(res => res.json())
                  .then(data => setRunningCampaign(data))
      }, [])

      return (
            <div className=" mt-12">
                  <Slider></Slider>
                  <div className=" container mx-auto my-14">
                        <div className="my-12">
                        <h1 className=" divider flex  items-center gap-1 text-xl md:text-3xl lg:text-4xl font-bold text-center  text-black dark:text-white">  <div className=" w-7 h-7 rounded-full bg-info "></div>Running Campaign</h1>
                        <p className=" text-center font-light md:text-lg">Join us in a marathon to support underprivileged children’s education. Every step you take contributes to building a brighter future!s</p>
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-11/12 mx-auto">
                              {
                                    runninnCampaigns.map(campaign => <CampaignCard campaign={campaign} key={campaign._id}></CampaignCard>)
                              }
                        </div>
                  </div>
                  <div className=" container mx-auto my-10">
                        <div className=" divider mb-12"><h1 className=" text-2xl md:text-3xl xl:text-4xl">FAQ</h1></div>
                        
                        <FAQ></FAQ>
                  </div>
            </div>
      );
};

export default Home;