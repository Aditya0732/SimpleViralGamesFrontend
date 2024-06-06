import React from 'react'
import AddOnCards from './AddOnCards'

const AddOnOptions = ({ handleTab, isMonthly, selectedAddOns, handleAddOnSelect }) => {
    return (
        <div className='text-[#01386a] w-full relative px-4 py-2 md:px-12 md:py-8 xl:px-24 xl:py-12'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold sm:text-4xl'>Pick add-ons</h1>
                <h1 className='text-[#828282] text-sm font-[ubuntu]'>Add-Ons help enhance your gaming experience.</h1>
            </div>
            <AddOnCards isMonthly={isMonthly} handleAddOnSelect={handleAddOnSelect} selectedAddOns={selectedAddOns}/>
            <div className='mt-10 flex justify-between items-center'>
                <span className='font-medium hover:text-[#01386a] text-[#878787] cursor-pointer' onClick={() => handleTab('infoPlan')}>Go Back</span>
                <button className='px-6 py-3 bg-[#01386a] text-center rounded-md transition-all duration-500 hover:scale-105' onClick={() => handleTab('summary')}>
                    <h1 className='text-white text-[15px]'>Next Step</h1>
                </button>
            </div>
        </div>
    )
}

export default AddOnOptions