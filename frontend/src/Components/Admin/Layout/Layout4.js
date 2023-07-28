import React from 'react'
import AdNav from '../AdNav'
import Chat from '../Chat'

function Layout4() {
  return (
    <div style={{display:"flex",margin:"0%"}}>
       
    <AdNav/>

   <div style={{width:"1320px"}}>
    
    <Chat />
    
   </div>
</div>
  )
}

export default Layout4