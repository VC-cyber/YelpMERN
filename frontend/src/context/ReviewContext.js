import  {createContext, useReducer } from 'react'

export const ReviewsContext = createContext()

export const reviewsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_REVIEW':
            console.log(action.payload)
            return {
                review: action.payload
            }
        case 'CREATE_REVIEW':
            return {
                review: [action.payload, ...state.reviews]
            }
        case 'DELETE_REVIEW':
            return {
                review: state.reviews.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}
export const ReviewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reviewsReducer, {
        review: null
    })


    
    return(
        <ReviewsContext.Provider value = {{...state, dispatch}}>
            { children }
        </ReviewsContext.Provider>
    )
}