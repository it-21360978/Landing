import { useState,useEffect } from "react";
import { motion} from "framer-motion"

function slider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);



  const testimonials = [
    {
        avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Martin escobar",
        title: "Founder of meta",
        quote: "It‘s great to have Dropbox on board, helping our high performing team work efficiently and seamlessly."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Angela stian",
        title: "Product designer",
        quote: "ShareUp has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post."
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Karim ahmed",
        title: "DevOp engineer",
        quote: "ShareUp increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionize our office culture. "
    },
]

//automatic changing testimonials
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative min-h-screen flex justify-center bg-gray-900">
    <div className=' m-auto  rounded-sm'>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 m-8 p-3">
      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-200 dark:text-white">What People Say About Us?</h2>
      
    </div>
    <section className="">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    
                    <ul>
                        {
                            testimonials.map((item, index) => (
                                currentTestimonial == index ? (
                                    <li key={index}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-400 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-300 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-300 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                    {/* <motion.figure
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-gray-800 text-xl font-semibold sm:text-2xl">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                <div className="mt-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    className="w-16 h-16 mx-auto rounded-full"
                    alt={testimonials[currentTestimonial].name}
                  />
                  <div className="mt-3">
                    <span className="block text-gray-800 font-semibold">
                      {testimonials[currentTestimonial].name}
                    </span>
                    <span className="block text-gray-600 text-sm mt-0.5">
                      {testimonials[currentTestimonial].title}
                    </span>
                  </div>
                </div>
              </motion.figure> */}
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, index) => (
                                <li key={index}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == index ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(index)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    
      
    </div>
    <div className="absolute inset-0 mr-0 ml-auto mt-auto  max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    <div className="absolute inset-0  max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </div>
  )
}

export default slider








   
