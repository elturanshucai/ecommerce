import React from 'react'

export default function PopCategoryItem({ category }) {
    return (
        <div className='flex flex-col gap-6 col-span-2 sm:col-span-1' key={category.id}>
            <img
                src={category.photo}
                alt="categoryImage"
                className='rounded-full'
            />
            <p className='font-semibold text-center'>{category.title}</p>
        </div>
    )
}
