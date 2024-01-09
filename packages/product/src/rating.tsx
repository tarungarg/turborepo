import Rating from '@mui/material/Rating';

interface RatingProps {
    rating: number;
}

const CustomRating = ({rating }: RatingProps) => {
    return (
		<Rating name="read-only" value={rating} readOnly />
	)
}

export default CustomRating