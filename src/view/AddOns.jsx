import React from 'react'
import DesktopBanner from '../components/DesktopBanner'
import AddOnOptions from '../components/AddOnOptions'

const AddOns = ({ isMonthly, handleTab, selectedAddOns, handleAddOnSelect }) => {
  return (
    <div className='p-4 rounded-xl w-full bg-white z-50 sm:w-2/3 sm:h-3/4 mt-[50px]'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <DesktopBanner tab={"addOns"} />
        <AddOnOptions
          handleTab={handleTab}
          isMonthly={isMonthly}
          handleAddOnSelect={handleAddOnSelect}
          selectedAddOns={selectedAddOns}
        />
      </div>
    </div>
  )
}

export default AddOns