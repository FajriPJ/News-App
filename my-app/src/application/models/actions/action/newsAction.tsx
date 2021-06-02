import {Dispatch} from "redux";
import {NewsDispatchTypes, NEWS_LOADING, NEWS_FAIL, NEWS_SUCCESS} from "../actionType/newsActionType";
import AllNews  from '../../../../infrastructure/apis/getAllNews' 

export const GetNews = () => async (dispatch: Dispatch<NewsDispatchTypes>) => {
  try {
    dispatch({type: NEWS_LOADING})
    const res = await AllNews.getAllNews()
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