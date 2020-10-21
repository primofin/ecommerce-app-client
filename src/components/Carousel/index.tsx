import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './carousel.scss'

export default function Carousel() {
  const intervalTime = 2000
  const responsive = {
    500: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  }

  const imgsArr = [
    'https://staticpages.mngbcn.com/homes/images/fw20/mm/octubre/newnow_she_octubre_3_2.jpg?imwidth=476&imdensity=1',
    'https://staticpages.mngbcn.com/homes/images/fw20/he/septiembre/otherbrands_he_0920.jpg?imwidth=628&imdensity=1',
    'https://staticpages.mngbcn.com/homes/images/fw20/kids/septiembre/otherbrand_nino.jpg?imwidth=628&imdensity=1',
    'https://staticpages.mngbcn.com/homes/images/fw20/kids/septiembre/otherbrand_nina.jpg?imwidth=628&imdensity=1',
    'https://staticpages.mngbcn.com/homes/images/fw20/violeta/octubre/otherbrands_violeta_1020.jpg?imwidth=628&imdensity=1',
  ]
  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={intervalTime}
        responsive={responsive}
        disableButtonsControls={true}
        infinite={true}
      >
        {imgsArr.map((img, index) => (
          <img key={index} src={img} className="sliderimg" alt="carousel-img" />
        ))}
      </AliceCarousel>
    </div>
  )
}
