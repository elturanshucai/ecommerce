import React from 'react'
import Header from '../../components/header/Header'
import Hero from './container/hero/Hero'
import NewArrivals from './container/newArrivals/NewArrivals'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <NewArrivals />
        </>
    )
}
