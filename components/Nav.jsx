import React from 'react'
import {Menu} from 'antd'
import {useState} from 'react'

const item = [
    {
        label:(
          <a href="\">Home</a>
        ),
        key: 'home',
    },
]

function Nav() {
const [active, setActive] = useState('home')

const onchange = (e) =>{
    setActive(e.key);
}

  return (
    <Menu items={item} mode="horizontal" style={{display: 'flex', justifyContent: 'center', backgroundColor:"whitesmoke"}} onClick={onchange} selectedKeys={[active]}/>
  )
}

export default Nav