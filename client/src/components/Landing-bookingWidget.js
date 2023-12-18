import React from 'react'

function LandingbookingWidget() {

    const inputClass = () => {
        return 'h-[52px]'
    }
  return (
    <div className='px-6 py-8 bg-white mt-16 absolute w-1/3  shadow-2xl rounded-xl'>
        <div className=''>
            <div className='w-full '>
                <h1 className='font-bold text-4xl mb-2'>Find places to stay in Airbnb</h1>
                <p className='text-gray-500 leading-5 text-md'>Discover entire homes and rooms perfect for any trip.</p>
            </div>
            <div className='mt-5'>
                <input type="text" placeholder='Anywhere'  className={inputClass()}  required/>
                <div className='flex gap-2'>
                <input type="date" placeholder='enter date'  className='py-2 text-white border px-3 border-2 rounded-lg focus:text-black' required/>
                <input type="date" placeholder='' content='false' className=' text-white border px-3 border-2 rounded-lg' required/>

                </div>
                <div className='flex gap-3'>
                    <input type="number" name="" id="" className={inputClass()} placeholder='adults' />
                    <input type="number" name="" id="" className={inputClass()}  placeholder='children'/>

                </div>
                <div className='bg-red-600 mt-3 text-center py-2 rounded-xl text-white text-lg font-semibold'>
                    <button type='submit'>Search</button>
                </div>

            </div>

        </div>
        </div>
  )
}

export default LandingbookingWidget