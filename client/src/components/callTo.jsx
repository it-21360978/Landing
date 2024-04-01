import React from 'react';
import BoostImage from '../assets/BOOST.svg'

function callTo() {

  const features = [
    {
        icon:
        <svg class="bi bi-file-earmark-lock-fill" fill="currentColor" height="30" viewBox="0 0 16 16" width="512px" xmlns="http://www.w3.org/2000/svg"><path d="M7 7a1 1 0 0 1 2 0v1H7V7zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 12h-3a.637.637 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z"/><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z"/></svg>,
        title: "Store and protect your files",
        desc: "Get the storage you and your teams need with security features like file recovery, password protection, watermarking, and viewer history."
    },
    {
        icon:
        <svg class="feather feather-link" fill="none" height="30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="512px" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
        title: "Stay in control of shared content",
        desc: "Trackable links show when someone has opened a shared file and how long they’ve engaged with it. Plus, you can turn off access for any individual at any time without affecting others’s permissions."
    },
    {
        icon:
       <svg enable-background="new 0 0 512 512" fill="currentColor" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M332.814,128.443c18.344-3.174,36.689-6.349,55.644-9.63c-3.584,18.716-7.116,37.157-10.763,56.203   c-3.383-3.377-6.688-6.333-9.561-9.667c-2.013-2.333-3.262-1.854-5.156,0.014c-11.943,11.787-23.961,23.5-35.968,35.225   c-21.427,20.927-42.893,41.818-64.249,62.818c-1.783,1.753-2.672,1.471-4.26-0.055c-8.962-8.601-18.065-17.057-26.999-25.686   c-1.742-1.679-2.663-1.808-4.456,0.002c-19.619,19.758-39.359,39.395-58.979,59.146c-1.789,1.81-2.733,2.113-4.661,0.125   c-5.69-5.871-11.6-11.533-17.511-17.187c-1.306-1.251-1.302-1.938-0.009-3.221c27.524-27.321,55.029-54.664,82.438-82.102   c1.946-1.946,2.805-0.747,4.012,0.394c8.873,8.386,17.778,16.743,26.56,25.225c1.445,1.399,2.092,1.29,3.475-0.046   c24.447-23.598,48.961-47.132,73.46-70.678c2.144-2.058,4.199-4.23,6.504-6.094c2.063-1.669,1.683-2.779-0.089-4.355   c-3.456-3.081-6.744-6.351-10.098-9.542C332.369,129.038,332.595,128.742,332.814,128.443z"/><rect height="66.678" width="68.539" x="141.113" y="315.244"/><rect height="98.111" width="68.542" x="229.854" y="283.811"/><rect height="140.924" width="68.541" x="318.274" y="241.075"/></g></svg>,
        title: "Manage your business",
        desc: "Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds."
    },
]



  return (
    <div>
        

    <section className="relative py-28 bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                    What Can You Do with ShareUp?
                    </h3>
                    <p className="mt-3">
                    Easy to use, reliable, private, and secure. It’s no wonder ShareUp is the choice for storing and sharing your most important files.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
  
      
    </div>
  )
}

export default callTo

