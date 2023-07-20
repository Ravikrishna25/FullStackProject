import React from 'react'
import AdNav from './AdNav'

import { Outlet } from 'react-router-dom'
import Home from './Home'
function Layout() {
  return (
    <div style={{display:"flex",margin:"0%"}}>
       
        <AdNav/>

       <div >
        
        <Home />
       </div>
    </div>
  )
}

export default Layout