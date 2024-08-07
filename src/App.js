import {  useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
   const [catApi, setCatApi]= useState([]);

  useEffect(()=>{fetchApi()}, [])

   const fetchApi = ()=>{
       axios.get(`https://api.thecatapi.com/v1/images/search`).then(
        (res)=>{
          console.log(res.data);
          setCatApi(res.data);
        }
      )
   }
   return (
   <div className='App'>
      <div className='button'>
       <button onClick={fetchApi}>Who's the Cat ?</button>
      </div>
      <div className='listData'>
          {catApi.map(((data, index)=>(
                        <img
                        key={index}
                        src={data.url}
                        alt={`Cat ${index}`}
                        style={{ width:"100%", height:"60%" }}
                      />
          )))}
      </div>
    </div>
  );
}

export default App;
