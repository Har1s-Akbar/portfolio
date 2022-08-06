import {Nav, Header, About, Tech, TimeLine, Footer} from '../components'
import {client} from '../lib/sanity'
import { motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import {useEffect} from 'react'


export default function Home(headerData) {  

  const control = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  const divvariant = {
    visible: {scale:1, x:0},
    hidden: {x:-1000},
  }
  return (
    <section className='bg-zinc-800 h-full overflow-hidden'>
      <Nav/>
      <Header data={headerData}/>
      <About data={headerData} />
      <Tech data={headerData}/>
      <TimeLine/>
      <Footer/>
    </section>
  )
};

export const getStaticProps = async() =>{
  const headerQuery = '*[ _type == "header"]'
  const headerData = await client.fetch(headerQuery)

  const aboutQuery = '*[ _type == "about"]'
  const aboutData = await client.fetch(aboutQuery)

  const techQuery = '*[ _type == "tech"]'
  const techData = await client.fetch(techQuery)

  const productQuery = '*[ _type == "product"]'
  const productData = await client.fetch(productQuery)

  return{
    props: {headerData, aboutData, techData, productData}
  }
}
