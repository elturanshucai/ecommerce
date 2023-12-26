import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import ClothesFilter from './ClothesFilter';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';
import MaterialFilter from './MaterialFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';

export default function Filter() {
    const [menu, setMenu] = useState({
        clothes: false,
        size: false,
        color: false,
        material: false,
        brand: false,
        price: false
    })
    return (
        <div className='col-span-1 px-2 overflow-y-auto h-[500px]'>
            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Clothes</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, clothes: menu.clothes ? false : true })}
                    >
                        {menu.clothes ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.clothes && <ClothesFilter />}
            </div>

            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Size</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, size: menu.size ? false : true })}
                    >
                        {menu.size ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.size && <SizeFilter />}
            </div>

            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Color</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, color: menu.color ? false : true })}
                    >
                        {menu.color ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.color && <ColorFilter />}
            </div>

            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Material</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, material: menu.material ? false : true })}
                    >
                        {menu.material ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.material && <MaterialFilter />}
            </div>

            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Brand</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, brand: menu.brand ? false : true })}
                    >
                        {menu.brand ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.brand && <BrandFilter />}
            </div>

            <div className='py-5 border-b flex flex-col gap-4'>
                <p className='flex justify-between items-center'>
                    <span className='font-bold'>Price</span>
                    <span
                        className='text-primary'
                        onClick={() => setMenu({ ...menu, price: menu.price ? false : true })}
                    >
                        {menu.price ?
                            <FaMinus className='cursor-pointer' /> : <FaPlus className='cursor-pointer' />
                        }
                    </span>
                </p>
                {menu.price && <PriceFilter />}
            </div>
        </div>
    )
}
