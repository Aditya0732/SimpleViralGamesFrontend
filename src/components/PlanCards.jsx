import React from 'react'
import { plans } from '../constants/constants'


const PlanCards = ({ isMonthly, selectedPlan,handlePlanSelect }) => {
    return (
        <div className='mt-6 block sm:flex gap-4 w-full'>
            {plans.map((plan) => (
                <div
                    key={plan.id}
                    className={`flex sm:flex-col hover:scale-105 transition-all duration-500 w-full sm:w-1/3 sm:justify-between gap-4 sm:gap-12 p-4 rounded-md cursor-pointer mt-2 border ${selectedPlan === plan
                        ? 'bg-[#f3f3ff] border-[#473dff] scale-105'
                        : 'border-[#d3d3d3]'
                        }`}
                    onClick={() => handlePlanSelect(plan)}
                >
                    <img src={plan.icon} alt={plan.name} className='h-10 w-10' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold'>{plan.name}</h1>
                        <h1 className='text-[#828282] text-xs font-[ubuntu]'>
                            ${isMonthly ? plan.monthlyRate : plan.yearlyRate}/
                            {isMonthly ? 'mo' : 'yr'}
                        </h1>
                        {!isMonthly && (
                            <span className='text-[#01386a] text-xs font-semibold'> 2 months free</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlanCards