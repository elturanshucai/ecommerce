import React from 'react'

export default function Comments() {
    const commentsData = [
        {
            id: 1,
            username: 'Devon Jane',
            date: '15-07-2020',
            score: 5,
            message: "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.",
            like: 2,
            dislike: 0
        },
        {
            id: 2,
            username: 'Annette Black',
            date: '1 day ago',
            score: 4,
            message: "@Devon Lane Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.",
            like: 2,
            dislike: 1
        },
        {
            id: 3,
            username: 'Albert Flores',
            date: '07-07-2020',
            score: 1,
            message: "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.",
            like: 0,
            dislike: 3
        },
        {
            id: 4,
            username: 'Marvin McKinney',
            date: '28-06-2020',
            score: 5,
            message: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
            like: 3,
            dislike: 0
        }
    ]
    return (
        <div className='flex items-center justify-between mb-14'>
            <button className='bg-primary rounded-md text-white py-3 px-8 font-medium'>Leave a review</button>
            <div className='flex items-center gap-3'>
                <p>Sort by</p>
                <select className='px-2 py-1 rounded-sm border outline-none'>
                    <option value="newest">newest</option>
                    <option value="oldest">oldest</option>
                </select>
            </div>
        </div>
    )
}
