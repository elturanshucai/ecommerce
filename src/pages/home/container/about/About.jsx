import React from 'react'
import Services from './Services'
import Social from './Social'
import BlogSection from './BlogSection'

export default function About() {
    return (
        <section className='w-[95%] md:w-4/5 mx-auto py-28'>
            <Services />
            <Social />
            <BlogSection />
        </section>
    )
}
