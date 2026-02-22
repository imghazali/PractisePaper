import React from 'react'
import Button from './Button'

const Card = ({heading,desc,label}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{heading}</h4>
      </div>
      <div className="card-desc">
        <p>{desc}</p>
      </div>
      <div className="card-bottom">
        <Button/>
      </div>
    </div>
  )
}

export default Card