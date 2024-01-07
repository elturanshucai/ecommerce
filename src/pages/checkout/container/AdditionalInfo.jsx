import React from 'react'

export default function AdditionalInfo() {
    return (
        <div>
            <h1 className='mb-6 text-2xl font-bold'>5. Additional Information (Optional)</h1>
            <p className='mb-2'>Order notes</p>
            <textarea
                className='w-full border outline-none text-base py-2 px-4 min-h-[130px] max-h-[130px] placeholder:text-gray-400'
                placeholder='Notes about your order, e.g. special noted for delivery.'
            />
        </div>
    )
}
