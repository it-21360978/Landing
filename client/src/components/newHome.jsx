

function newHome() {
 

    
  return (
    <div className="bg-gray-900 py-10 lg:py-0">
     <section className=" lg:mt-0 mx-auto  pb-4 px-4 items-center lg:flex md:px-8 min-h-screen">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <p className="inline-block px-3 py-2 mb-4 text-lg font-bold tracking-wider uppercase rounded-full bg-indigo-200 border-white">
          Join the Revolution
          </p>
                    <h1 className="text-gray-200 font-bold text-4xl xl:text-5xl">
                    Upload Your Content ,Share Your Story,
                         <span className="text-indigo-600">  Ignite Engagement!</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Step into the forefront of digital empowerment, where you can effortlessly upload your content, share your narrative, and ignite meaningful engagement, all on our revolutionary platform.
                    </p>
                    <div>
                        <p className="text-gray-500 py-3">
                            Subscribe to our newsletter and we'll save your time
                        </p>
                        <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                            />
                            <button className="outline-none bg-purple-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                                Subscribe 
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/kgd4WhyS/container.png"  className="w-full mx-auto sm:w-10/12 shadow-xl shadow-gray-400  lg:w-full" />
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            
            </section>
      
    </div>
  )
}

export default newHome



