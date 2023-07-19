import React from 'react'

const Body = ({ items }) => {
    return (
            <div className='mt-10 m-3 h-full'>
            <div className=" h-6 w-16 cursor-pointer rounded-md border-black bg-[#FFFFFF] text-center text-lg capitalize text-white shadow-xl hover:border md:h-40 md:w-60 md:p-3">
                <h1 className="text-sm font-bold capitalize text-blue-900 md:pt-6 md:text-2xl">{items}</h1>
                <p className="hidden text-sm capitalize text-purple-800 md:block lg:block">unlimited jokes on {items}</p>
            </div>
            
            </div>
    )
}

export default Body