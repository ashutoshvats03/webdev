import React from 'react'
import "./card.css"

function card(props) {
  return (
    <div className='card'>
      <img src="https://hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565-scaled.jpg" alt="" width={233}/>

      <div style={{color:"white", background:"blue"}}>{props.title}</div>
    </div>
  )
}

export default card
