import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'

interface CarouselProps {
  images: { src: string; alt: string }[]
  showStatus: boolean
  showIndicators: boolean
  title: string
}

const CarouselDefault = ({ images, showStatus, showIndicators, title }: CarouselProps) => {
  return (
    <div className="mds-products-left-section">
      <Carousel showStatus={showStatus} showIndicators={showIndicators}>
        {images &&
          images.length &&
          (images.map((image, index: number) => {
            return <img key={'carousel-image' + index} src={image.src} alt={image.alt} />
          }) as any)}
      </Carousel>
      <div className="mds-product-view-thumnail">
        <div className="mds-product-short-details">{title}</div>
      </div>
    </div>
  )
}

export default CarouselDefault
