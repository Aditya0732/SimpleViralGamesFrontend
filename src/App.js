import React, { useState } from 'react';
import PersonalInfo from './view/PersonalInfo';
import PlanInfo from './view/PlanInfo';
import AddOns from './view/AddOns';
import Summary from './view/Summary';
import bannerImageMobile from './assets/images/bg-sidebar-mobile.svg';
import ThankYouPage from './view/ThankYouPage';

const App = () => {
    const [currentTab, setCurrentTab] = useState('infoPersonal')
    const [isMonthly, setIsMonthly] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plan: null,
        addOns: [],
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedAddOns, setSelectedAddOns] = useState([])

    const handleAddOnSelect = (addOn) => {
        console.log(selectedAddOns)
        if (selectedAddOns.includes(addOn)) {
            setSelectedAddOns(selectedAddOns.filter((add) => add !== addOn))
        } else {
            setSelectedAddOns([...selectedAddOns, addOn])
        }
    }

    const handlePlanSelect = (plan) => {
        if (selectedPlan === plan) {
            setSelectedPlan(null);
        } else {
            setSelectedPlan(plan)
        }
    };

    const togglePlanType = () => {
        setIsMonthly(!isMonthly)
    }

    const handleTab = (tab) => {
        setCurrentTab(tab)
    }

    const handleFormData = (key, value) => {
        setFormData({ ...formData, [key]: value })
    }

    const handleErrors = (error) => {
        setErrors(error)
    }

    return (
        <div className='bg-[#bfe2fd] min-h-screen flex justify-center items-center p-4 sm:p-0'>
            <div className='z-0 relative sm:hidden'>
                <img
                    src={bannerImageMobile}
                    alt='banner'
                    className='w-full fixed top-0 right-0 h-1/3 object-cover'
                />
                <div className='fixed inset-0 flex justify-center gap-4 top-4'>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${currentTab === 'infoPersonal' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>1</h1>
                    </div>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${currentTab === 'infoPlan' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>2</h1>
                    </div>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${currentTab === 'addOns' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>3</h1>
                    </div>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${currentTab === 'summary' ? "bg-[#bfe2fd] text-[#01386a]" : "border-2 border-white text-white"}`}>
                        <h1 className=' text-xs font-bold'>4</h1>
                    </div>
                </div>
            </div>
            {currentTab === 'infoPersonal' && (
                <PersonalInfo
                    handleTab={handleTab}
                    formData={formData}
                    handleFormData={handleFormData}
                    errors={errors}
                    handleErrors={handleErrors}
                />
            )}
            {currentTab === 'infoPlan' && (
                <PlanInfo
                    handleTab={handleTab}
                    isMonthly={isMonthly}
                    togglePlanType={togglePlanType}
                    formData={formData}
                    handleFormData={handleFormData}
                    errors={errors}
                    handleErrors={handleErrors}
                    selectedPlan={selectedPlan}
                    handlePlanSelect={handlePlanSelect}
                />
            )}
            {currentTab === 'addOns' && (
                <AddOns
                    handleTab={handleTab}
                    isMonthly={isMonthly}
                    formData={formData}
                    handleFormData={handleFormData}
                    handleAddOnSelect={handleAddOnSelect}
                    selectedAddOns={selectedAddOns}
                />
            )}
            {currentTab === 'summary' && (
                <Summary
                    handleTab={handleTab}
                    formData={formData}
                    isMonthly={isMonthly}
                    selectedAddOns={selectedAddOns}
                    selectedPlan={selectedPlan}
                />
            )}
            {currentTab === 'thankYou' && (
                <ThankYouPage/>
            )}
        </div>
    )
}

export default App