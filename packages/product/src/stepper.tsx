import { MouseEventHandler } from 'react'

interface StepperProps {
  qty: number
  decrementQty: MouseEventHandler
  incrementQty: MouseEventHandler
}

const Stepper = ({ qty, decrementQty, incrementQty }: StepperProps) => {
  return (
    <div className="mds-product-quantity">
      <button onClick={decrementQty} className="lg:f-32-fw-400-lh-14 sm:f-13-fw-500-lh-14">
        -
      </button>
      <input readOnly type="text" value={qty} className="lg:f-32-fw-400-lh-14 sm:f-10-fw-500-lh-14" />
      <button onClick={incrementQty} className="lg:f-32-fw-400-lh-14 sm:f-13-fw-500-lh-14">
        +
      </button>
    </div>
  )
}

export default Stepper
