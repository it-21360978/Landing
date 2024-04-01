import React from 'react';
import { Link } from 'react-router-dom';



function login() {
  return (
    <div>
        <div className=" relative font-[sans-serif] text-[#000] bg-gray-50">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
      <div className="max-md:text-center">
        <h1 className="lg:text-5xl text-5xl font-extrabold lg:leading-[55px] bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Welcome Back!</h1>
        <h2 className="lg:text-4xl text-4xl font-extrabold lg:leading-[55px]">
         Log In to Unlock Your World of Possibilities
        </h2>
       
        <p className="text-sm mt-10">Don't have an account? <Link to="/r" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
      </div>

      
      <form className="space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full ">
        <h3 className="text-3xl font-extrabold mb-8 max-md:text-center">
          Sign in
        </h3>
        <div>
          <input name="email" type="email" autoComplete="email" required className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600 border-gray-300" placeholder="Email address" />
        </div>
        <div>
          <input name="password" type="password" autoComplete="current-password" required className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600 border-gray-300" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="" className="text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="mt-10">
          <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
            Log in
          </button>
        </div>
        <p className="my-10 text-sm text-gray-400 text-center">or continue with</p>
        <div className="space-x-6 flex justify-center gap-8">
          <button type="button"
            className="border-none outline-none">
          <img width="40" height="40" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
          </button>
          <button type="button"
            className="border-none outline-none">
            <img width="40" height="40" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>
          </button>
          <button type="button"
            className="border-none outline-none">
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
          </button>
        </div>
      </form>
      

      <div className="absolute inset-0 mt-32 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default login
