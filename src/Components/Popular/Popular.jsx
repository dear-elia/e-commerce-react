import React, { useState } from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {

    //weekly best filtering 
    const[selectedCategory, setSelectedCategory] = useState("All");


    const filteredProducts = selectedCategory === "All" 
    ? data_product 
    : data_product.filter(item => item.category === selectedCategory);


  return (
    <div className='popular'>
        <h1>Weekly BEST</h1>
        <ul className='item-category'>

            {["All", "Dress", "Outer", "Top", "Acc/Bag", "Shoes"].map((cat) => (
              <li 
                key={cat} 
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
        </ul>

        <div className='popular-item'>
            {filteredProducts.map((item,i)=>(
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            ))}
        </div>
    </div>
  )
}

export default Popular