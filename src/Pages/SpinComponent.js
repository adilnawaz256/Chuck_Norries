import React from 'react'
import './Spin.css'
const SpinComponent = () => {
    return (
        <div className='spin-main bg-gradient-to-r from-[#407FE2] to-[#394661] flex justify-center' >
            <div class="flex flex-col items-center justify-center mt-10">
                <div class="animate-spin rounded-full border-t-4 border-b-4 border-white h-16 w-16"></div>
            </div>
        </div>
    )
}

export default SpinComponent