import React from 'react'
import {Typography,Card, Button} from 'antd'
import { urlFor } from '../lib/sanity'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'

function Projects({data}) {
  return (
    <section className='lg:grid lg:grid-cols-2 m-auto w-11/12 my-10'>
        <Typography.Paragraph type='secondary' className='col-span-2 text-base sm:w-5/6 lg:w-1/2 text-center m-auto' style={{color: 'peachpuff'}}>Theses are the projects i have done, These are the real life projects. These projects require deep understanding of the JS and React</Typography.Paragraph>
        {data?.map((item, index)=> 
        <Card key={index} className='lg:w-1/2 m-auto' cover={<img src={urlFor(item.image)} alt={item.title}/>} style={{height: '90%', margin: 'auto', marginTop: '2rem'}} hoverable>
            <Meta title={item.title} description={item.description} />
            <Link href={`${item.slug.current}`}>
            <Button className='lg:my-5 sm: mt-3'>Click to See more</Button>
            </Link>
        </Card>
        )}
    </section>
  )
}

export default Projects