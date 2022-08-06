import React from 'react'
import {Card, Image, Dropdown, Button, Typography} from 'antd'
import { urlFor } from '../lib/sanity'

function About({data}) {
  const {description,image,title} = data.aboutData[0]
  
  return (
    <section className='my-10'>
      <Typography.Title className='text-center' style={{color: "wheat"}} level={3}>About</Typography.Title>
      <div>
        <Typography.Title level={5} className='text-center my-10' style={{color: 'turquoise'}}>{title[3]}</Typography.Title>
        <Typography.Paragraph style={{color:"turquoise"}} className="lg:w-1/3 sm:w-11/12 my-5 m-auto text-base text-center" type="secondary">{description[3]}</Typography.Paragraph>
      </div>
      <section className='lg:grid lg:grid-cols-2 lg:grid-rows-3'>
      <div className='flex items-center'>
        <Image width={700} src={urlFor(image[0])}/>
        <div className='flex flex-col'>
        <Typography.Title style={{color: 'snow'}} level={5}>{title[0]}</Typography.Title>
        <Typography.Paragraph type="secondary" style={{color: 'snow'}} className="w-11/12 text-base">{description[0]}</Typography.Paragraph>
        </div>
      </div>
      <div className='flex items-center row-start-2 col-start-2'>
        <Image width={400} src={urlFor(image[1])}/>
        <div>
        <Typography.Title style={{color: 'silver'}}  level={5}>{title[1]}</Typography.Title>
        <Typography.Paragraph type='secondary' style={{color:'silver'}} className='w-11/12 text-base'>{description[1]}</Typography.Paragraph>
        </div>
      </div>
      <div className='flex items-center flex-col row-start-3 col-span-2 mt-10'>
        <Typography.Title style={{color: "silver"}}>{title[2]}</Typography.Title>
        <Typography.Paragraph type='secondary' style={{color:"teal"}} className='lg:w-1/3 sm:w-5/6 text-center sm:text-base lg:text-xl'>{description[2]}</Typography.Paragraph>
      </div>
      </section>
    </section>
  )
}

export default About