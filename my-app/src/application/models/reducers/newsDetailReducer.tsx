
import  {NewsDetailDispatchTypes, NewsDetailType, NEWS_DETAIL_SUCCESS, NEWS_DETAIL_FAIL, NEWS_DETAIL_LOADING} from "../actions/actionType/newsDetailActionType"

interface NewsDetailState {
  loading: boolean,
  newsDetail?: NewsDetailType
}

const initialState: NewsDetailState = {
  loading: false,
}

const newsDetailReducer = (state: NewsDetailState = initialState, action: NewsDetailDispatchTypes) : NewsDetailState => {
  switch (action.type) {
    
    case NEWS_DETAIL_FAIL: return {
      loading: false
    }
    case NEWS_DETAIL_LOADING: return {
      loading: true,
    }
    case NEWS_DETAIL_SUCCESS: return {
      loading: false,
      newsDetail: action.payload
    }
    default: 
      return state
  }
} 

export default newsDetailReducer