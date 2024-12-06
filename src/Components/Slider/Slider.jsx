import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
      return (
            <div className='container mx-auto overflow-hidden'>
                  <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                  >
                        <SwiperSlide className=' '>
                              <div className="bg-cover md:rounded-lg h-96" id='slider1'>
                                    <div className='flex justify-center items-center h-full w-full'>
                                          <div className='w-11/12 md:w-1/2 mx-auto space-y-4 text-center'>
                                                <h1 className='text-xl md:text-4xl font-bold text-white text-center'>
                                                      
                                                      Together, we can make your vision a reality!
                                                </h1>
                                                <p className='text-gray-200 text-sm md:text-md'>
                                                     {` Support creative ideas, life-changing causes, and innovative startups. Whether it's a personal need or a groundbreaking project, your contribution makes all the difference.`}
                                                </p>
                                                <button className='btn-sm md:btn-md btn bg-info text-white border-none'>
                                                      Start Your Campaign
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="bg-cover md:rounded-lg h-96" id='slider3'>
                                    <div className='flex justify-center items-center h-full w-full'>
                                          <div className='w-11/12 md:w-1/2 mx-auto space-y-4 text-center'>
                                                <h1 className='text-xl md:text-4xl font-bold text-white text-center'>
                                                      Make a difference with just a click!
                                                </h1>
                                                <p className='text-gray-200 text-sm md:text-md'>
                                                      Join thousands of backers who are transforming lives. Your small contribution can create a big impact. Be part of the change today!
                                                </p>
                                                <button className='btn-sm md:btn-md btn bg-info text-white border-none'>
                                                      Join Now
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="bg-cover md:rounded-lg h-96" id='slider2'>
                                    <div className='flex justify-center items-center h-full w-full'>
                                          <div className='w-11/12 md:w-1/2 mx-auto space-y-2 text-center'>
                                                <h1 className='text-xl md:text-4xl font-bold text-white text-center'>
                                                      Discover and support impactful projects!
                                                </h1>
                                                <p className='text-gray-200 text-sm md:text-md'>
                                                      Browse through diverse initiatives that are shaping the future. Find the projects that inspire you and contribute to their success.
                                                </p>
                                                <button className='btn-sm md:btn-md btn bg-info text-white border-none'>
                                                      Browse Projects
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </div>
      );
};

export default Slider;
