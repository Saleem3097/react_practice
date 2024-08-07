import {  useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
   const [excuse, setExcuse]= useState([]);

  useEffect(()=>{fetchApi()}, [])

   const fetchApi = (category)=>{
      axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then(
        (res)=>{
          console.log(res.data);
          setExcuse(res.data);
        }
      )
   }
   return (
   <div className='App'>
      <div className='button'>
        <button onClick={()=>fetchApi("party")}>Party</button>
        <button onClick={()=>fetchApi("family")}>Family</button>
        <button onClick={()=>fetchApi("office")}>Office</button>
      </div>
      <div className='listData'>
          {excuse.map(((data, index)=>(
              <h1 key={index}>
                  {data.excuse}
              </h1>
          )))}
      </div>
    </div>
  );
}

export default App;
