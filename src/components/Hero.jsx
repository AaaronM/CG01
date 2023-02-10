import React from 'react'
import { motion } from "framer-motion"




function Hero() {
  return (
    <div className=' w-full h-screen bg-gradient-to-t from-gray-50 via-purple-100 to-pink-200 '>

       {/* -------------------- SVG's----------------- */}
       <motion.div
          
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 160, 270, 360, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{ duration: 10 }}
            
            
       >
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[20em] pt-[15em] top-0 left-0 right-0 absolute opacity-70 '>
                 <path fill="#A7F0BA" d="M38.5,-45.3C47.4,-29.6,50.4,-14.8,51.6,1.2C52.7,17.1,52.1,34.3,43.2,43.7C34.3,53.1,17.1,54.8,0.4,54.5C-16.4,54.1,-32.8,51.6,-43.6,42.2C-54.4,32.8,-59.7,16.4,-57.7,2C-55.7,-12.4,-46.4,-24.8,-35.6,-40.5C-24.8,-56.2,-12.4,-75.2,1.2,-76.4C14.8,-77.6,29.6,-61,38.5,-45.3Z" transform="translate(100 100)" />
            </svg>

            </motion.div>
            
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[40em] pt-[5em] pr-[30em] top-0 left-0 right-0 absolute opacity-60'>
                <path fill="#FFD6E8" d="M39.7,-66.8C48.6,-56.1,50.9,-40.2,57,-26.2C63.1,-12.2,73,-0.2,70.6,9.5C68.2,19.1,53.4,26.3,42.8,35.2C32.2,44,25.6,54.6,16.7,57.6C7.7,60.7,-3.8,56.3,-19.2,56C-34.7,55.8,-54.2,59.8,-63.3,52.9C-72.4,45.9,-71.2,28,-71.4,11.6C-71.7,-4.7,-73.3,-19.5,-65.3,-26.9C-57.4,-34.3,-39.8,-34.4,-27.3,-43.5C-14.8,-52.6,-7.4,-70.7,4,-77C15.4,-83.2,30.8,-77.6,39.7,-66.8Z" transform="translate(100 100)" />
            </svg>

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[30em] pt-[30em] pl-[10em] top-0 left-0 right-0 absolute opacity-80'>
                <path fill="#9EF0F0" d="M56.2,-1.9C56.2,26,28.1,52,1.1,52C-26,52,-52,26,-52,-1.9C-52,-29.9,-26,-59.7,1.1,-59.7C28.1,-59.7,56.2,-29.9,56.2,-1.9Z" transform="translate(100 100)" />
            </svg>

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[30em] pt-[10em] pr-[10em] top-0 left-0 right-0 absolute opacity-60'>
                <path fill="#FFD6E8" d="M24,-48.1C31.9,-37,39.7,-32.2,39.9,-25.3C40.1,-18.3,32.7,-9.1,28.7,-2.3C24.8,4.6,24.3,9.2,21.7,12C19.1,14.8,14.5,15.9,10.5,22C6.5,28,3.3,39.2,-3.2,44.7C-9.7,50.2,-19.3,50.2,-27,46.2C-34.6,42.3,-40.3,34.4,-40.5,26C-40.8,17.7,-35.7,8.8,-36.4,-0.4C-37.2,-9.7,-43.8,-19.4,-41.9,-25C-40,-30.6,-29.7,-32,-21.3,-42.9C-12.9,-53.7,-6.4,-74,0.8,-75.3C8,-76.7,16.1,-59.2,24,-48.1Z" transform="translate(100 100)" />
            </svg>

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=' w-[30em] pt-[20em] top-0 left-0 right-0 absolute opacity-60 top-0   '>
                <path fill="#F1C21B" d="M48.3,-27.8C52.1,-21.3,37.4,-4.1,26.3,14.6C15.1,33.4,7.6,53.7,-7.9,58.3C-23.3,62.8,-46.6,51.6,-58.7,32.3C-70.7,13,-71.5,-14.4,-59.9,-25.4C-48.2,-36.4,-24.1,-31,-0.9,-30.5C22.3,-29.9,44.5,-34.2,48.3,-27.8Z" transform="translate(100 100)" />
            </svg>
        


        <div className='text-center justify-center flex-col  pt-60 relative text-[#8EA7E9] '>
       <h1 className='text-[#7286D3] text-3xl md:text-6xl sm:text-5xl font-bold md:py-6 z-5 font-Poppins'>MakeUp as Unique as You</h1>
       <p className='md:text-4xl sm:text-3xl text-lg font-bold pt-5 z-10 font-Poppins'>Discover Our Products</p>
       </div>
    </div>
  )
}



export default Hero