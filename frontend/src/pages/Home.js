import { useEffect } from "react"
import { useReviewsContext } from "../hooks/useReviewsContext"

// components
import ReviewDetails from "../components/ReviewDetails"
import ReviewForm from "../components/ReviewForm"

const Home = () => {
  const {review, dispatch} = useReviewsContext()

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews')
      const json = await response.json()
      
      if (response.ok) {
        dispatch({type: 'SET_REVIEW', payload: json})
      }
    }

    fetchReviews()
    //console.log(reviews)
  },[dispatch])

  return (
    <div className="home">
      <div className="reviews">
        {review && review.map(review => ( // if reviews is not null, then map over it
          <ReviewDetails review={review} key={review._id} />
        ))}
      </div>
      <ReviewForm />
    </div>
  )
}

export default Home