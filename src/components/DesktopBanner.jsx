import React from 'react'
import bannerImage from '../assets/images/bg-sidebar-desktop.svg'

const DesktopBanner = ({ tab }) => {
    return (
        <div className='relative w-full sm:w-auto'>
            <img src={bannerImage} alt='banner' className='hidden sm:block h-[600px] w-[500px] rounded-lg object-cover' />
            <div className='absolute inset-0 hidden sm:flex flex-col gap-7 items-start p-6 mt-4'>
                <div className='flex gap-4 items-center'>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${tab === 'infoPersonal' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>1</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#c2c2c2] text-xs '>STEP 1</h1>
                        <h1 className='text-white text-xs font-semibold'>YOUR INFO</h1>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${tab === 'infoPlan' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>2</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#c2c2c2] text-xs '>STEP 2</h1>
                        <h1 className='text-white text-xs font-semibold'>SELECT PLAN</h1>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${tab === 'addOns' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>3</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#c2c2c2] text-xs'>STEP 3</h1>
                        <h1 className='text-white text-xs font-semibold'>ADD-ONS</h1>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${tab === 'summary' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>4</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-[#c2c2c2] text-xs'>STEP 4</h1>
                        <h1 className='text-white text-xs font-semibold'>SUMMARY</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopBanner;