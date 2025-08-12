import React from 'react'
import{Routes, Route} from'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Signin } from '../Pages/Signin';


export const AllRoutes =() => {
  return <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
         <Route path='/login' element={<Login/>}> </Route>
          <Route path='/signin' element={<Signin/>}> </Route>
      </Routes>
    </div>
  </>
}
