
import { useParams } from 'react-router-dom'
import { useReviewsContext } from "../hooks/useReviewsContext"
import ReviewPageDetails from "../components/ReviewPageDetails"

const ReviewPage = () => {
    const {id} = useParams()
    const {reviews} = useReviewsContext() 
    const review = reviews.find(review => review._id === id)   
    return (
        <div>
            <h1>Review Page </h1>
            <ReviewPageDetails review={review} key={review._id} />
        </div>
    )
}

export default ReviewPage