import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const countryOptions = [
    {
        value: 'azerbaycan', label: 'Azerbaycan', cities: [
            { value: 'xacmaz', label: 'Xacmaz' },
            { value: 'baki', label: 'Baki' },
            { value: 'quba', label: 'Quba' }
        ]
    },
    {
        value: 'turkiye', label: 'Turkiye', cities: [
            { value: 'istanbul', label: 'Istanbul' },
            { value: 'ankara', label: 'Ankara' },
            { value: 'adana', label: 'Adana' }
        ]
    },
    {
        value: 'ispaniya', label: 'Ispaniya', cities: [
            { value: 'barcelona', label: 'Barcelona' },
            { value: 'madrid', label: 'Madrid' }
        ]
    },
    {
        value: 'argentina', label: 'Argentina', cities: [
            { value: 'buneos aires', label: 'Buenos Aires' }
        ]
    }
]

export default function ShippingBilling() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: {},
        city: {},
        address: '',
        zipCode: ''
    })
    const [cities, setCities] = useState([])

    const changeCountry = (item) => {
        setData({ ...data, country: item })
    }

    const changeCity = (item) => {
        setData({ ...data, city: item })
    }

    const getCities = () => {
        if (data.country) {
            for (let i = 0; i < countryOptions.length; i++) {
                if (countryOptions[i].value === data.country?.value) setCities(countryOptions[i].cities)
            }
        } else {
            setCities([])
            setData({ ...data, city: {} })
        }
    }

    useEffect(() => {
        getCities()
    }, [data.country])
    return (
        <div className='pt-8'>
            <h1 className='text-2xl font-bold mb-6'>2.Shipping & Billing Address</h1>
            <form className='grid grid-cols-2 mb-8 gap-6'>
                <div className='col-span-1 flex flex-col gap-6'>
                    <div>
                        <label htmlFor="firstname" className='block mb-2'>First Name</label>
                        <input
                            type="text"
                            placeholder='Your first name'
                            id='firstname'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2'>Email</label>
                        <input
                            type="text"
                            placeholder='Your working enail'
                            id='email'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='block mb-2'>Country</label>
                        <Select
                            onChange={(item) => changeCountry(item)}
                            options={countryOptions}
                            isClearable
                            placeholder='Choose your country'
                            className='select'
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className='block mb-2'>Address</label>
                        <input
                            type="text"
                            placeholder='Your address'
                            id='address'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, address: e.target.value })}
                        />
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-6'>
                    <div>
                        <label htmlFor="lastName" className='block mb-2'>Last Name</label>
                        <input
                            type="text"
                            placeholder='Your last name'
                            id='lastName'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, lastName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className='block mb-2'>First Name</label>
                        <input
                            type="text"
                            placeholder='Your phone number'
                            id='phone'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='block mb-2'>City</label>
                        <Select
                            onChange={(item) => changeCity(item)}
                            options={cities}
                            isClearable
                            placeholder='Choose your city'
                            className='select'
                        />
                    </div>
                    <div>
                        <label htmlFor="zipCode" className='block mb-2'>ZIP Code</label>
                        <input
                            type="text"
                            placeholder='Your ZIP Code'
                            id='zipCode'
                            className='border-2 rounded-md px-4 py-3 text-gray-500 outline-blue-500 w-full'
                            onChange={e => setData({ ...data, zipCode: e.target.value })}
                        />
                    </div>
                </div>
            </form>
            <div className='flex gap-3 items-center'>
                <input
                    type="checkbox"
                    className='w-4 h-4 accent-primary'
                />
                <p className='text-[#424551]'>Billing and Shipping details are the same</p>
            </div>
        </div>
    )
}
