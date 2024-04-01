

function Cta4() {


    return (
        <div className='bg-gray-900'>
            <section className="relative mx-auto max-w-screen-xl px-4 md:px-8 py-8 md:py-20 min-h-screen flex justify-items-center">
                <div className="absolute top-0 left-0 w-full h-full"></div>
                <div className="relative z-10 gap-5 items-center lg:flex">
                    <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                        <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                            Earn More with Ease
                        </h3>
                        <p className="text-gray-400 leading-relaxed mt-5 md:text-xl">
                            Take control of your financial future and start earning with confidence. Join our community of earners and unlock endless possibilities.<span className=' font-bold'>  Don't miss out on this chance to turn your aspirations into reality – start earning now!</span>
                        </p>
                        <button
                            className="mt-8 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center hover:shadow-xl"
                            href="javascript:void()">
                            Try it out
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                        <img
                            
                            src="https://i.postimg.cc/dV5wYQNb/laptop.png"
                            alt="side image"
                            className="w-full lg:scale-125"
                        />
                    </div>
                </div>
                <div className="absolute inset-5 in m-auto mr-24 max-w-xl h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            </section>
        </div>
    );
}

export default Cta4;
