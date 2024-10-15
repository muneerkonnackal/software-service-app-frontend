import React from 'react'
import CompanyImage from'@/Public/customer.png'
import Image from 'next/image'

const Company = () => {
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e] w-[90%] mx-auto'>Company who also worked with us</h1>
        <p className='w-[80%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] md:text-center text-gray-950 opacity-80 text-justify '>
        These collaborations are a testament to our commitment to excellence, innovation, and delivering exceptional results. By choosing to work with us, these top-tier organizations trusted our expertise to bring their visions to life, and we’re proud to have played a role in their success.
        </p>
        <p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600'>
            Explore Details
        </p>

        <div className='mt-[2rem] text-center w-[90%] md:w-[80%] mx-auto '>
            <Image src={CompanyImage} alt='company' />
        </div>
    </div>
  )
}

export default Company