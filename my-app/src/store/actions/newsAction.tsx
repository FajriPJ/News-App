import {Dispatch} from "redux";
import {NewsDispatchTypes, NEWS_LOADING, NEWS_FAIL, NEWS_SUCCESS} from "./newsActionType";
import axios from "axios";

export const GetNews = () => async (dispatch: Dispatch<NewsDispatchTypes>) => {

  try {
    dispatch({type: NEWS_LOADING})
    const res = await axios.get(`
    https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`)

    dispatch({
      type: NEWS_SUCCESS,
      payload:res.data
    })

  } catch (error) {
    dispatch({
      type:NEWS_FAIL
    })
  }
}