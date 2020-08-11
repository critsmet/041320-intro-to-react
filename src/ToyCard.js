import React from 'react'

export default function ToyCard(props){
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img alt={props.name} src={props.img} className="toy-avatar"/>
      <p>{props.likes} Likes </p>
      <button className="like-btn">Like &lt;3</button>
    </div>
  )
}
