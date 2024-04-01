import React,{useState} from 'react';
import * as Tabs from "@radix-ui/react-tabs";

function dash() {

    const [selectedTab, setSelectedTab] = useState('');
    const [fileInputDisabled, setFileInputDisabled] = useState(false);
    const [error , setError] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null); 

    //tab items
    const tabItems = [
        {
          icon: (
            <img width="16" height="16" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-Images-image-and-image-files-those-icons-fill-those-icons-3.png" alt="external-Images-image-and-image-files-those-icons-fill-those-icons-3"/>
          ),
          name: "Images",
        },
        {
          icon: (
            <img width="16" height="16" src="https://img.icons8.com/ios/50/pdf--v1.png" alt="pdf--v1"/>
          ),
          name: "Pdf",
        },
        {
          icon: (
            <img width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/ms-word.png" alt="ms-word"/>
          ),
          name: "Office Files",
        },
       
      ];

      //check the tab 
      const handleTabChange = (tabName) => {
        setSelectedTab(tabName);
        setFileInputDisabled(false); // Enable file input when a tab is clicked
        setUploadedFile(null);
      };
    
     /*  const handleFileInputChange = (event) => {
        if (!selectedTab) {
          event.target.value = ''; // Clear the input value
          setFileInputDisabled(true); // Disable file input if no tab is selected
          setError('Please select the Relevant Tab first')
        }
        else{
            setError('')
            setFileInputDisabled(false); 
            }
      }; */

      //file upload method 
      const handleFileInputChange = (event) => {
        const file = event.target.files[0];
    
        if (!selectedTab) {
            event.target.value = ''; // Clear the input value
            setFileInputDisabled(true); // Disable file input if no tab is selected
            setError('Please select the Relevant Tab first');
        } else if (selectedTab === "Pdf" && file && file.type !== "application/pdf") {
            setError('Please select a valid PDF file');
        } else if (selectedTab === "Images" && file && !file.type.match(/^image\/(png|jpe?g|webp)$/)) {
            setError('Please select a valid image file (PNG, JPEG, or WebP)');
        } else if (selectedTab === "Office Files" && file && !file.type.match(/^application\/(msword|vnd.ms-powerpoint|vnd.ms-excel|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.openxmlformats-officedocument.presentationml.presentation|vnd.openxmlformats-officedocument.spreadsheetml.sheet)$/
        )) {
            setError('Please select a valid office file (Word, PowerPoint, Excel)');
        } else {
            setError('');
            setFileInputDisabled(false); // Enable file input
            setUploadedFile(file); // Update the uploaded file state
        }
    };
    


      


  return (
    <div>
        {/** search */}
        <form
            onSubmit={(e) => e.preventDefault()} 
            className=" mr-4 mx-auto mt-3 md:mt-0 max-w-xs  ">
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

        {/** chart boards */}
         <div class="p-4  border-gray-200  rounded-lg dark:border-gray-700 mt-3">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-48 rounded bg-gray-200 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-48  rounded bg-gray-200 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-48 rounded bg-gray-200 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      
    </div>

    {/** upload content */}
    <div class='flex justify-between mt-8 m-4 flex-wrap'>
  <h3 class="text-lg font-semibold mb-2">Upload Your Content</h3>
 
  <Tabs.Root
  className=""
  defaultValue='Images'
>
  <Tabs.List
    className="w-full flex items-center gap-x-3 overflow-x-auto text-sm"
    aria-label="Manage your account"
  >
    {tabItems.map((item, idx) => (
      <Tabs.Trigger
        key={idx}
        className={`group outline-none py-1.5 border-b-2 border-white text-gray-500 
        ${item.name === selectedTab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'}
        group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium`}
        value={item.name}
        onClick={() => handleTabChange(item.name)}
      >
        <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150">
          {item.icon}
          {item.name}
        </div>
      </Tabs.Trigger>
    ))}
    
  </Tabs.List>

         {/*  {tabItems.map((item, idx) => (
            <Tabs.Content key={idx} className="py-6" value={item.name}>
              <p className="text-xs leading-normal">
                This is <b>{item.name}</b> Tab
              </p>
            </Tabs.Content>
          ))} */}
        
        </Tabs.Root>
         
       
</div>
 
 {/** input field */}
{error && <p className="mt-3 text-red-600 text-center mx-auto">{error}</p>}
<div className="flex items-center justify-center h-52 mb-4 m-4 rounded border-2 border-dashed bg-gray-50 dark:bg-gray-800 mt-5">
  <div className="max-w-md h-40 rounded-lg flex items-center justify-center">
    {uploadedFile ? ( // Check if there is an uploaded file
      <div className="flex items-center">
        <input type="text" value={uploadedFile.name} readOnly />
        <button className="ml-2 text-red-500" onClick={() => setUploadedFile(null)}>Remove</button>
      </div>
    ) : (
      <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
        <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your file</span> or drag and drop your file here</p>
      </label>
    )}
     {!uploadedFile && (
      <input id="file" type="file" className="hidden" disabled={fileInputDisabled} onChange={handleFileInputChange} />
    )}
  </div>
</div>


      
 



    {/** recent  activity */}
    <div class='flex justify-between mt-8 m-4'>
  <h3 class="text-lg font-semibold mb-2">Recent Activities</h3>
  <button class='self-center underline text-indigo-800 hover:font-bold mb-2'>View all</button>
</div>

    <div class="flex items-center justify-center h-52 mb-4 m-4 rounded bg-gray-200 dark:bg-gray-800 mt-5">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>


    </div>
  )
}

export default dash
