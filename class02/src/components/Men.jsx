import React from 'react'

const Men = ({product}) => {
    const{title,price,categories}=product;
  return (
    <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>{categories}</h2>
    </div>
  )
}

export default Men