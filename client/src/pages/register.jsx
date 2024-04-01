import React,{useState} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function register() {
  const [usernameFilled, setUsernameFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);


  const handleUsernameChange = (event) => {
    setUsernameFilled(event.target.value !== '');
  };

  const handleEmailChange = (event) => {
    setEmailFilled(event.target.value !== '');
  };

  const handleTermsAcceptance = (event) => {
    setTermsAccepted(event.target.checked);
  };

  return (
    <div className=' relative '>
        <div className="font-[sans-serif] min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-gray-50">
  <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
    <div>
      <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] mb-10 lg:mb-20">
      Join Our Community
      </h2>
     
     
    
    
      <div class="space-y-5">
              <div class="flex gap-4">
                <motion.svg xmlns="http://www.w3.org/2000/svg" class={`sm:w-7 sm:h-7 w-5 h-5 ${usernameFilled ? ' bg-orange-600' : 'bg-[#333]'} fill-white  rounded-full p-1 shrink-0" viewBox="0 0 24 24`}
                animate={usernameFilled ? {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                } : {}}
                transition={{ duration: 5, loop: Infinity}}
                
                
                >
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </motion.svg>
                <h4 class="sm:text-lg text-base font-semibold">Create Your Account</h4>
              </div>
              <div class="flex gap-4">
                <motion.svg xmlns="http://www.w3.org/2000/svg" class={`sm:w-7 sm:h-7 w-5 h-5 ${emailFilled ? ' bg-orange-600' : 'bg-[#333]'} fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24`}
                animate={emailFilled ? {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                } : {}}
                transition={{ duration: 5, loop: Infinity}}>
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </motion.svg>
                <h4 class="sm:text-lg text-base font-semibold">Simple & Secure Registration</h4>
              </div>
              <div class="flex gap-4">
                <motion.svg xmlns="http://www.w3.org/2000/svg" class={`sm:w-7 sm:h-7 w-5 h-5 ${termsAccepted? ' bg-orange-600' : 'bg-[#333]'} fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24`}
                animate={termsAccepted ? {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                } : {}}
                transition={{ duration: 5, loop: Infinity}}>
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </motion.svg>
                <h4 class="sm:text-lg text-base font-semibold">Terms and Conditions Agreement</h4>
              </div>
            </div>

            <p className="text-sm mt-10">Already have an account <Link to="/l" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
    </div>





    <form className=" md:max-w-lg md:ml-auto w-full">
      <div className="mb-12">
        <h3 className="text-3xl font-extrabold">Register Now</h3>
      </div>
      <div>
        <label className="text-xs block mb-2">Full Name</label>
        <div className="relative flex items-center">
          <input name="name" onChange={handleUsernameChange} type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none rounded-md" placeholder="jhon doe" />
          <img width="16" height="16" src="https://img.icons8.com/small/16/gender-neutral-user.png" alt="gender-neutral-user" className=' absolute right-2'/>
        </div>
      </div>
      <div className="mt-10">
        <label className="text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input name="email" type="text" onChange={handleEmailChange} required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none rounded-md" placeholder="jhonedoe@gmail.com" />
          <img width="16" height="16" src="https://img.icons8.com/cotton/16/secured-letter--v3.png" alt="secured-letter--v3" className=' absolute right-2'/>
        </div>
      </div>
      <div className="mt-10">
        <label className="text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
          <input name="password" type="password"  required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none rounded-md" placeholder="*********" />
          <img width="16" height="16" src="https://img.icons8.com/laces/16/visible.png" alt="visible" className=' absolute right-2'/>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <input id="remember-me" name="remember-me" type="checkbox"onChange={handleTermsAcceptance} className="h-4 w-4 shrink-0 rounded" />
        <label for="remember-me" className="ml-3 block text-sm">
          I accept the <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
        </label>
      </div>
      <div className="mt-12">
        <button type="button" className="w-full py-2.5 px-8 text-sm font-semibold rounded text-white bg-indigo-800 hover:bg-indigo-900 shadow-lg focus:outline-none transition-all">
          Register
        </button>
      </div>
      <p className="my-6 text-sm text-gray-400 text-center">or continue with</p>
        <div className="space-x-6 flex justify-center gap-10">
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
  </div>
</div>

<div className="absolute inset-0 mt-32 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </div>
  )
}

export default register
