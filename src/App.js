import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';

const App = () => {
  return (
   
          <Routes>
            
            
            <Route path='/' element={<Dashboard/>} />
            <Route path='/profile' element={<Profile/>} />


            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Registration/>} />
          </Routes>
  
  )
}

export default App
