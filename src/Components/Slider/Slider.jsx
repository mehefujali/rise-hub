import { useEffect } from 'react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import './slider.css'
const Slider = () => {
      useEffect(() => {
            // Initialize Swiper after the component mounts
            new Swiper(".swiper-container", {
                  slidesPerView: 1,         // Shows 1 slide at a time
                  spaceBetween: 10,         // 10px space between slides
                  loop: true,   
                            // Infinite loop mode
                  autoplay: {
                        delay: 2500,            // Slide changes every 2.5 seconds
                  },
                  pagination: {
                        el: '.swiper-pagination', // Enable pagination
                        clickable: true,          // Makes pagination clickable
                  },
            });
      }, []);

      return (
            <div className=' container mx-auto overflow-hidden'>
                  <div className="swiper-container h-96 md:rounded-lg overflow-hidden">
                        <div className="swiper-wrapper ">
                              <div className="swiper-slide bg-cover md:rounded-lg" id='slider1'>
                                    <div className=' flex justify-center items-center h-full w-full'>
                                          <div className=' w-11/12 md:w-1/2 mx-auto space-y-3 text-center'>
                                                <h1 className=' text-xl md:text-4xl font-bold text-white text-center '>Together, we can make your vision a reality!</h1>
                                                <p className=' text-gray-200 text-sm md:text-md'>Support creative ideas, life-changing causes, and innovative startups. Whether it's a personal need or a groundbreaking project, your contribution makes all the difference.</p>
                                                <button className=' btn-sm md:btn-md btn bg-info text-white border-none'>Start Your Campaign</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="swiper-slide bg-cover md:rounded-lg" id='slider3'>
                                    <div className=' flex justify-center items-center h-full w-full'>
                                          <div className=' w-11/12 md:w-1/2 mx-auto space-y-3 text-center'>
                                                <h1 className=' text-xl md:text-4xl font-bold text-white text-center '>Make a difference with just a click!</h1>
                                                <p className=' text-gray-200 text-sm md:text-md'>Join thousands of backers who are transforming lives. Your small contribution can create a big impact. Be part of the change today!</p>
                                                <button className=' btn-sm md:btn-md btn bg-info text-white border-none'>Join Now</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="swiper-slide bg-cover md:rounded-lg" id='slider2'>
                                    <div className=' flex justify-center items-center h-full w-full'>
                                          <div className=' w-11/12 md:w-1/2 mx-auto space-y-2 text-center'>
                                                <h1 className=' text-xl md:text-4xl font-bold text-white text-center '>Together, we can make your vision a reality!</h1>
                                                <p className=' text-gray-200 text-sm md:text-md'>Support creative ideas, life-changing causes, and innovative startups. Whether it's a personal need or a groundbreaking project, your contribution makes all the difference.</p>
                                                <button className=' btn-sm md:btn-md btn bg-info text-white border-none'>Start Your Campaign</button>
                                          </div>
                                    </div>
                              </div>
                              
                        </div>
                        <div className="swiper-pagination"></div>
                  </div>
            </div>
      );
};

export default Slider;