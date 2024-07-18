import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t3 from '../assets/t3.jpg'
import trainnerImg from '../assets/trainer-bg.jpg'
import Navbar from './Navbar';



function Trainner() {
  return (
    <>

      <section className='py-24 text-white bg-cover bg-fixed' style={{ backgroundImage: `url(${trainnerImg})` }}>
        <h1 className='text-center text-4xl'>OUR GYM TRAINERS</h1>
        <div className='flex flex-wrap justify-center gap-12 py-16'>
          <div className='relative flex flex-col gap-3 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h2 className='text-2xl'>Smirth Jon</h2>
            <div className='relative'>
              <img src={t1} className='rounded-2xl w-full' alt="Trainer Smirth Jon"></img>
              <div className='absolute inset-x-0 -bottom-5 flex gap-8 items-center justify-center text-2xl w-[200px] h-[50px] bg-white text-red-600 rounded-full mx-auto'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className='relative flex flex-col gap-3 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h2 className='text-2xl'>Jean Doe</h2>
            <div className='relative'>
              <img src={t2} className='rounded-2xl w-full' alt="Trainer Jean Doe"></img>
              <div className='absolute inset-x-0 -bottom-5 flex gap-8 items-center justify-center text-2xl w-[200px] h-[50px] bg-white text-red-600 rounded-full mx-auto'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className='relative flex flex-col gap-3 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h2 className='text-2xl'>Alex Den</h2>
            <div className='relative'>
              <img src={t3} className='rounded-2xl w-full' alt="Trainer Alex Den"></img>
              <div className='absolute inset-x-0 -bottom-5 flex gap-8 items-center justify-center text-2xl w-[200px] h-[50px] bg-white text-red-600 rounded-full mx-auto'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Trainner