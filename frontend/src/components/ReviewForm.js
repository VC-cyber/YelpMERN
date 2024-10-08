import { useState } from 'react'
import { useReviewsContext } from "../hooks/useReviewsContext"

const ReviewForm = () => {
  const {dispatch} = useReviewsContext()
  const [restaurantName, setRestaurantName] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [groupchats, setGroupchats] = useState('')
  const [photo, setPhoto] = useState('')
  //const []
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const review = {restaurantName, rating, description, city, state, groupchats}
    
    const response = await fetch('/api/reviews', { //change workouts to reviews
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setRestaurantName('')
      setRating('')
      setDescription('')
      setCity('')
      setState('')
      setGroupchats('')
      setPhoto('')
      setEmptyFields([])
      console.log('new review added:', json)
      dispatch({type: 'CREATE_REVIEW', payload: json}) //change later
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Review</h3>

      <label>Restaurant Name:</label>
      <input 
        type="text" 
        onChange={(e) => setRestaurantName(e.target.value)} 
        value={restaurantName}
        className = {emptyFields.includes('restaurantName') ? 'error' : ''}
      />

      <label>Rating(out of 10):</label>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        className = {emptyFields.includes('rating') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className = {emptyFields.includes('description') ? 'error' : ''}
      />

      <label>City:</label>
      <input 
        type="text" 
        onChange={(e) => setCity(e.target.value)} 
        value={city}
        className = {emptyFields.includes('city') ? 'error' : ''}
      />

      <label>State:</label>
      <input 
        type="text" 
        onChange={(e) => setState(e.target.value)} 
        value={state}
        className = {emptyFields.includes('state') ? 'error' : ''}
      />

      <label>Groupchats:</label>
      <input 
        type="text" 
        onChange={(e) => setGroupchats(e.target.value)} 
        value={groupchats}
        className = {emptyFields.includes('groupchats') ? 'error' : ''}
      />  

      <label>Photo of your food:</label>
      <input 
        type="file" 
        accept = "image/*"
        capture="environment"
        onChange={(e) => setPhoto(e.target.value)} 
        value={photo}
        className = {emptyFields.includes('photo') ? 'error' : ''}
      />   


      <button>Add a Review</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ReviewForm