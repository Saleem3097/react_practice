import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import { useState, createContext } from 'react';

export const AppContext =  createContext();

function App() {
  const [username,setUsername]= useState("Saleem");
   return (
    <AppContext.Provider value={{username, setUsername}}>
    <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact username={username}/>}/>
        <Route path='/profile' element={<Profile username={username} setUsername={setUsername}/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </Router>
    </AppContext.Provider>
  );

  
}

export default App;
