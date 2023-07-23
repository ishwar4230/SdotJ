import React from 'react'
import "./Card.css"

const Card= () => {
  return (
    <div className='card'>
        <img src="/images/Card.jpg" className='card-img' alt=""/>
        <div className='card-body'>
            <h1 className='card-title'>NYC</h1>
            <p className='card-sub-title'>New York City</p>
            <p className='card-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus hic ratione. Suscipit harum corporis ut consequatur, eligendi, quam, dolor facilis accusamus quae ea fuga eum vitae beatae consectetur hic?</p>

            <button className='card-btn'>Book Tour</button>
        </div>
    </div>
  )
}

export default Card;