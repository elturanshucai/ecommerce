import React, { useEffect, useState } from 'react'
import HRDivider from '../../../components/HRDivider'

const promoCodes = [
    { code: 'ILK20', percent: 20 },
    { code: 'CREATEX', percent: 15 },
    { code: 'DIGITALHANDS', percent: 25 }
]

export default function OrderComplete({ subtotal, shippingCost }) {
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(6)
    const [orderTotal, setOrderTotal] = useState(0)
    const [promoCode, setPromoCode] = useState('')
    const [press, setPress] = useState(false)

    const discountGenerator = () => {
        let code = promoCodes.filter(item => item.code === promoCode)[0]
        if (!code) {
            setDiscount(0)
            return
        }
        let discountValue = (subtotal * code.percent / 100).toFixed(2)
        setDiscount(discountValue)
    }

    const orderTotalCounter = () => {
        setOrderTotal((Number(subtotal) + Number(tax) + Number(shippingCost) - discount).toFixed(2))
    }

    const taxCalculate = () => {
        setTax((subtotal / 50).toFixed(2))
    }

    useEffect(() => {
        orderTotalCounter()
    }, [subtotal, shippingCost, tax, discount])

    useEffect(() => {
        taxCalculate()
    }, [subtotal])
    return (
        <div>
            <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="promocode">Apply a promo code</label>
                <div className='flex mb-6'>
                    <input
                        type="text"
                        id="promocode"
                        className='outline-none border py-3 px-4 rounded-l-md w-3/5'
                        placeholder='Enter promo code'
                        onChange={e => setPromoCode(e.target.value)}
                    />
                    <button
                        onClick={discountGenerator}
                        className='rounded-r-md w-2/5 px-6 text-center bg-primary font-bold leading-[52px] text-white'
                    >
                        Apply
                    </button>
                </div>
                <div className='bg-[#F4F5F6]'>
                    <div className='p-6 font-bold text-2xl w-full'>Order totals</div>
                    <HRDivider />
                    <div className='py-4 px-6 flex flex-col gap-1'>
                        <p className='flex justify-between items-center font-bold'>
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span>Shipping costs:</span>
                            <span>${shippingCost}</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span>Discount:</span>
                            <span>{discount ? `$${discount}` : '-'}</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span>Estimated sales tax:</span>
                            <span>${tax}</span>
                        </p>
                    </div>
                    <HRDivider />
                    <div className='px-6 py-5 flex justify-between items-center font-bold text-xl'>
                        <span>Order total:</span>
                        <span>${orderTotal}</span>
                    </div>
                </div>
            </div>
            <button
                onMouseDown={() => setPress(true)}
                onMouseUp={() => setPress(false)}
                className={`w-full rounded-sm bg-primary transition-all text-white font-bold h-[52px] px-10 ${press ? 'opacity-75 scale-95' : 'opacity-100 scale-100'}`}
            >
                Complete order
            </button>
        </div>
    )
}
