import React from 'react'

import ToyCard from './ToyCard'

let toysArray = [
  {name: "Woody", src: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png", likes: 5},
  {name: "Buzz Lightyear", src: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png", likes: 8},
  {name: "Mr. Potato Head", src: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217", likes: 3}
]

export default function ToysContainer() {
  return(
    <div id="toy-container">
      {toysArray.map(toyObj => <ToyCard key={toyObj.name} name={toyObj.name} img={toyObj.src} likes={toyObj.likes}/>)}
    </div>
  )
}
