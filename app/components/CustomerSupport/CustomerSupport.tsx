import Image from 'next/image'
import React from 'react'
import SupportImage from '@/Public/support.jpg'
import { CheckIcon } from '@heroicons/react/16/solid'

const CustomerSupport = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
            <div 
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className='order-2 lg:order-1'>
                <Image src={SupportImage} alt='support' />
            </div>
            <div className='order-1 lg:order-2'>
                <h1
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem] '>
                Customer support is our main priority with their hundred percent satisfaction.
                </h1>
                <p
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                 className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] '>
                A reliable and responsive customer support team ensures timely assistance, addressing client queries and technical issues to enhance user satisfaction and strengthen client relationships.
                </p>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
                className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600' />
                    <p className='text-[17px] text-[#02073e] font-[500] '>Medical and Vision</p>
                </div>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="800"
                className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600' />
                    <p className='text-[17px] text-[#02073e] font-[500] '>Life Insurance</p>
                </div>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1000"
                className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600' />
                    <p className='text-[17px] text-[#02073e] font-[500] '>Great Work Life Balance</p>
                </div>
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay="1200"
                className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-600' />
                    <p className='text-[17px] text-[#02073e] font-[500] '>24x7 Customer Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerSupport