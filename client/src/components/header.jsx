import React from 'react';
import heroImage from '../assets/hero.png';
import Navigation from './navigation';


//bg-[#1e1919] 

function header() {
  return (
    <div className=' min-h-screen  bg-gradient-to-b from-violet-600/[.15] via-transparent' >
    

    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={heroImage}
          alt=""
         
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-2 mb-4 text-lg font-bold tracking-wider uppercase rounded-full bg-orange-500 border-white">
          Join the Revolution
          </p>
          <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Upload Your Content
           
            <span className="inline-block text-orange-800">
            Share Your Story, Ignite Engagement!
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Step into the forefront of digital empowerment, where you can effortlessly upload your content, share your narrative, and ignite meaningful engagement, all on our revolutionary platform.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center h-12 px-6 mr-6 font-semibold text-gray-800 transition-colors duration-200 hover:text-yellow-700 hover:border-2"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default header
//style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}