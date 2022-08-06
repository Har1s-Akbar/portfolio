import React from 'react'
import {useState} from 'react'
import { client, urlFor } from '../lib/sanity'
import {Card, Typography, Image} from 'antd'
import { Nav } from '../components'

const tabs = [
  {
    key: 'description',
    tab: 'Description',
  },
  {
    key : 'problem',
    tab: 'Problem',
  },
];


function Slug(detaildata) {
  const [active, setActive]= useState('description')
  const onchange = (key) =>{
    setActive(key)
  }
  const content = {
    description:<section className='lg:grid lg:grid-cols-2'>
      <img className='lg:mt-10 lg:ml-10 lg:w-9/12 sm:w-full' src={urlFor(detaildata.detaildata.mainImage)}/>
      <div>
        <h1 className='text-center lg:text-2xl sm:text-base sm:my-4'>{detaildata.detaildata.title}</h1>
        <Typography.Title level={4}>Description:-</Typography.Title>
        <Typography.Paragraph>{detaildata.detaildata.description}</Typography.Paragraph>
        <Typography.Title level={4}>Features:-</Typography.Title>
        <Typography.Paragraph>{detaildata.detaildata.features}</Typography.Paragraph>
      </div>
    </section>,
    problem: <section className='lg:w-9/12 sm:11/12 m-auto'>
      <Typography.Title level={3}>Problems:-</Typography.Title>
      <Typography.Paragraph type='secondary'>I faced during the Project</Typography.Paragraph>
      <Typography.Paragraph className='text-base'>{detaildata.detaildata.body[0].children[0].text}</Typography.Paragraph>
      <Typography.Paragraph className='text-base'>{detaildata.detaildata.body[1].children[0].text}</Typography.Paragraph>
      <Typography.Paragraph className='text-base'>{detaildata.detaildata.body[2].children[0].text}</Typography.Paragraph>
      <Typography.Paragraph className='text-base'>{detaildata.detaildata.body[3].children[0].text}</Typography.Paragraph>
      <section>

      </section>
    </section>,
  };

  return (
    <section className='bg-zinc-800 lg:h-screen sm:h-full overflow-hidden'>
      <Nav/>
      <Card style={{backgroundColor: "aqua",width: '90%', margin: 'auto', marginTop: "5rem"}} title={detaildata.detaildata.title} extra={<a style={{color: "teal"}} href={detaildata.detaildata.link}>Visit {detaildata.detaildata.title}</a>} tabList={tabs} activeTabKey={active} onTabChange={(key)=> {onchange(key)}}>
        {content[active]}
      </Card>
    </section>
  )
}

export const getStaticPaths = async() => {
  const query = `*[ _type == "product"]{
    slug {
      current
    }
  }`
  const product = await client.fetch(query);
  const paths = product?.map((item)=> ({
    params: {slug: item.slug.current}
  }))
  return{
    paths,
    fallback: 'blocking'
  }
};
export const getStaticProps = async({params : {slug}}) =>{
const detailquery = `*[_type == "post" && slug.current == '${slug}'][0]`
const detaildata = await client.fetch(detailquery)

return{
  props: {
    detaildata
  }
}
}

export default Slug