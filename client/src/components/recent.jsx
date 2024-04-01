import React from 'react'

function recent() {

    const members = [
        {
            avatar: "https://img.icons8.com/color/48/ms-word.png" ,
            name: "Word File ",
            email: "2024/02/10"
        }, {
            avatar: "https://img.icons8.com/color/48/image.png",
            name: "Image",
            email: "2024/01/21"
        }, {
            avatar: "https://img.icons8.com/fluency/48/microsoft-excel-2019.png",
            name: "MAths Excel sheet",
            email: "2024/01/18"
        }, {
            avatar: "https://img.icons8.com/office/48/pdf.png",
            name: "World Hr pdf",
            email: "2024/01/10"
        },
    ]




  return (
    <div>
        <div className=" mx-auto px-4">
        <div className="items-start justify-between sm:flex">
            <div>
                <h4 className="text-gray-800 text-2xl font-semibold">Your recent Activities</h4>
                <p className="mt-2 text-gray-600 text-base sm:text-sm">You can access to manage the recent Files</p>
            </div>

            {/** search */}

            <form
            onSubmit={(e) => e.preventDefault()} 
            className=" mr-0 mx-auto mt-3 md:mt-0  ">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-12 pr-4 text-gray-700 border border-gray-200 rounded-sm outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>


            {/**button */}
         {/*    <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                New member
            </a> */}
        </div>

        {/** list */}
        <ul className="mt-12 divide-y">
            {
                members.map((item, idx) => (
                    <li key={idx} className="py-5 flex items-start justify-between">
                        <div className="flex gap-3">
                            <img src={item.avatar} className="flex-none w-12 h-12 rounded-full" />
                            <div>
                                <span className="block text-sm text-gray-700 font-semibold">{item.name}</span>
                                <span className="block text-sm text-gray-600">{item.email}</span>
                            </div>
                        </div>
                        <button href="javascript:void(0)" className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 border-red-700 bg-white hover:bg-red-500 hover:text-white">Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
      
    </div>
  )
}

export default recent
