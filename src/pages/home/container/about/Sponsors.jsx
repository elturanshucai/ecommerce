import React from 'react'
import images from '../../../../images'

export default function Sponsors() {
    const sponsors = [
        images.brandLogo1,
        images.brandLogo2,
        images.brandLogo3,
        images.brandLogo4,
        images.brandLogo5,
        images.brandLogo6
    ]
    return (
        <section className='grid grid-cols-6'>
            {sponsors.map((sponsor, index) => (
                <div
                    className='col-span-3 gap-4 sm:col-span-2 lg:col-span-1'
                    key={index}>
                    <img
                        src={sponsor}
                        alt='brand'
                        className='object-none w-full'
                    />
                </div>
            ))}
        </section>
    )
}
