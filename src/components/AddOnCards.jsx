import React from 'react'
import { addOns } from '../constants/constants'

const AddOnCards = ({ isMonthly,selectedAddOns, handleAddOnSelect}) => {
    return (
        <div className='mt-8 flex flex-col gap-4 w-full'>
            {addOns.map((addOn) => (
                <div
                    key={addOn.id}
                    className={`p-6 flex justify-between transition-all duration-500 items-center rounded-lg cursor-pointer border hover:scale-105 ${
                        selectedAddOns.includes(addOn)
                            ? 'bg-[#f3f3ff] border-[#473dff] scale-105'
                            : 'border-[#d3d3d3]'
                    }`}
                    onClick={() => handleAddOnSelect(addOn)}
                >
                    <div className='flex gap-6 items-center'>
                        <input
                            type='checkbox'
                            className={`w-4 h-4 border rounded ${
                                selectedAddOns.includes(addOn)
                                    ? 'bg-[#01386a] border-[#01386a]'
                                    : 'border-white'
                            }`}
                            checked={selectedAddOns.includes(addOn)}
                            readOnly
                        />
                        <div className='flex flex-col'>
                            <h1 className='text-sm font-bold'>{addOn.name}</h1>
                            <h1 className='text-[#828282] text-xs'>
                                {addOn.description}
                            </h1>
                        </div>
                    </div>
                    <h1 className='text-xs text-[#473dff] font-medium'>
                        +${isMonthly ? addOn.price : addOn.price * 10}/
                        {isMonthly ? 'mo' : 'yr'}
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default AddOnCards