import React from 'react'
import DesktopBanner from '../components/DesktopBanner'
import SummaryInfo from '../components/SummaryInfo'

const Summary = ({handleTab, selectedAddOns, isMonthly, selectedPlan}) => {
  return (
    <div className='p-4 rounded-xl w-full bg-white sm:w-2/3 sm:h-3/4 z-50'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <DesktopBanner tab={"summary"} />
        <SummaryInfo handleTab={handleTab} selectedAddOns={selectedAddOns} isMonthly={isMonthly} selectedPlan={selectedPlan}/>
      </div>
    </div>
  )
}

export default Summary