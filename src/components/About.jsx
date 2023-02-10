import React from 'react'

function About() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-50 via-purple-100 to-pink-200 relative'>
        <h1 className='text-[#7286D3] text-3xl md:text-6xl sm:text-5xl font-bold md:py-6 z-5 font-Poppins p-40'>About Us</h1>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[30rem] pt-[15em] top-0 left-0 right-0 absolute opacity-70'>
                 <path fill="#A7F0BA" d="M38.5,-45.3C47.4,-29.6,50.4,-14.8,51.6,1.2C52.7,17.1,52.1,34.3,43.2,43.7C34.3,53.1,17.1,54.8,0.4,54.5C-16.4,54.1,-32.8,51.6,-43.6,42.2C-54.4,32.8,-59.7,16.4,-57.7,2C-55.7,-12.4,-46.4,-24.8,-35.6,-40.5C-24.8,-56.2,-12.4,-75.2,1.2,-76.4C14.8,-77.6,29.6,-61,38.5,-45.3Z" transform="translate(100 100)" />
            </svg>

        </div>
        
        
  )
}

export default About