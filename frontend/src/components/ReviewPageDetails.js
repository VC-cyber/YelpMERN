import { useReviewsContext } from "../hooks/useReviewsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {useNavigate} from 'react-router-dom'

const ReviewPageDetails = ({review}) => {
    const {dispatch } = useReviewsContext()
    const navigate = useNavigate()
    const handleClick = async () => {
        console.log(review)
        const response = await fetch('/api/reviews/' + review._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok) {
            console.log('review deleted:', json)
            dispatch({type: 'DELETE_REVIEW', payload: json})
            navigate('/')
        }

        if(!response.ok) {
            console.log('error deleting review:', json)
        }

    }
    //add suffix to the date "ago"
    return (
        <div className= "review-page-details">
            <h4>{review.restaurantName}</h4>
            <p><strong>rating (out of 10)</strong> {review.rating}</p>
            <p><strong>description </strong> {review.description}</p>
            <p><strong>city </strong> {review.city}</p>
            <p><strong>state </strong> {review.state}</p>
            <p><strong>groupchat </strong> {review.groupchats}</p>
            <p><strong> photo </strong> {review.photo}</p>
            <p>{formatDistanceToNow(new Date(review.createdAt), {addSuffix: true})}</p> 
            <span className = 'material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default ReviewPageDetails