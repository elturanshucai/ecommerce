import React, { useEffect, useRef, useState } from 'react'
import HRDivider from '../../../../components/HRDivider'
import { FaRegStar, FaStar, FaReply } from 'react-icons/fa6'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import LeaveReview from './LeaveReview';

export default function Comments() {
    const [comments, setComments] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const [activePage, setActivePage] = useState(0)
    const [modal, setModal] = useState(false)
    const [messageTo, setMessageTo] = useState(null)
    const commentsRef = useRef()

    const commentsData = [
        {
            id: 1,
            username: 'Devon Jane',
            date: '15-07-2020',
            score: 5,
            to: null,
            message: "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.",
            like: 2,
            dislike: 0
        },
        {
            id: 2,
            username: 'Annette Black',
            date: '1 day ago',
            score: 4,
            to: 'Devon Lane',
            message: "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.",
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
            dislike: 3,
            to: null
        },
        {
            id: 4,
            username: 'Marvin McKinney',
            date: '28-06-2020',
            score: 5,
            message: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
            like: 3,
            dislike: 0,
            to: null
        },
        {
            id: 5,
            username: 'Marvin McKinney2',
            date: '28-06-2020',
            score: 3,
            message: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
            like: 4,
            dislike: 2,
            to: 'Albert Flores'
        }
    ]

    const getComments = () => {
        let startIndex = activePage * 4
        let lastIndex = startIndex + 4
        setComments(commentsData.slice(startIndex, lastIndex))
        setPageCount(Math.ceil(commentsData.length / 4))
    }

    const handleReply = (username) => {
        setModal(true)
        setMessageTo(`${username}, `)
    }

    useEffect(() => {
        getComments()
        commentsRef.current.scrollIntoView()
    }, [activePage])
    return (
        <div ref={commentsRef} className='py-2'>
            {modal && <LeaveReview open={modal} setOpen={setModal} messageTo={messageTo} />}
            <div className='flex items-center justify-between mb-14'>
                <button
                    onClick={() => setModal(true)}
                    className='bg-primary rounded-md text-white py-3 px-8 font-medium'
                >
                    Leave a review
                </button>
                <div className='flex items-center gap-3'>
                    <p>Sort by</p>
                    <select className='px-2 py-1 rounded-sm border outline-none'>
                        <option value="newest">newest</option>
                        <option value="oldest">oldest</option>
                    </select>
                </div>
            </div>
            <div className='mb-14'>
                {comments.map((item, index) => (
                    <>
                        <div className='flex gap-20'>
                            <div>
                                <p className='font-bold text-lg mb-2'>{item.username}</p>
                                <p className='text-sm mb-4 text-gray-500'>{item.date}</p>
                                <div className='flex items-center text-sm'>
                                    {[...Array(5)].map((_, i) => (
                                        i + 1 > item.score ?
                                            <FaRegStar className='text-gray-500' />
                                            :
                                            <FaStar className='text-yellow-400' />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className='mb-4'>
                                    {item.to && <span className='text-primary font-semibold'>@{item.to}{" "}</span>}
                                    {item.message}
                                </p>
                                <div className='flex justify-between'>
                                    <button onClick={() => handleReply(item.username)} className='flex gap-2 items-center text-gray-400'>
                                        <FaReply />
                                        Reply
                                    </button>
                                    <div className='flex gap-4 items-center'>
                                        <button className='flex items-center justify-center gap-2 text-gray-400'>
                                            <AiOutlineLike className='text-green-500' />
                                            <span>{item.like}</span>
                                        </button>
                                        <button className='flex items-center gap-2 text-gray-400 justify-center'>
                                            <AiOutlineDislike className='text-red-500' />
                                            <span>{item.dislike}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index + 1 < commentsData.length && <HRDivider className='my-8' />}
                    </>
                ))}
            </div>
            <div className='flex gap-5 items-center w-fit mx-auto'>

                {activePage > 0 && <FaArrowLeftLong
                    className='cursor-pointer'
                    onClick={() => activePage > 0 && setActivePage(activePage - 1)}
                />}
                {[...Array(pageCount)].map((_, index) => (
                    <>
                        <button
                            onClick={() => setActivePage(index)}
                            key={index}
                            className={`font-bold ${activePage === index && 'text-primary'}`}
                        >
                            {index + 1}
                        </button>
                    </>
                ))}
                {activePage < pageCount - 1 && <FaArrowRightLong
                    className='cursor-pointer'
                    onClick={() => activePage < pageCount - 1 && setActivePage(activePage + 1)}
                />}
            </div>
        </div>
    )
}
