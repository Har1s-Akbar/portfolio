import React from 'react'
import {Typography, Timeline, Image} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

function TimeLine() {
  return (
    <section className='mt-20'>
        <Typography.Title className='text-center' style={{color: "mintcream"}} type="secondary" level={3}>How I assess a Project?</Typography.Title>
        <Typography.Paragraph className='text-center' style={{color: "mintcream"}} type="secondary">How I make projects...</Typography.Paragraph>
        <div className='lg:w-1/3 sm:w-11/12 m-auto mt-20'>
            <Timeline mode="alternate">
                <Timeline.Item color="green" style={{color: "white"}}>Thoroughly going through the Project </Timeline.Item>
                <Timeline.Item color='red' style={{color: "white"}} >Breaking Down the project into small components</Timeline.Item>
                <Timeline.Item color='gray' style={{color: "white"}}>Searching the right dependencies and libraries for the project</Timeline.Item>
                <Timeline.Item style={{color: "white"}} >Start building the project</Timeline.Item>
            </Timeline>
        </div>        
    </section>
  )
}

export default TimeLine