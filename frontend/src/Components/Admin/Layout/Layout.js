import React from 'react'
import AdNav from '../AdNav'

import { Outlet } from 'react-router-dom'
import Home from '../Home'
function Layout() {
  return (
    <div style={{display:"flex",margin:"0%"}}>
       
        <AdNav/>

       <div style={{width:"500px"}}>
        
        <Home />
        
       </div>
    </div>
    // <h1>hiii</h1>
  )
}

export default Layout