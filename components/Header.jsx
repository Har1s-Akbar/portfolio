import React from 'react'
import {Typography, Avatar, Image} from 'antd'
import { urlFor } from '../lib/sanity'

function Header({data}) {
  
  const {firsttext, image,name,secondtext} = data?.headerData[0]
  
  return (
    <section className='lg:grid lg:grid-cols-2'>
      <div className='flex flex-col lg:w-1/2 sm:w-5/6 sm:mt-20 lg:mt-72 m-auto'>
      <Avatar size={100}>{name}</Avatar>
      <Typography.Title className='my-10' type="secondary" style={{color: "snow"}} level={3}>{firsttext}</Typography.Title>
      <Typography.Title type="secondary" className='my-3' level={4} style={{color: "snow"}}>{secondtext}</Typography.Title>
      </div>
      <div className='lg:mt-32 sm:mt-10'>
        <img className='lg:w-9/12 sm:w-full' src={urlFor(image)} />
      </div>
    </section>
  )
}

export default Header