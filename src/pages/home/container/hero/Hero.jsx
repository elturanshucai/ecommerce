import React, { useEffect, useState } from 'react'
import { getHeroImages } from '../../../../services/homeServices'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import HeroBottom from './HeroBottom'

export default function Hero() {
    const [heroImages, setHeroImages] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const handleChangeImage = (index) => {
        setActiveIndex(index)
    }
    useEffect(() => {
        setHeroImages(getHeroImages())
    }, [])
    return (
        <>
            <section className='relative z-0'>
                <img src={heroImages[activeIndex]} alt='image' className='w-full h-screen max-h-screen object-cover' />
                <div className='absolute top-10 sm:top-[15%] left-5 sm:left-[20%]'>
                    <p className='uppercase font-bold text-lg mb-3'>New Collection</p>
                    <p className='font-bold text-2xl sm:text-5xl mb-12'>Menswear 2020</p>
                    <div className='flex flex-col sm:flex-row gap-6 mb-14 sm:mb-36'>
                        <button className='text-primary w-full sm:w-fit border-primary border rounded-md h-12 px-4 sm:px-10'>Shop sale</button>
                        <button className='text-white bg-primary rounded-md px-4 sm:px-10 h-12'>Shop the menswear</button>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        {heroImages.map((img, index) => (
                            <button
                                className={`w-20 pb-2 border-b-2 ${index === activeIndex ? 'border-black' : 'border-gray-400'} text-start font-bold transition-colors duration-300`}
                                onClick={() => handleChangeImage(index)}
                                key={index}
                            >
                                0{index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <LeftArrow setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
                <RightArrow activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </section>
            <HeroBottom />
        </>
    )
}
