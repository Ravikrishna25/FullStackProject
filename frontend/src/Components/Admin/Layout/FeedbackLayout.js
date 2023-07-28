import React from 'react'
import Feedback from '../Feedback'
import AdNav from '../AdNav'

function FeedbackLayout() {
  return (
    <div style={{display:"flex",margin:"0%"}}>
      <div style={{position:"fixed"}}>

    <AdNav />
      </div>

   <div style={{marginLeft:"16%",marginTop:"20px",width:"37%"}} >
    {/* <h1>Feedback</h1> */}
        <Feedback />
    
   </div>
</div>
  )
}

export default FeedbackLayout