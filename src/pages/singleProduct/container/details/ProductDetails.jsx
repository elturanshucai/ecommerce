import React from 'react'
import HRDivider from '../../../../components/HRDivider'
import { TbWashHand, TbIroningOff, TbBleachOff, TbWashTumbleOff } from "react-icons/tb";
import ProductCard from '../../../../components/ProductCard';

export default function ProductDetails({ product }) {

  const productDetailData = [
    'Brand: Jordan',
    'Color: gray / red / yellow',
    'Mid-cut design',
    'Lace-up fastening',
    'Rubber outsole pods for durability and traction',
    'Moulded grooves in forefoot offer added flexibility',
    'Padded cuff with inner nodes designed to offer comfort and support around the Achilles tendon'
  ]

  const fabricData = [
    'Upper: 50% real leather, 50% textile',
    'Lining: 100% textile',
    'Sole: 100% other materials'
  ]




  return (
    <div className='flex justify-between gap-20 py-8'>
      <div className='w-8/12'>
        <h1 className='font-bold text-xl mb-4'>Details</h1>
        <p className='mb-5 text-gray-800'>Id habitant tempor aliquam vulputate enim velit tincidunt sed. Urna sed facilisis nulla feugiat amet venenatis. Id suspendisse ut quis tellus aliquam pellentesque neque, semper donec.</p>
        <ul className='px-5 gap-1'>
          {productDetailData.map((item, index) => (
            <li key={index} className='list-disc marker:text-primary'>{item}</li>
          ))}
        </ul>
        <HRDivider className='my-6' />
        <h1 className='font-bold text-xl mb-4'>Fabric</h1>
        <ul className='px-5 gap-1'>
          {fabricData.map((item, index) => (
            <li key={index} className='list-disc marker:text-primary'>{item}</li>
          ))}
        </ul>
        <HRDivider className='my-6' />
        <h1 className='font-bold mb-4 text-xl'>Care</h1>
        <p className='flex gap-4 items-center'>
          <TbWashHand className='text-gray-400' />
          Hand wash only (30°)
        </p>
        <p className='flex gap-4 items-center'>
          <TbIroningOff className='text-gray-400' />
          No ironing
        </p>
        <p className='flex gap-4 items-center'>
          <TbBleachOff className='text-gray-400' />
          Do not use any bleach
        </p>
        <p className='flex gap-4 items-center'>
          <TbWashTumbleOff className='text-gray-400' />
          Do not tumble dry
        </p>
      </div>
      <div className='w-4/12'>
        <ProductCard
          item={product}
          type={product.type}
          key={product.id}
          imageClass='w-full'
        />
      </div>
    </div>
  )
}
