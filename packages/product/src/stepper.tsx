import { MouseEventHandler } from "react"

interface StepperProps {
    qty: number
    decrementQty: MouseEventHandler
    incrementQty: MouseEventHandler
}

const Stepper = ({ qty, decrementQty, incrementQty }: StepperProps) => {
    return (
        <div className="mds-product-quantity">
            <button onClick={decrementQty}>-</button>
            <input readOnly type="text" value={qty} />
            <button onClick={incrementQty}>+</button>
        </div>
    )
}

export default Stepper
