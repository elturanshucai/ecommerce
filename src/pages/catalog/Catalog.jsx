import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import MainLayout from '../../components/MainLayout'
import Pagination from '../../components/Pagination'
import { VscSettings } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import Filter from './container/Filter';
import Subscribe from '../home/container/subscribe/Subscribe';
import { Helmet } from 'react-helmet';

export default function Catalog() {
    const [showFilters, setShowFilters] = useState(true)
    const [sorting, setSorting] = useState('priceplus')
    const [showCount, setShowCount] = useState(9)
    const [activePage, setActivePage] = useState(0)
    const [data, setData] = useState([])
    const { productDatabase } = useSelector(state => state.product)

    const querySearchParams = new URLSearchParams(window.location.search)
    const [queryParams, setQueryParams] = useState({
        color: querySearchParams.get('color'),
        material: querySearchParams.get('material'),
        type: querySearchParams.get('type')
    })

    const getData = () => {
        let startIndex = 0 + activePage * showCount
        let lastIndex = startIndex + Number(showCount)
        setData(productDatabase.slice(startIndex, lastIndex))
    }

    useEffect(() => {
        getData()
    }, [sorting, showCount, activePage, productDatabase])
    return (
        <MainLayout>
            <Helmet>
                <title>Catalog</title>
                <meta name="description" content="Select your favorite catalog in Createx Shop" />
            </Helmet>
            <BreadCrumbs />
            <main className='lg:px-40 px-5 py-8'>
                <div className='flex gap-14 justify-between mb-8'>
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
                        totalDataLength={productDatabase.length}
                        currentSorting={sorting}
                    />
                </div>
                <div className={`grid grid-cols-4 gap-2 mb-10`}>
                    {showFilters && <Filter />}
                    <div className={`grid ${showFilters ? 'grid-cols-3' : 'grid-cols-4'} ${showFilters ? 'col-span-3' : 'col-span-4'} gap-7 `}>
                        {data.map((item, index) => (
                            <ProductCard
                                item={item}
                                key={index}
                                className='col-span-1'
                            />
                        ))}
                    </div>
                </div>
                <Pagination
                    setShowCount={setShowCount}
                    setSorting={setSorting}
                    defaultShow={showCount}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    totalDataLength={productDatabase.length}
                    currentSorting={sorting}
                />
            </main>
            <Subscribe />
        </MainLayout>
    )
}
