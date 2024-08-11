import React, { useState, useContext } from 'react'
import { AppContext } from '../../App';

export const ChangeProfile = () =>{
  const [newUserName, setNewUserName] = useState("")
  const {setUsername} = useContext(AppContext);

  return (
    <div>
      <h1>ChangeProfile</h1>
        <input onChange={(event)=>{setNewUserName(event.target.value)}} placeholder={newUserName}/>
        <button onClick={()=>setUsername(newUserName)}>Change Name</button>
    </div>
  )
}
