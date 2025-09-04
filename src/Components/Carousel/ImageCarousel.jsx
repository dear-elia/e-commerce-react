import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import image1 from '../Assets/carousel_1.jpg'
import image2 from '../Assets/carousel_2.jpg'
import image3 from '../Assets/carousel_3.jpg'

import './ImageCarousel.css';

const ImageCarousel = () => {
    const settings = {
        infinite: true,        // Allows the carousel to loop infinitely
        speed: 500,            // Transition speed between images (in ms)
        slidesToShow: 1,       // Number of slides to show at once
        slidesToScroll: 1,     // Number of slides to scroll at once
        autoplay: true,        // Enable automatic transition
        autoplaySpeed: 3000,   // Time delay between transitions (in ms)
        dots: true,            // Show pagination dots
        arrows: true,
        pauseOnHover: true,           // Show left/right navigation arrows
      };
  return (
    <div className='carousel-container'>
        <Slider {...settings}>
        <div>
            <img src={image1} alt="banner1"/>
        </div>

        <div>
            <img src={image2} alt="banner2"/>
        </div>

        <div>
            <img src={image3} alt="banner3"/>
        </div>
        </Slider>

    </div>
  )
}

export default ImageCarousel