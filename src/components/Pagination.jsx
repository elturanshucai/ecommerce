import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Pagination({
    totalDataLength = 4,
    setShowCount,
    setSorting,
    defaultShow,
    activePage,
    setActivePage,
    currentSorting
}) {
    const [pageCount, setPageCount] = useState(1)

    const handleClick = (e) => {
        let number = Number(e.target.value)
        setActivePage(number)
    }

    useEffect(() => {
        setPageCount(Math.ceil(totalDataLength / defaultShow))
    }, [totalDataLength, defaultShow])

    useEffect(() => {
        let pageButtons = document.querySelectorAll('#paginatebuttons button')
        for (let i = 0; i < pageButtons.length; i++) {
            if (activePage + 1 == pageButtons[i].innerHTML && pageButtons[i].id != 'defaultmax') {
                pageButtons[i].classList.add('text-primary')
            } else {
                pageButtons[i].classList.remove('text-primary')
            }
        }
    }, [activePage])

    return (
        <div>
            <div className='flex gap-14 justify-between'>
                <div className='flex gap-14'>
                    <div>
                        <label className='font-bold'>Sort by</label>
                        <select
                            onChange={e => setSorting(e.target.value)}
                            className='p-2 border rounded-sm ml-3 outline-none'>
                            <option value="priceplus" selected={currentSorting == 'priceplus'}>Price to low</option>
                            <option value="priceminus" selected={currentSorting == 'priceminus'}>Price to high</option>
                        </select>
                    </div>
                    <div>
                        <label className='font-bold'>Show</label>
                        <input
                            type="number"
                            min={1}
                            className='text-center p-2 border rounded-sm ml-3 outline-none w-20'
                            onChange={e => setShowCount(e.target.value)}
                            value={defaultShow}
                            onWheel={e => e.target.blur()}
                        />
                    </div>
                </div>
                <div className='flex items-center gap-4' id='paginatebuttons'>
                    {activePage != 0 && <FaArrowLeftLong
                        className='cursor-pointer'
                        onClick={() => setActivePage(activePage - 1)}
                    />}
                    {activePage == 0 ?
                        <>
                            <button value={activePage} onClick={handleClick}>{activePage + 1}</button>
                            {pageCount > 2 && <button value={activePage + 1} onClick={handleClick}>{activePage + 2}</button>}
                            {pageCount > 3 && <button value={activePage + 2} onClick={handleClick}>{activePage + 3}</button>}
                            {pageCount > 4 && <div>...</div>}
                            {pageCount > 1 && <button button id='defaultmax' value={pageCount - 1} onClick={handleClick}>{pageCount}</button>}
                        </>
                        :
                        //sonuncu sehife
                        activePage + 1 == pageCount ?
                            <>
                                <button value={0} onClick={handleClick}>1</button>
                                <div>...</div>
                                <button value={activePage - 1} onClick={handleClick}>{activePage}</button>
                                <button value={activePage} onClick={handleClick}>{activePage + 1}</button>
                            </>
                            :

                            activePage < pageCount - 2 ?
                                <>
                                    <button value={activePage - 1} onClick={handleClick}>{activePage}</button>
                                    <button value={activePage} onClick={handleClick}>{activePage + 1}</button>
                                    {activePage < pageCount - 2 &&
                                        <button value={activePage + 1} onClick={handleClick}>{activePage + 2}</button>
                                    }
                                    <div>...</div>
                                    <button value={pageCount - 1} onClick={handleClick}>{pageCount}</button>
                                </>
                                :
                                <>
                                    <button value={activePage - 1} onClick={handleClick}>{activePage}</button>
                                    <button value={activePage} onClick={handleClick}>{activePage + 1}</button>
                                    <button value={pageCount - 1} onClick={handleClick}>{pageCount}</button>
                                </>
                    }
                    {activePage + 1 != pageCount && <FaArrowRightLong
                        className='cursor-pointer'
                        onClick={() => setActivePage(activePage + 1)}
                    />}
                </div>
            </div>
        </div >
    )
}
