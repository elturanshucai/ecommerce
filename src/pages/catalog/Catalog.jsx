import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import MainLayout from '../../components/MainLayout'
import Pagination from '../../components/Pagination'
import { VscSettings } from "react-icons/vsc";

export default function Catalog() {
    const [showFilters, setShowFilters] = useState(false)
    const [sorting, setSorting] = useState('priceplus')
    const [showCount, setShowCount] = useState(9)
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {

    }, [sorting, showCount, activePage])
    return (
        <MainLayout>
            <BreadCrumbs />
            <main className='lg:px-40 px-5 py-8'>
                <div className='flex gap-14 justify-between'>
                    <button
                        onClick={() => setShowFilters(showFilters ? false : true)}
                        className='flex items-center justify-center gap-2 rounded-md text-white bg-primary px-16 py-2 outline-none'>
                        <VscSettings />
                        {showFilters ? 'Hide filters' : 'Show filters'}
                    </button>
                    <Pagination
                        setShowCount={setShowCount}
                        setSorting={setSorting}
                        defaultShow={showCount}
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                </div>
            </main>
        </MainLayout>
    )
}
