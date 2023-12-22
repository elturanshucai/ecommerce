import React from 'react'
import Header from '../../components/header/Header'
import Hero from './container/hero/Hero'
import NewArrivals from './container/newArrivals/NewArrivals'
import Newness from './container/newness/Newness'
import PopularCategories from './container/popularCaregories/PopularCategories'
import Trending from './container/trending/Trending'
import DiscountedProducts from './container/discounted/DiscountedProducts'
import GetApp from './container/getAppSection/GetApp'
import About from './container/about/About'
import Subscribe from './container/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <NewArrivals />
            <Newness />
            <PopularCategories />
            <Trending />
            <DiscountedProducts />
            <GetApp />
            <About />
            <Subscribe />
            <Footer />
        </>
    )
}
