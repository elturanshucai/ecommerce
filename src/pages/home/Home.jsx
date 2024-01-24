import React from 'react'
import Hero from './container/hero/Hero'
import NewArrivals from './container/newArrivals/NewArrivals'
import Newness from './container/newness/Newness'
import PopularCategories from './container/popularCaregories/PopularCategories'
import Trending from './container/trending/Trending'
import DiscountedProducts from './container/discounted/DiscountedProducts'
import GetApp from './container/getAppSection/GetApp'
import About from './container/about/About'
import Subscribe from './container/subscribe/Subscribe'
import MainLayout from '../../components/MainLayout'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <MainLayout>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Createx shop clone developed by Elturan." />
            </Helmet>
            <Hero />
            <NewArrivals />
            <Newness />
            <PopularCategories />
            <Trending />
            <DiscountedProducts />
            <GetApp />
            <About />
            <Subscribe />
        </MainLayout>
    )
}
