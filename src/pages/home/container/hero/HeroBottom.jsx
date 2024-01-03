import React from 'react'
import images from '../../../../images'

export default function HeroBottom() {
    return (
        <div className='relative flex justify-center'>
            <div className='absolute -top-14 flex flex-col sm:flex-row items-center justify-center gap-7'>
                <img src={images.heroWoman} alt="woman" className='max-w-[390px] w-4/5 mx-auto sm:w-[30%]' />
                <img src={images.heroMan} alt="man" className='max-w-[390px] w-4/5 mx-auto sm:w-[30%]' />
                <img src={images.heroKid} alt="kid" className='max-w-[390px] w-4/5 mx-auto sm:w-[30%]' />
            </div>
        </div>
    )
}
