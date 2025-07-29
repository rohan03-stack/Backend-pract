import React from 'react'

export const Login = () => {
  return (
    <>
    <form action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='name' /> <br />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password' /> <br />
          <button type='submit'>Submit</button>
    </form>
    </>
  )
}
