import React from 'react'
import DesktopBanner from '../components/DesktopBanner';
import ThankYouImage from '../assets/images/icon-thank-you.svg'

const ThankYouPage = () => {
    return (
        <div className='p-4 rounded-xl w-full bg-white sm:w-2/3 min-h-[500px] z-50'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <DesktopBanner tab={"summary"} />
                <div className='text-[#01386a] w-full  relative px-6 py-2 md:px-12 md:py-8 xl:px-24 xl:py-12'>
                    <div className='flex justify-center items-center h-full'>
                        <div className='flex flex-col items-center gap-6 '>
                            <img src={ThankYouImage} alt='banner' className='block w-20 h-20 rounded-lg object-cover' />
                            <div className='flex flex-col gap-4 text-center'>
                                <h1 className='text-2xl font-bold sm:text-4xl'>Thank you!</h1>
                                <h1 className='text-[#828282] text-sm font-[ubuntu]'>
                                   Thanks for conforming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage;