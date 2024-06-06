import React from 'react'

const SummaryInfo = ({ handleTab, selectedAddOns, isMonthly, selectedPlan }) => {
  const isOnlineServiceAdded = selectedAddOns.some((addon) => addon.id === 1);
  const isStorageAdded = selectedAddOns.some((addon) => addon.id === 2);
  const isCustomizableAdded = selectedAddOns.some((addon) => addon.id === 3);

  let totalPrice = 0;

  if (isMonthly) {
    totalPrice += selectedPlan.monthlyRate;
    if (isOnlineServiceAdded) {
      totalPrice += 1;
    }
    if (isStorageAdded) {
      totalPrice += 2;
    }
    if (isCustomizableAdded) {
      totalPrice += 2;
    }
  } else {
    totalPrice += selectedPlan.yearlyRate;
    if (isOnlineServiceAdded) {
      totalPrice += 10;
    }
    if (isStorageAdded) {
      totalPrice += 20;
    }
    if (isCustomizableAdded) {
      totalPrice += 20;
    }
  }

  return (
    <div className='text-[#01386a] w-full relative px-6 py-2 md:px-12 md:py-8 xl:px-24 xl:py-12'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold sm:text-4xl'>Finishing up</h1>
        <h1 className='text-[#828282] text-sm font-[ubuntu]'>
          Double-check everything looks OK before conforming.
        </h1>
      </div>
      <div className='w-full rounded-md bg-[#f3f3ff] p-5 mt-8'>
        <div className='flex justify-between pb-4 items-center border-b border-[#D3D3D3]'>
          <div className='flex flex-col gap-1'>
            <h1 className='font-bold text-sm'>{selectedPlan.name} ({isMonthly ? (<span>Monthly</span>) : (<span>Yearly</span>)})</h1>
            <span
              className='font-medium text-xs hover:text-[#01386a] text-[#878787] cursor-pointer'
              onClick={() => handleTab('infoPlan')}
            >
              <u>Change</u>
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='font-bold'>
              ${isMonthly ? (<span>{selectedPlan.monthlyRate}</span>) : (<span>{selectedPlan.yearlyRate}</span>)}/
              {isMonthly ? 'mo' : 'yr'}
            </h1>
          </div>
        </div>
        <div className='flex flex-col gap-4 pt-4'>
          {isOnlineServiceAdded && (
            <div className='flex justify-between'>
              <span className='font-medium text-xs text-[#878787]'>
                Online Service
              </span>
              <h1 className='text-xs text-[#01386a] font-medium'>
                +${isMonthly ? 1 : 1 * 10}/
                {isMonthly ? 'mo' : 'yr'}
              </h1>
            </div>
          )}
          {isStorageAdded && (
            <div className='flex justify-between'>
              <span className='font-medium text-xs text-[#878787]'>
                Larger Storage
              </span>
              <h1 className='text-xs text-[#01386a] font-medium'>
                +${isMonthly ? 2 : 2 * 10}/
                {isMonthly ? 'mo' : 'yr'}
              </h1>
            </div>
          )}
          {isCustomizableAdded && (
            <div className='flex justify-between'>
              <span className='font-medium text-xs text-[#878787]'>
                Customizable Profile
              </span>
              <h1 className='text-xs text-[#01386a] font-medium'>
                +${isMonthly ? 2 : 2 * 10}/
                {isMonthly ? 'mo' : 'yr'}
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-between p-4'>
        <span className='font-semibold text-sm text-[#878787]'>
          Total Price (per {isMonthly ? (<span>month</span>) : (<span>year</span>)})
        </span>
        <h1 className='text-lg text-[#473dff] font-bold'>
          ${totalPrice}/
          {isMonthly ? 'mo' : 'yr'}
        </h1>
      </div>
      <div className='mt-10 flex justify-between items-center'>
        <span className='font-medium hover:text-[#01386a] text-[#878787] cursor-pointer' onClick={() => handleTab('addOns')}>Go Back</span>
        <button className='px-6 py-3 bg-[#01386a] text-center rounded-md transition-all duration-500 hover:scale-105' onClick={() => handleTab('thankYou')}>
          <h1 className='text-white text-[15px]' >Confirm</h1>
        </button>
      </div>
    </div>
  )
}

export default SummaryInfo