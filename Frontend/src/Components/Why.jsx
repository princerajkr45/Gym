import React from 'react'
import whyImg from '../assets/us-bg.jpg'
import u1 from '../assets/u-1.png'
import u2 from '../assets/u-2.png'
import u3 from '../assets/u-3.png'
import u4 from '../assets/u-4.png'
import Navbar from './Navbar'


function Why() {
    return (
        <>
       
            <section className='py-12 text-white bg-cover bg-fixed' style={{ backgroundImage: `url(${whyImg})` }}>
                <div className='container mx-auto px-6'>
                    <h1 className='text-center text-4xl mb-12'>WHY CHOOSE US</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='flex flex-col items-center justify-center bg-opacity-80  bg-gray-800 rounded-lg p-6'>
                            <div className='flex justify-center pb-3'>
                                <img src={u1} alt="Quality Equipment" ></img>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl mb-3'>QUALITY EQUIPMENT</h2>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-opacity-80  bg-gray-800 rounded-lg p-6'>
                            <div className='flex justify-center pb-3'>
                                <img src={u4} alt="Nutrition" ></img>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl mb-3'>NUTRITION</h2>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-opacity-80  bg-gray-800 rounded-lg p-6'>
                            <div className='flex justify-center pb-3'>
                                <img src={u2} alt="Healthy Diet Plan" ></img>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl mb-3'>HEALTHY DIET PLAN</h2>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-opacity-80  bg-gray-800 rounded-lg p-6'>
                            <div className='flex justify-center pb-3'>
                                <img src={u3} alt="Sport Training" ></img>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl mb-3'>SPORT TRAINING</h2>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Why