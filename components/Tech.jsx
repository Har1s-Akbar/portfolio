import React from 'react'
import {Typography, Image, Card} from 'antd'
import {urlFor} from "../lib/sanity"
import Meta from 'antd/lib/card/Meta'
import Projects from './Projects'

function Tech({data}) {
  const {image,name,title, description} = data.techData[0]
  return (
    <section>
      <Typography.Title level={1} style={{color: "linen"}} className="text-center">Expertise</Typography.Title>
      <Typography.Title level={3} style={{color: "linen"}} className="text-center my-10">{name}</Typography.Title>
      <section className='grid grid-cols-3 my-10 gap-5'>
      <div className='flex justify-items-center flex-col items-center'>
        <Image alt={title[0]} src={urlFor(image[0])} width={50}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[0]}</Typography.Paragraph>
      </div>
      <div className='flex justify-items-center flex-col items-center'>
        <Image alt={title[1]} src={urlFor(image[1])} width={50}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[1]}</Typography.Paragraph>
      </div>
      <div className='flex justify-items-center flex-col items-center'>
        <Image src={urlFor(image[2])} alt={title[2]} width={50}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[2]}</Typography.Paragraph>
      </div>
      <div className='flex justify-items-center flex-col items-center'>
        <Image src={urlFor(image[3])} width={50} alt={title[3]}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[3]}</Typography.Paragraph>
      </div>
      <div className='flex justify-items-center flex-col items-center'>
        <Image src={urlFor(image[4])} width={50} alt={title[4]}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[4]}</Typography.Paragraph>
      </div>
      <div className='flex justify-items-center flex-col items-center'>
        <Image src={urlFor(image[5])} width={50} alt={title[5]}/>
        <Typography.Paragraph style={{color: "paleturquoise"}}>{title[5]}</Typography.Paragraph>
      </div>
      <div className='col-span-3 text-center sm:w-5/6 lg:w-1/3 m-auto my-5'>
        <Typography.Paragraph style={{color: "paleturquoise"}} className='text-base'>{description}</Typography.Paragraph>
      </div>
      </section>
      <section>
        <Typography.Title level={4} className='text-center' style={{color:'linen'}}>Projects</Typography.Title>
        <Projects data={data.productData}/>
      </section>
    </section>
  )
};

export default Tech