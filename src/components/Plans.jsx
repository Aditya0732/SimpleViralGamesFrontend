import React from 'react'
import PlanCards from './PlanCards'

const Plans = ({ handleTab, isMonthly, togglePlanType, selectedPlan, handlePlanSelect, errors, handleErrors, handleFormData, formData }) => {
    const validateForm = () => {
        const newErrors = {}
        let isValid = true

        if (!selectedPlan) {
            isValid = false
            newErrors.selectedPlan = 'Please select a plan you want to go with!'
        }

        handleErrors(newErrors)
        return isValid
    }

    const handleClick = () => {
        if (validateForm()) handleTab('addOns')
    }
    return (
        <div className='text-[#01386a] w-full relative px-6 py-2 md:px-12 md:py-8 xl:px-24 xl:py-12'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold sm:text-4xl'>Select your plan</h1>
                <h1 className='text-[#828282] text-sm font-[ubuntu]'>You have the option of monthly or yearly billing.</h1>
                {errors.selectedPlan && (
                    <span className='text-red-500 text-sm font-bold mt-6'>{errors.selectedPlan}</span>
                )}
                <PlanCards
                    isMonthly={isMonthly}
                    handlePlanSelect={handlePlanSelect}
                    selectedPlan={selectedPlan}
                    errors={errors}
                    handleErrors={handleErrors}
                    handleTab={handleTab}
                    formData={formData}
                    handleFormData={handleFormData}
                />
                <div className='my-6 py-3 w-full bg-[#f3f3ff] rounded-md justify-center items-center'>
                    <div className='flex items-center justify-center gap-4'>
                        <h1 className='font-bold text-sm'>Monthly</h1>
                        <div
                            className={`bg-[#01386a] w-10 h-5 rounded-full px-1 py-1 cursor-pointer flex items-center ${isMonthly ? 'justify-start' : 'justify-end'
                                }`}
                            onClick={togglePlanType}
                        >
                            <div className='bg-white w-3 h-3 rounded-full transition' />
                        </div>
                        <h1 className='font-bold text-sm'>Yearly</h1>
                    </div>
                </div>
                <div className='mt-10 flex justify-between items-center'>
                    <span className='font-medium hover:text-[#01386a] text-[#878787] cursor-pointer' onClick={() => handleTab('infoPersonal')}>Go Back</span>
                    <button className='px-6 py-3 bg-[#01386a] text-center rounded-md transition-all duration-500 hover:scale-105' onClick={handleClick}>
                        <h1 className='text-white text-[15px]' >Next Step</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plans