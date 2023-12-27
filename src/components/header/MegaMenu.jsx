import React from 'react'
import Divider from '../Divider'
import { Link } from 'react-router-dom'
import images from '../../images'
import { FaArrowRightLong } from "react-icons/fa6";

const clothes = [
    { title: 'Coats', path: '/coats' },
    { title: 'Jackets', path: '/jackets' },
    { title: 'Suits', path: '/suits' },
    { title: 'Dresses ', path: '/dresses ' },
    { title: 'Cardigans & sweaters', path: '/cardigans-and-sweaters' },
    { title: 'Sweatshirts & hoodies', path: '/sweatshirts-and-hoodies' },
    { title: 'T-shirts & tops', path: '/t-shirts-and-tops' },
    { title: 'Pants', path: '/pants' },
    { title: 'Jeans', path: '/jeans' },
    { title: 'Shorts', path: '/shorts' },
    { title: 'Skirts', path: '/skirts' },
    { title: 'Lingerie & nightwear', path: '/lingerie-and-nightwear' },
    { title: 'Sportswear', path: '/sportswear' },
    { title: 'Swimwear', path: '/swimwear' }
]
const shoes = [
    { title: 'Boots', path: '/boots' },
    { title: 'Flat shoes', path: '/flat-shoes' },
    { title: 'Heels', path: '/heels' },
    { title: 'Sandals ', path: '/sandals ' },
    { title: 'Mules', path: '/mules' },
    { title: 'Sliders', path: '/sliders' },
    { title: 'Slippers', path: '/slippers' },
    { title: 'Sneakers', path: '/sneakers' },
    { title: 'Leather', path: '/leather' }
]
const accessories = [
    { title: 'Bags & bagpacks', path: '/bags-and-bagpacks' },
    { title: 'Hats & scarves', path: '/hats-and-scarves' },
    { title: 'Hair accessories', path: '/hair-accessories' },
    { title: 'Belts ', path: '/belts ' },
    { title: 'Jewellery', path: '/jewellery' },
    { title: 'Watches', path: '/watches' },
    { title: 'Sunglasses', path: '/sunglasses' },
    { title: 'Purses', path: '/purses' },
    { title: 'Gloves', path: '/gloves' },
    { title: 'Socks & tights', path: '/socks-and-tights' }
]

export default function MegaMenu({ setMegaMenu, activeMenu }) {
    return (
        <div className='fixed top-[250px] lg:top-[150px] w-full z-40 h-screen overflow-auto border-t'>
            <div className='flex gap-14 bg-white py-5 lg:px-40 px-5'>
                <div className='grid grid-cols-4 gap-7 w-4/5'>
                    <div className='col-span-2 sm:col-span-1 flex flex-col gap-2'>
                        <p>New collection</p>
                        <p>Best Sellers</p>
                        <p>Plus Size</p>
                        <p className='text-red-500'>Sale up to 70%</p>
                    </div>
                    <div className='col-span-2 sm:col-span-1 flex flex-col gap-2'>
                        <h1 className='uppercase font-bold'>CLOTHES</h1>
                        {clothes.map((item, index) => (
                            <Link to={`/${activeMenu}${item.path}`} key={index} onClick={() => setMegaMenu(false)}>{item.title}</Link>
                        ))}
                    </div>
                    <div className='col-span-2 sm:col-span-1 flex flex-col gap-2'>
                        <h1 className='uppercase font-bold'>SHOES</h1>
                        {shoes.map((item, index) => (
                            <Link to={`/${activeMenu}${item.path}`} onClick={() => setMegaMenu(false)} key={index}>{item.title}</Link>
                        ))}
                    </div>
                    <div className='col-span-2 sm:col-span-1 flex flex-col gap-2'>
                        <h1 className='uppercase font-bold'>ACCESSORIES</h1>
                        {accessories.map((item, index) => (
                            <Link to={`/${activeMenu}${item.path}`} onClick={() => setMegaMenu(false)} key={index}>{item.title}</Link>
                        ))}
                    </div>
                </div>
                <Divider className='h-[500px]' />
                <div className='w-1/5 flex flex-col gap-4'>
                    <img src={images.megaMenuImg} alt="image" />
                    <p className='font-bold text-sm'>Back to school. Sale up to 50%</p>
                    <Link to='/' className='border-2 px-1 sm:px-6 border-primary rounded-md py-2 text-primary gap-2 flex items-center '>
                        See offers
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
            <div className='w-full h-1/2 bg-black opacity-75' onClick={() => setMegaMenu(false)}></div>
        </div>
    )
}
