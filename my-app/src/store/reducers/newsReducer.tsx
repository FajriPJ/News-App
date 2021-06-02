import  {NewsDispatchTypes, NewsType, NEWS_SUCCESS, NEWS_FAIL, NEWS_LOADING} from "../actions/newsActionType"

interface NewsState {
  loading: boolean,
  news?: NewsType
}

const initialState: NewsState = {
  loading: false,
}

const newsReducer = (state: NewsState = initialState, action: NewsDispatchTypes) : NewsState => {
  switch (action.type) {
    
    case NEWS_FAIL: return {
      loading: false
    }
    case NEWS_LOADING: return {
      loading: true,
    }
    case NEWS_SUCCESS: return {
      loading: false,
      news: action.payload
    }
    default: 
      return state
  }
} 

export default newsReducer