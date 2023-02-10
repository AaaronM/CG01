import React from 'react'

function Products() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-200 relative'>
        
        <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16 ">
        <div className='flex md:flex-row md:gap-6 md:pr-10'>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-purple-300"></div>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-yellow-300"></div>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-pink-300"></div>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-purple-300"></div>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-yellow-300"></div>
    <div className="md:w-24 md:h-24 md:rounded-lg bg-pink-300"></div>
    </div>

  <div className="relative w-full max-w-lg md:items-end">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>


    <div className="m-8 relative space-y-4">
       
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">SkinCare
        <div className="flex-1">
        </div>
        <div>
          <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"> Makeup
        <div className="flex-1">
        </div>
        <div>
          <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">HairCare
        <div className="flex-1">
        </div>
        <div>
          <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div> 
  )
}

export default Products