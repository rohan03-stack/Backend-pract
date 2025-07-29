import React, { useState } from 'react'
import { Login } from './Login'

export const SignUp = () => {
  
  
  return (
    <>
    <form action="" >
      <label htmlFor="">Name</label>
      <input type="text" name="name" id="" placeholder='name' /> <br />
      <label htmlFor="">Age</label>
      <input type="text" placeholder='number' /> <br />
      <label htmlFor="">Email</label>
      <input type="email" name="" id=""  placeholder='email'/> <br />
      <label htmlFor="">Password</label>
      <input type="password" placeholder='password' /> <br />
       <button>Submit</button>
    </form>


    </>
  )
}
