import React from 'react'
import healthyImg from '../assets/healthy-bg.jpg'

function Healthy() {
  return (
    <>
      <section>
        <div className='flex flex-col gap-6 py-28 justify-center items-center text-white'
          style={{ backgroundImage: `url(${healthyImg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='container mx-auto px-6 text-center'>
            <h1 className='text-4xl mb-4'>HEALTHY MIND, HEALTHY BODY</h1>
            <p className='text-center px-4 md:px-12 lg:px-24'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>
            <button className='border px-8 py-2 mt-6 hover:bg-red-500'>READ MORE</button>
          </div>
        </div>
      </section>

      

    </>
  )
}

export default Healthy