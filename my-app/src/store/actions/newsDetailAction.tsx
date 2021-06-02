import {Dispatch} from "redux";
import {NewsDetailDispatchTypes, NEWS_DETAIL_LOADING, NEWS_DETAIL_FAIL, NEWS_DETAIL_SUCCESS} from "./newsDetailActionType";
import axios from "axios";

export const GetNewsDetail = (title: string) => async (dispatch: Dispatch<NewsDetailDispatchTypes>) => {

  try {
    let titleURI = encodeURIComponent(title)
    dispatch({type: NEWS_DETAIL_LOADING})
    
    const res = await axios.get(`
    http://newsapi.org/v2/everything?sources=techcrunch&qInTitle=("${titleURI}")&apiKey=${process.env.REACT_APP_API_KEY}`)
    
    dispatch({
      type: NEWS_DETAIL_SUCCESS,
      payload:res.data
    })
  } catch (error) {
    dispatch({
      type:NEWS_DETAIL_FAIL
    })
  }
}