import React from 'react'
import data_product from '../Assets/data'
import Item from '../Items/Item'
import './InstagtramLink.css'

const InstagramLink = () => {
  return (
    <div className='insta-link'>
      <h1>@dear_elia.official</h1>
      <div className='item-insta'>
        {data_product.map((item, i) => (
          <figure className="ig-item" key={i}>
            <img src={item.image} alt="" loading="lazy" />
          </figure>
        ))}
      </div>  
    </div>
  )
}

export default InstagramLink