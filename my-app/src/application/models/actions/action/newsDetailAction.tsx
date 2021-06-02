import {Dispatch} from "redux";
import {NewsDetailDispatchTypes, NEWS_DETAIL_LOADING, NEWS_DETAIL_FAIL, NEWS_DETAIL_SUCCESS} from "../actionType/newsDetailActionType";
import { NewsDetail }  from '../../../../infrastructure/apis' 

export const GetNewsDetail = (title: string) => async (dispatch: Dispatch<NewsDetailDispatchTypes>) => {

  try {
    dispatch({type: NEWS_DETAIL_LOADING})
    const res = await NewsDetail.getNewsDetail(title)
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