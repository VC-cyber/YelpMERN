import { useEffect } from "react"
import { useReviewsContext } from "../hooks/useReviewsContext"

// components
import ReviewDetails from "../components/ReviewDetails"
import ReviewForm from "../components/ReviewForm"

const Home = () => {
  const {reviews, dispatch} = useReviewsContext()

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_REVIEWS', payload: json})
      }
    }

    fetchReviews()
  },[dispatch])

  return (
    <div className="home">
      <div className="reviews">
        {reviews && reviews.map(review => ( // if reviews is not null, then map over it
          <ReviewDetails review={review} key={review._id} />
        ))}
      </div>
      <ReviewForm />
    </div>
  )
}

export default Home