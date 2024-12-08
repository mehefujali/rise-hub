import { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider";
import CampaignCard from "../../Components/CampaignCard/CampaignCard";
import FAQ from "../../Components/FAQ/FAQ";
import ContuctUs from "../../Components/ContuctUs/ContuctUs";
import { Typewriter } from "react-simple-typewriter";
import Loding from "../../Components/Loding/Loding";

const Home = () => {
      const [loding, setLoding] = useState(false)
      const [runninnCampaigns, setRunningCampaign] = useState([])
      useEffect(() => {
            setLoding(true)
            fetch("https://rise-hub-server.vercel.app/campaigns/runningCampaign")
                  .then(res => res.json())
                  .then(data => {setRunningCampaign(data)
                        setLoding(false)
                  })
      }, [])

      return (
            <div className=" mt-12">
                  <Slider></Slider>
                  <div className=" container mx-auto my-14">
                        <div className="my-12">
                              <h1 className=" divider flex  items-center gap-1 text-xl md:text-3xl lg:text-4xl font-bold text-center  text-black dark:text-white">  <div className=" w-7 h-7 rounded-full bg-info "></div>
                                    <Typewriter
                                          words={['Running Campaign', 'Support Dreams']}
                                          loop={true}
                                          cursor
                                          cursorStyle='_'
                                          typeSpeed={70}
                                          deleteSpeed={50}
                                          delaySpeed={3000}

                                    />
                              </h1>
                              <p className=" text-center font-light md:text-lg">Join us in a marathon to support underprivileged children’s education. Every step you take contributes to building a brighter future!s</p>
                        </div>
                        {
                              loding ? <Loding></Loding> : <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 2xl:w-full w-11/12 mx-auto">
                                    {
                                          runninnCampaigns.map(campaign => <CampaignCard campaign={campaign} key={campaign._id} linkId={campaign._id}></CampaignCard>)
                                    }
                              </div>
                        }
                  </div>
                  <div className=" container mx-auto my-10">
                        <div className=" divider mb-12"><h1 className=" text-2xl md:text-3xl xl:text-4xl">FAQ</h1></div>

                        <FAQ></FAQ>
                  </div>
                  <div className=" container mx-auto text-black dark:text-white">
                        <div className=" divider mt-20" >
                              <h1 className=" text-2xl font-bold md:text-3xl xl:text-4xl text-center ">Contact Us</h1>
                        </div>
                        <ContuctUs></ContuctUs>
                  </div>
            </div>
      );
};

export default Home;