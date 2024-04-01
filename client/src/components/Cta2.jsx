import React from 'react'

function Cta2() {
  return (
    <div >
      <section className="py-28" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}>
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </h3>
                    <p className="mt-3 text-gray-600">
                    let's build a future filled with endless opportunities and sustainable growth. Don't hesitate – seize the moment and build with us today.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <button  className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </button>
                    <button className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Cta2;