import React from 'react'
import DesktopBanner from '../components/DesktopBanner'
import InfoForm from '../components/InfoForm'

const PersonalInfo = ({
    handleTab,
    formData,
    handleFormData,
    errors,
    handleErrors,
}) => {
    return (
        <div className='p-4 rounded-xl w-full bg-white sm:w-2/3 sm:h-3/4 z-50 mt-[5px]'>
            <div className='flex flex-col sm:flex-row gap-4 '>
                <DesktopBanner tab={'infoPersonal'} />
                <InfoForm
                    handleTab={handleTab}
                    formData={formData}
                    handleFormData={handleFormData}
                    errors={errors}
                    handleErrors={handleErrors}
                />
            </div>
        </div>
    )
}

export default PersonalInfo