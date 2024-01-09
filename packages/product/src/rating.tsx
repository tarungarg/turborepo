import Rating from '@mui/material/Rating'

interface RatingProps {
  rating: number
}

const CustomRating = ({ rating }: RatingProps) => {
  return <Rating className="rating-class" name="read-only" value={rating} readOnly size="large" />
}

export default CustomRating
