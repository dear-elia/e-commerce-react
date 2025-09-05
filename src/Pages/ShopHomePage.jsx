import React from 'react'
import ImageCarousel from '../Components/Carousel/ImageCarousel'
import Popular from '../Components/Popular/Popular'
import BestReview from '../Components/BestReview/BestReview'
import InstagramLink from '../Components/InstagramLink/InstagramLink'

const ShopHomePage = () => {
  return (
    <div>
        <ImageCarousel/>
        <Popular/>
        <BestReview/>
        <InstagramLink/>
    </div>
  )
}

export default ShopHomePage