import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const links = [
        {path: "/",title:"Home"},
          {path: "/login",title:"login"},
            {path: "/signin",title:"signin"}
    ];
    const defaltstyle =  {
        color: "white"
    }

    const activeStyle = {
        color: "tomoto"
    }
  return (
    <>
   <div style={{ border: "1px solid red", padding: "10px ", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
            {
                links.map((data) => (
                    <NavLink style={({ isActive }) => {
                        return isActive ?  activeStyle : defaltstyle;
                    }} key={data.path} to={data.path} end >
                        {data.title}
                    </NavLink>
                ))
            }
        </div>
    </>
    
  )
}
