import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard/FeatureCard'
import Icon1 from '@/Public/icon1.png'
import Icon2 from '@/Public/icon2.png'
import Icon3 from '@/Public/icon3.png'
import Icon4 from '@/Public/icon4.png'
import Icon5 from '@/Public/icon5.png'

const featureCards = [
  {
    image: Icon1,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
  {
    image: Icon2,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
  {
    image: Icon3,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
  {
    image: Icon4,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
  {
    image: Icon5,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
  {
    image: Icon2,
    title: "Email Subscription",
    content:" A feature that allows users to opt-in and receive regular updates, newsletters, or promotions via email, helping businesses."
  },
]

const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] '>
      {/* make a reusable component its Section Heading*/}
      <SectionHeading headingMini= "Ideal solution for you" headingPrimary="Explore Ultimate Features" 
      />
      <div className='pt-[5rem] pb-[1rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
      { featureCards.map((item, index) => (
  <div key={index}
  data-aos="zoom-in" 
  data-aos-anchor-placement="top-center"
   data-aos-delay={index * 200}>
    {/* Reusable component - Feature card */}
    <FeatureCard image={item.image.src} title={item.title} content={item.content} />
  </div>
))}

      </div>

    </div>
  )
}

export default Features