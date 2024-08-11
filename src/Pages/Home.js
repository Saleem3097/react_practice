import React, { useContext } from 'react';
import { Nav } from './Nav';
import { AppContext } from '../App';


const Home = () => {
  const {username} = useContext(AppContext)
  return (
    <div>
      <h1>This is HomePage and user is : {username}</h1>
      <Nav/>
    </div>
  );
}

export default Home;
