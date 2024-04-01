import React from 'react'

function contact() {
  return (
    <div>
        <main className="flex overflow-hidden">
            <div className="flex-1 hidden lg:block w-full">
                <img src="https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D08428570~hmac=bb508e2ebb39fc77144c16527924166b82aa334edc9234fa0e294a69b7ee49d0" className="w-full h-screen object-cover" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto border p-5 shadow-2xl bg-gray-100">

                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-800  ">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </h3>
                        <p className="mt-3">
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                   
                    <form
                       
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='Jhone'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='jhone@gmail.com'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-1">
                            
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full  pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                    
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='massage'></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-800 hover:bg-indigo-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                    
                </div>
            </div>
        </main>
      
    </div>
  )
}

export default contact
