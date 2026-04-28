import React from 'react'
import fish from "../assets/icons/fish.png"
import ecg from "../assets/icons/ecg.png"
import reuse from "../assets/icons/reuse.png"
import env from "../assets/icons/env.png"
import cost from "../assets/icons/cost.png"

import barrel_black from "../assets/images/barrel_black.png"
import barrel_red from "../assets/images/barrel_red.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const ProductShowcase = () => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section id="showcase" className='h-[130vh] lg:h-[100vh] flex flex-col px-8 pb-8 lg:px-18 lg:pt-10 pt-8 md:mb-[50%] lg:mb-0 bg-gray-200 w-full'>
      <h2 className='font-semibold text-center text-xl text-black mb-8'>Product Features</h2>

      <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-8'>
        
        {/* Left Panel */}
        <div className='w-full lg:w-1/3 h-full flex flex-col items-center justify-center gap-2'>
          {/* Feature Tabs */}
          <div className='flex justify-center items-center w-full'>
            <div className='bg-white py-6 rounded-lg w-full px-6'>
              <p className='font-bold mb-2 text-left'>Energy Efficient</p>
              <p className='text-left'>Consumes much less electricity than the regular refrigerator.</p>
            </div>
            <div className='w-14 h-14 bg-white rounded-full ml-[-1.5em] flex justify-center items-center'>
              <img src={ecg} alt="" className='h-10 object-cover' />
            </div>
          </div>

          <div className='flex justify-center items-center w-full mt-12'>
            <div className='bg-white py-6 rounded-lg w-full px-6'>
              <p className='font-bold mb-2 text-left'>Reusability</p>
              <p className='text-left'>Reducing waste by reusability</p>
            </div>
            <div className='w-14 h-14 bg-white rounded-full ml-[-1.5em] flex justify-center items-center'>
              <img src={reuse} alt="" className='h-10 object-cover' />
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className='w-full lg:w-1/3'>
          <Slider {...settings} className='mx-auto'>
            <div>
              <img src={barrel_black} alt="" className='h-100 mx-auto' />
            </div>
            <div>
              <img src={barrel_black} alt="" className='mx-auto h-100' />
            </div>
          </Slider>
        </div>

        {/* Right Panel (Mirroring Left Panel) */}
        <div className='w-full lg:w-1/3 h-full flex flex-col items-center justify-center gap-2 '>
          <div className='flex justify-center items-center w-full'>
            <div className='w-14 h-14 bg-white rounded-full mr-[-1.5em] flex justify-center items-center z-10'>
              <img src={env} alt="" className='h-10 object-cover' />
            </div>
            <div className='bg-white py-6 rounded-lg w-full px-6'>
              <p className='font-bold mb-2 text-left'>Eco-Friendly</p>
              <p className='text-left'>Designed with sustainable materials and minimal environmental impact.</p>
            </div>
          </div>

          <div className='flex justify-center items-center w-full mt-12'>
            <div className='w-14 h-14 bg-white rounded-full mr-[-1.5em] flex justify-center items-center z-10'>
              <img src={cost} alt="" className='h-10 object-cover' />
            </div>
            <div className='bg-white py-6 rounded-lg w-full px-6'>
              <p className='font-bold mb-2 text-left'>Cost Effective</p>
              <p className='text-left'>Affordable and suitable for small-scale commercial use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
