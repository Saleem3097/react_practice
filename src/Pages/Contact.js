import React, { useContext } from 'react'
import { Nav } from './Nav'
import { AppContext } from '../App'


const Contact = () => {
   const {username} = useContext(AppContext);
  return (
    <div><h1>This is Contact Page and user is : {username}</h1>
      <Nav/>
    </div>

  )
}

export default Contact