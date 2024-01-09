'use client'
import { useState } from 'react'
import CustomRating from '../rating'
import Stepper from '../stepper'
import { ProductData } from '../interfaces/product'

const Content = ({ product }: { product: ProductData }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [qty, setQty] = useState(0)

  // function to show repetitive label data
  const showData = (label: string, data: string) => {
    return (
      <div className="mds-model">
        <span className="lg:f-18-fw-400-lh-14 sm:f-8-fw-400-lh-14">{label}:</span>{' '}
        <span className="lg:f-18-fw-300-lh-14 sm:f-8-fw-300-lh-14">{data}</span>
      </div>
    )
  }

  // function to calculate price
  const calculatePrice = (qty: number, price: number) => {
    return (qty * price).toFixed(2)
  }

  // function to set active index on size selection
  const onSizeSelection = (index: number) => {
    setActiveIndex(index)
  }

  // function to update quantity
  const updateQty = (option: string) => {
    if (option === 'increase') {
      setQty(qty + 1)
    } else {
      qty > 0 && setQty(qty - 1)
    }
  }

  const getClassNameForVariant = (i: string) => {
    return i == 'a'
      ? 'mds-size-single lg:f-18-fw-500-lh-14 sm:f-7-fw-500-lh-14'
      : 'mds-size-single lg:f-18-fw-300-lh-14 sm:f-7-fw-300-lh-14'
  }

  return (
    <div className="mds-products-right-section">
      <div className="mds-product-details-description">
        {showData('Brand', product.name)}
        {showData('Model', product.model)}
        {showData('Availability', product.availability)}

        <div className="mds-product-name lg:f-32-fw-500-lh-34 sm:f-13-fw-500-lh-14">{product.desc}</div>
        <div>
          <CustomRating rating={product.rating} />
        </div>
        <div className="mds-description-list">
          <ul className="mds-description-list-unstyled" style={{ listStyle: 'disc' }}>
            {product.featureList?.length
              ? product.featureList.map((feature: string) => (
                  <li key={feature} className="lg:f-18-fw-300-lh-24 sm:f-8-fw-300-lh-14">
                    {feature}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="mds-divider"></div>
        <div className="mds-size-container">
          {product.sizes?.length
            ? product.sizes.map((size: string, index: number) => {
                return (
                  <div
                    key={size + index}
                    onClick={() => onSizeSelection(index)}
                    className={
                      activeIndex === index
                        ? `${getClassNameForVariant('a')} mds-size-active`
                        : `${getClassNameForVariant('n')}`
                    }
                  >
                    {size}
                  </div>
                )
              })
            : null}
        </div>

        <div className="mds-divider"></div>
        <div className="mds-tex-title lg:f-16-fw-400-lh-14 sm:f-7-fw-300-lh-14">USD (incl. of all taxes)</div>
        {product.price?.actualPrice > product.price?.discountedPrice ? (
          <div className="mds-price-wrapper">
            <span className="mds-current-price lg:f-32-fw-400-lh-34 sm:f-13-fw-500-lh-14">
              ${qty ? calculatePrice(qty, product.price?.discountedPrice) : product.price?.discountedPrice}
            </span>
            <span className="mds-current-price mds-price-cutoff lg:f-24-fw-400-lh-14 sm:f-10-fw-500-lh-14">
              <del>${qty ? calculatePrice(qty, product.price.actualPrice) : product.price?.actualPrice}</del>
            </span>
          </div>
        ) : (
          <span className="mds-current-price">
            ${qty ? calculatePrice(qty, product.price?.discountedPrice) : product.price?.discountedPrice}
          </span>
        )}
        <div className="mds-product-details-footer">
          <Stepper qty={qty} decrementQty={() => updateQty('decrease')} incrementQty={() => updateQty('increase')} />
          <button className="mdc-button mdc-button--raised">
            <span className="mdc-button__label lg:f-18-fw-500-lh-14 sm:f-8-fw-500-lh-14">Buy Now</span>
          </button>
          <button className="mdc-button mdc-button--outlined">
            <span className="mdc-button__label lg:f-18-fw-500-lh-14 sm:f-8-fw-500-lh-14">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content
