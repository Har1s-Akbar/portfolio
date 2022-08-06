import React from 'react'
import {Col,Typography ,Row, } from 'antd'
import {FacebookFilled, RedditCircleFilled,LinkedinFilled,InstagramFilled, GithubOutlined} from '@ant-design/icons'

function footer() {
  return (
    <section className='h-96 bg-zinc-700'>
      <Typography.Title level={1} className='text-center p-2' style={{color: 'mintcream'}}>Any Question?</Typography.Title>
        <Row justify="center" align='start'>
          <Col xs={{span: 10}} lg={{span:5}} style={{marginTop: '2rem'}}>
            <h1 className='text-center sm:text-base lg:text-2xl text-white'>Contact Me </h1>
            <p type='secondary' className='text-center lg:text-base sm:text-sm text-white'>on Social Media </p>
            <div className='flex items-center flex-col'>
            <div className='my-2'>
            <a href='https://web.facebook.com/haris.akbar.69/'><FacebookFilled  style={{fontSize: "30px", color: "white"}}/></a>
            </div>
            <div className='my-2'>
              <a href="https://instagram.com/haris_akbar_95">
            <InstagramFilled style={{fontSize: "30px", color: "white"}}/>
              </a>
            </div>
            <div className='my-2'> 
            <RedditCircleFilled style={{fontSize: "30px", color: "white"}}/>
            </div>
            <div className='my-2'>
              <a href="https://www.linkedin.com/in/haris-ahmad-b2887b22b">
            <LinkedinFilled style={{fontSize: "30px", color: "white"}}/>
              </a>
            </div>
            </div>
          </Col>
          <Col sm={{span:10}} lg={{span:5}} style={{marginTop: '2rem'}}>
            <h1 className='text-center text-white lg:text-2xl sm:text-base'>Find Me</h1>
            <Typography.Paragraph type='secondary' className='text-center' style={{color: "mintcream"}}>on Other Platforms </Typography.Paragraph>
            <div className='flex items-center flex-col'>
              <div>
                <a href="https://github.com/Har1s-Akbar">
              <GithubOutlined style={{color: "white", fontSize: "30px"}} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default footer