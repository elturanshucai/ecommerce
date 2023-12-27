import React, { useState } from 'react'
import { TbHanger } from "react-icons/tb";
import SizeChart from './SizeChart';

export default function SelectSize({ setSelectedSize, sizes }) {
    const [showChart, setShowChart] = useState(false)

    return (
        <div className='relative'>
            {showChart && <SizeChart open={showChart} setOpen={setShowChart} />}
            <p className='mb-2'>Size</p>
            <div className='flex items-center justify-between'>
                <select
                    onChange={e => setSelectedSize(e.target.value)}
                    className='border outline-none rounded-sm p-2 uppercase text-sm w-3/5'>
                    <option value="">Please select</option>
                    {sizes.map((item, index) => (
                        <option value={item} className='uppercase' key={index}>{item}</option>
                    ))}
                </select>
                <button
                    onClick={() => setShowChart(!showChart)}
                    className='flex items-center gap-2 justify-center'>
                    <TbHanger />
                    Size chart
                </button>
            </div>
        </div>
    )
}
