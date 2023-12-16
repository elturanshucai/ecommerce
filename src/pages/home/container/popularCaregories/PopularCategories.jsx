import React, { useEffect, useState } from 'react'
import { getPopularCategories } from '../../../../services/homeServices'
import PopCategoryItem from './PopCategoryItem'

export default function PopularCategories() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(getPopularCategories())
    }, [])
    return (
        <section className='w-2/3 mx-auto mb-44'>
            <h1 className='text-center font-bold text-2xl text-gray-900 mb-14'>Popular categories</h1>
            <div className='grid grid-cols-6 gap-7'>
                {data.map((item, index) => (
                    <PopCategoryItem
                        category={item}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}
