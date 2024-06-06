import React from 'react'
import DesktopBanner from '../components/DesktopBanner'
import Plans from '../components/Plans'
const PlanInfo = ({ handleTab, togglePlanType, isMonthly, handlePlanSelect, selectedPlan, errors, handleErrors, formData,handleFormData }) => {
    return (
        <div className='p-4 rounded-xl w-full bg-white sm:w-2/3 sm:h-3/4 z-50 mt-[50px]'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <DesktopBanner tab={"infoPlan"} />
                <Plans
                    handleTab={handleTab}
                    togglePlanType={togglePlanType}
                    isMonthly={isMonthly}
                    selectedPlan={selectedPlan}
                    handlePlanSelect={handlePlanSelect}
                    errors={errors}
                    handleErrors={handleErrors}
                    formData={formData}
                    handleFormData={handleFormData}
                />
            </div>
        </div>
    )
}

export default PlanInfo