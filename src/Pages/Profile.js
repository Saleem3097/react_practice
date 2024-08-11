import React, { useContext } from 'react'
import { Nav } from './Nav'
import { ChangeProfile } from './components/ChangeProfile'
import { AppContext } from '../App'


const Profile = () => {
  const {username} = useContext(AppContext);
  return (
    <div><h1>This is Profile Page and user is : {username}</h1>
    <Nav/>
    <ChangeProfile/>
    </div>
  )
}

export default Profile