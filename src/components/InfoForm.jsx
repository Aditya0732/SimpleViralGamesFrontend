import React from 'react'

const InfoForm = ({ handleTab, formData, handleFormData, errors, handleErrors }) => {

    const validateForm = () => {
        const newErrors = {}
        let isValid = true

        if (!formData.name) {
            isValid = false
            newErrors.name = 'Name is required'
        }

        if (!formData.email) {
            isValid = false
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false
            newErrors.email = 'Email is invalid'
        }

        if (!formData.phone) {
            isValid = false
            newErrors.phone = 'Phone number is required'
        }

        handleErrors(newErrors)
        return isValid
    }

    const handleClick = () => {
        if (validateForm()) handleTab('infoPlan')
    }

    return (
        <div className='text-[#01386a] w-full relative px-6 py-2 md:px-12 md:py-8 xl:px-24 xl:py-12'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold sm:text-4xl'>Personal Info</h1>
                <h1 className='text-[#828282] text-sm font-[ubuntu]'>
                    Please provide your name, email address, phone number.
                </h1>
            </div>
            <div className='py-4 flex flex-col gap-5 sm:py-8 relative'>
                {['name', 'email', 'phone'].map((field) => (
                    <div key={field} className='flex flex-col gap-1'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-medium'>{field.charAt(0).toUpperCase() + field.slice(1)}</h1>
                            {errors[field] && <span className='text-red-500 text-sm font-bold'>{errors[field]}</span>}
                        </div>
                        <input
                            type='text'
                            name={field}
                            value={formData[field]}
                            onChange={(e) => handleFormData(field, e.target.value)}
                            className={`px-4 py-2 rounded-md text-[#01386a] w-full outline-none border-[1.5px] ${
                                errors[field] ? 'border-red-500' : 'border-[#D3D3D3] focus:border-[#01386a]'
                            } font-medium`}
                            placeholder={`e.g. ${field === 'email' ? 'stephenking@lorem.com' : field === 'phone' ? '+1 234 567 890' : 'Stephen King'}`}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-end mt-8'>
                <button
                    className='px-6 py-3 bg-[#01386a] text-center rounded-md transition-all duration-500 hover:scale-105'
                    onClick={handleClick}
                >
                    <h1 className='text-white text-[15px]'>Next Step</h1>
                </button>
            </div>
        </div>
    )
}

export default InfoForm